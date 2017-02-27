// @flow

export class Type<T> {
  name: string;
  validate: (value: mixed) => T;
  constructor(name: string, validate: (value: mixed) => T) { this.name = name; this.validate = validate; }
  refine(f: (v: T, error: (e: any) => ValidationError) => T): Type<T> {
    return new Type('refinement', v => f(this.validate(v), (err: any) => new ValidationError({ expected: err, got: v })));
  }
  and<T2>(t2: Type<T2>): IntersectionType<T, T2> { return intersection(this, t2); }
  or<T2>(t2: Type<T2>): UnionType<T, T2> { return union(this, t2); }
  optional(): OptionalType<T> { return optional(this); }
}

export class CustomErrorType<T> extends Type<T> {}

export class InstanceOfType<T> extends Type<T> {
  class: Class<T>;
  constructor(c: Class<T>, validate: (value: mixed) => T) { super('instanceof', validate); this.class = c; }
}

export class ClassOfType<T> extends Type<T> {
  class: T;
  constructor(c: T, validate: (value: mixed) => T) { super('classOf', validate); this.class = c; }
}

export class ArrayOfType<T> extends Type<Array<T>> {
  type: Type<T>;
  constructor(t: Type<T>, validate: (value: mixed) => Array<T>) { super('arrayOf', validate); this.type = t; }
}

export class IntersectionType<A, B> extends Type<A & B> {
  typeA: Type<A>;
  typeB: Type<B>;
  constructor(a: Type<A>, b: Type<B>, validate: (value: mixed) => A & B) {
    super('intersection', validate); this.typeA = a; this.typeB = b;
  }
}

export class UnionType<A, B> extends Type<A | B> {
  typeA: Type<A>;
  typeB: Type<B>;
  constructor(a: Type<A>, b: Type<B>, validate: (value: mixed) => A | B) {
    super('union', validate); this.typeA = a; this.typeB = b;
  }
}

export class LiteralType<T> extends Type<T> {
  value: T;
  constructor(t: T, validate: (value: mixed) => T) { super('literal', validate); this.value = t; }

}

export class OptionalType <T> extends Type<?T> {
  type: Type<T>;
  constructor(t: Type<T>, validate: (value: mixed) => ?T) { super('optional', validate); this.type = t; }
}

export class MappingType<K, V> extends Type<{[key: K]: V}> {
  keys: Type<K>;
  values: Type<V>;
  constructor(keys: Type<K>, values: Type<V>, validate: (value: mixed) => {[key: K]: V}) {
    super('mapping', validate);
    this.keys = keys;
    this.values = values;
  }
}

export type SchemaProps = {[key: string]: Type<any>};
export type SchemaType<P> = $ObjMap<P, <T>(v: Type<T>) => T>;
export class ObjectType<S: SchemaProps, T: SchemaType<S>> extends Type<T> {
  schema: S;
  constructor(schema: S, validate: (value: mixed) => T) {
    super('object', validate);
    this.schema = schema;
  }
}

export class ObjectExactType<S: SchemaProps, T: SchemaType<S>> extends Type<T> {
  schema: S;
  constructor(schema: S, validate: (value: mixed) => T) {
    super('objectExact', validate);
    this.schema = schema;
  }
}

export type ValidationErrorPayload = { expected: Type<any>, got: any, errors?: {[key: string]: ValidationError } }
export class ValidationError extends Error {
  payload: ValidationErrorPayload;
  constructor(payload: ValidationErrorPayload) { super('ValidationError'); this.payload = payload; }
  toJSON() {
    if (this.payload.errors) {
      const errors = {};
      for (const key of Object.keys(this.payload.errors)) { errors[key] = this.payload.errors[key].toJSON(); }
      return { expected: this.payload.expected, got: this.payload.got, errors }
    }
    return this.payload;
  }
}

export const empty: Type<void | null> = new Type('empty', v => {
  if (v === null || v === void 0) return v;
  throw new ValidationError({ expected: empty, got: v });
});

export const isNull: Type<null> = new Type('null', v => {
  if (v === null) return v;
  throw new ValidationError({ expected: isNull, got: v });
});

export const isUndefined: Type<void> = new Type('undefined', v => {
  if (v === void 0) return v;
  throw new ValidationError({ expected: isUndefined, got: v });
});

export const noProperty: Type<void> = new Type('noProperty', v => {
  if (v === void 0) return v;
  throw new ValidationError({ expected: isUndefined, got: v });
});

export const isMixed: Type<mixed> = new Type('mixed', v => v);

export const isAny: Type<any> = new Type('any', v => v);

export const string: Type<string> = new Type('string', v => {
  if (typeof v === 'string') return v;
  throw new ValidationError({ expected: string, got: v });
});

export const number: Type<number> = new Type('number', v => {
  if (typeof v === 'number') return v;
  throw new ValidationError({ expected: number, got: v });
});

export const boolean: Type<boolean> = new Type('boolean', v => {
  if (typeof v === 'boolean') return v;
  throw new ValidationError({ expected: boolean, got: v });
});

export const objectType: Type<Object> = new Type('Object', v => {
  if (typeof v === 'object' && !!v && !Array.isArray(v)) return v;
  throw new ValidationError({ expected: objectType, got: v });
});

export const functionType: Type<Function> = new Type('Function', v => {
  if (typeof v === 'function') return v;
  throw new ValidationError({ expected: functionType, got: v });
});

export const arrayType: Type<Array<mixed>> = new Type('Array', v => {
  if (typeof v === 'object' && v instanceof Array) return v;
  throw new ValidationError({ expected: arrayType, got: v });
});

export function instanceOf<T>(c: Class<T>): InstanceOfType<T> {
  const iof = new InstanceOfType(c, v => {
    if (v instanceof c) return v;
    throw new ValidationError({ expected: iof, got: v });
  });
  return iof;
}

export function classOf<T>(c: Class<T>): ClassOfType<Class<T>> {
  const cof = new ClassOfType(c, v => {
    const f = functionType.validate(v);
    if (f === c || f.prototype instanceof c) return f;
    throw new ValidationError({ expected: cof, got: v });
  });
  return cof;
}

export function arrayOf<T>(t: Type<T>): ArrayOfType<T> {
  const aof = new ArrayOfType(t, v => {
    const a = arrayType.validate(v);
    const errors = {};
    a.forEach((item, index) => {
      try { t.validate(item); } catch (e) {
        if (e instanceof ValidationError) errors[index] = e;
        else throw e;
      }
    });
    if (Object.getOwnPropertyNames(errors).length) throw new ValidationError({ expected: aof, got: v, errors });
    return ((a: any): Array<T>); // eslint-disable-line flowtype/no-weak-types
    // return a.map(t.validate); this is type correct
  });
  return aof;
}

export function intersection<A, B>(a: Type<A>, b: Type<B>): IntersectionType<A, B> {
  return new IntersectionType(a, b, v => {
    a.validate(v);
    b.validate(v);
    return ((v: any): A & B); // eslint-disable-line flowtype/no-weak-types
  });
}

export function union<A, B>(a: Type<A>, b: Type<B>): UnionType<A, B> {
  const u = new UnionType(a, b, v => {
    let left; let right;
    try { left = a.validate(v); } catch (e) { if (e instanceof ValidationError); else throw e; }
    try { right = b.validate(v); } catch (e) { if (e instanceof ValidationError); else throw e; }
    if (left) return left;
    if (right) return right;
    throw new ValidationError({ expected: u, got: v });
  });
  return u;
}

type LiteralTypeValue = string | number | boolean;
export function literal<T: LiteralTypeValue>(value: T): LiteralType<T> {
  const lt = new LiteralType(value, v => {
    if (value === v) return ((v: any): T); // eslint-disable-line flowtype/no-weak-types
    throw new ValidationError({ expected: lt, got: v });
  });
  return lt;
}

export function optional<T>(t: Type<T>): OptionalType<T> {
  return new OptionalType(t, v => {
    if ((v === null) || (v === void 0)) return v;
    return t.validate(v);
  });
}

export function mapping<K: string, V>(keys: Type<K>, values: Type<V>): MappingType<K, V> {
  const m = new MappingType(keys, values, v => {
    const o = objectType.validate(v);
    const ks = Object.keys(o);
    const errors = {};
    for (const key of ks) {
      const value = o[key];
      let ke; let ve;
      try { keys.validate(key); } catch (e) { if (e instanceof ValidationError) ke = e; else throw e; }
      try { values.validate(value); } catch (e) { if (e instanceof ValidationError) ve = e; else throw e; }
      if (ke || ve) { errors[key] = { key: ke, value: ve }; }
    }
    if (Object.getOwnPropertyNames(errors).length) throw new ValidationError({ expected: m, got: v, errors });
    return ((v: any): {[key: K]: V}); // eslint-disable-line flowtype/no-weak-types
  });
  return m;
}

export function unionFromObjectKeys<O: Object>(o: O): Type<$Keys<O>> {
  const en = new Type('enum', v => {
    const keys = Object.keys(o);
    if (~keys.indexOf(v)) return ((v: any): $Keys<O>);  // eslint-disable-line flowtype/no-weak-types
    throw new ValidationError({ expected: en, got: v });
  });
  return en;
}

export function object<S:SchemaProps>(s: S): ObjectType<S, SchemaType<S>> {
  const os = new ObjectType(s, v => {
    const o = objectType.validate(v);
    const keys = Object.keys(s);
    const errors = {};
    for (const key of keys) {
      try { s[key].validate(o[key]) } catch (e) { if (e instanceof ValidationError) errors[key] = e; else throw e; }
    }
    if (Object.getOwnPropertyNames(errors).length) throw new ValidationError({ expected: os, got: o, errors });
    return o;
  });
  return os;
}

export function objectExact<S:SchemaProps>(s: S): ObjectExactType<S, SchemaType<$Exact<S>>> {
  const os = new ObjectExactType(s, v => {
    const o = objectType.validate(v);
    const keys = Object.keys(o);
    const errors = {};
    for (const key of keys) {
      if (!s.hasOwnProperty(key)) { errors[key] = new ValidationError({ expected: noProperty, got: o[key] }) }
      else try { s[key].validate(o[key]) } catch (e) { if (e instanceof ValidationError) errors[key] = e; else throw e; }
    }
    if (Object.getOwnPropertyNames(errors).length) throw new ValidationError({ expected: os, got: o, errors });
    return o;
  });
  return os;
}
