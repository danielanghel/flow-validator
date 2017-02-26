[![Build Status](https://travis-ci.org/freddi301/flow-validator.svg?branch=master)](https://travis-ci.org/freddi301/flow-validator)
[![davidDm Dependencies](https://david-dm.org/freddi301/flow-validator.svg)]()
[![Known Vulnerabilities](https://snyk.io/test/github/freddi301/flow-validator/badge.svg)](https://snyk.io/test/github/freddi301/flow-validator)
[![Coverage Status](https://coveralls.io/repos/github/freddi301/flow-validator/badge.svg?branch=master)](https://coveralls.io/github/freddi301/flow-validator?branch=master)
[![Inline docs](http://inch-ci.org/github/freddi301/flow-validator.svg?branch=master)](http://inch-ci.org/github/freddi301/flow-validator)
![repo size](https://reposs.herokuapp.com/?path=freddi301/flow-validator)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)

# flow-validator

Object validation with proper flow types.

## Installation

```npm install flow-validator```


## Usage

```javascript
import {
  arrayOf, string, number,
  instanceof, union, object,
  ValidationError
} from 'flow-validator'

// Array<string | Date>
const Dates = arrayOf(union(string, instanceOf(Date)));
const validDates = Dates.validate([1, new Date, '10/2']); // throws

const RefinedString = string.refine((s, error) => {
  if (/el/.test(s)) return s;
  throw error(/el/); // this throws proper error
});
const validRefinedString = RefinedString.validate('hello');

// { a: string, b: number }
object({ a: string, b: number }).validate({}) // throws error

// fluent syntax
// number | string | boolean
string.or(number).or(boolean)

// Array<?string>
arrayOf(string.optional())

// to get JSON error report
try { string.validate() } catch (e) { console.log(e.toJSON()); }
```

for use outside of babel environment ```require('/node_modules/flow-validator/flow-validator.js')```

# Implemented types / combinators

| Type | Flow syntax | Runtime type |
|------|-------|-------------|
| string | `string` | `string` |
| number | `number` | `number` |
| boolean | `boolean` | `boolean` |
| generic object | `Object` | `objectType` |
| generic function | `Function` | `Function` |
| instance of `C` | `C` | `instanceOf(C)` |
| class of `C` | `Class<C>` | `classOf(C)` |
| array | `Array<A>` | `arrayOf(A)` |
| intersection | `A & B` | `intersection(A, B)` |
| union | `A | B` | `union(A, B)` |
| literal | `'s'` | `literal('s')` |
| optional | `?A` | `optional(A)` |
| map | `{ [key: A]: B }` | `mapping(A, B)` |
| refinement | ✘ | `number.refine(n => { if (n > 10) return n; throw new Error(); })` |
| object | `{ name: string }` | `object({ name: string })` |
| exact object | `{| name: string |}` | `objectExact({ name: string })` |
| null | `null` | `isNull` |
| undefined | `void` | `isUndefined` |
| not checked | `any` | `isAny` |
| all types | `mixed` | `isMixed` |
| function | `(a: A) => B` | ✘ |

# Feature Requests Wanted
(open issue, include examples or links)

# TODO

- [ ] minified build
- [ ] tuple
- [ ] literal values
- [ ] include https://github.com/hapijs/joi/blob/master/API.md features
- [ ] common controls
- [ ] test 100%
- [ ] documentation
- [ ] copy on validate
- [ ] doc 100%
- [ ] doc examples for all
- [ ] host doc on github pages
- [ ] json schema gen & validation
- [ ] promise
- [ ] performance comparison

---

[![npm version](https://badge.fury.io/js/flow-validator.svg)](https://badge.fury.io/js/flow-validator)
[![Code Climate](https://codeclimate.com/github/freddi301/flow-validator/badges/gpa.svg)](https://codeclimate.com/github/freddi301/flow-validator)
[![NSP Status](https://nodesecurity.io/orgs/frederik-batuna/projects/f9a6e9b9-c6d8-4cfb-84c0-548310794dcb/badge)](https://nodesecurity.io/orgs/frederik-batuna/projects/f9a6e9b9-c6d8-4cfb-84c0-548310794dcb)

[![bitHound Overall Score](https://www.bithound.io/github/freddi301/flow-validator/badges/score.svg)](https://www.bithound.io/github/freddi301/flow-validator)
[![bitHound Code](https://www.bithound.io/github/freddi301/flow-validator/badges/code.svg)](https://www.bithound.io/github/freddi301/flow-validator)
[![bitHound Dependencies](https://www.bithound.io/github/freddi301/flow-validator/badges/dependencies.svg)](https://www.bithound.io/github/freddi301/flow-validator/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/freddi301/flow-validator/badges/devDependencies.svg)](https://www.bithound.io/github/freddi301/flow-validator/master/dependencies/npm)

[![NPM](https://nodei.co/npm/flow-validator.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/flow-validator/)
