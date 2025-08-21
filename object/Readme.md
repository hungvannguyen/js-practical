## Objects — Quick Reference

Keywords: objects, properties, methods, prototype, inheritance, destructuring, spread, JSON, cloning, `this`

This document gives a concise, searchable overview of JavaScript objects and related concepts. Use the table of contents below to jump to a specific topic.

### Table of contents
- [1. Definition](#1-definition)
- [2. Creating objects](#2-creating-objects)
- [3. Accessing & modifying properties](#3-accessing--modifying-properties)
- [4. Methods](#4-methods)
- [5. The `this` keyword](#5-the-this-keyword)
- [6. References & copying](#6-references--copying)
- [7. Built-in object utilities](#7-built-in-object-utilities)
- [8. Prototypes & inheritance](#8-prototypes--inheritance)
- [9. Destructuring & spread](#9-destructuring--spread)
- [10. JSON vs objects](#10-json-vs-objects)

---

## 1. Definition
An object is a collection of key–value pairs. Keys are typically strings or symbols; values can be any JavaScript type (primitive, array, function, or another object). Objects are the primary flexible data structure for modeling real-world entities and structured data.

## 2. Creating objects
- Object literal: the most common and concise form.
- Constructor function: the older pattern that still underpins prototypes.
- Class syntax: syntactic sugar over constructor functions, recommended for clear semantics in many cases.
- `Object.create(proto)`: create an object with a specific prototype.

## 3. Accessing & modifying properties
- Read, add, update, and delete properties using dot or bracket notation.
- Dot notation is concise and common; bracket notation allows dynamic property names and non-identifier keys.
- Deleting properties vs. setting them to `undefined` have different semantics and performance implications.

## 4. Methods
A property whose value is a function is called a method. Methods commonly use `this` to reference the owning object. Keep methods focused and avoid mutating unrelated external state where possible.

## 5. The `this` keyword
`this` depends on invocation context (method call, standalone function, `call`/`apply`, or constructor). Arrow functions do not bind their own `this`; they inherit it from their lexical scope. Document expected invocation patterns for APIs that rely on `this`.

## 6. References & copying
Objects are reference types. Assigning an object to another variable copies the reference, not the data. Cloning strategies:
- Shallow copy (e.g., spread, `Object.assign`) – copies top-level properties only.
- Deep copy – required when nested objects must be duplicated; implement carefully to avoid performance and edge-case issues (circular references, functions).

## 7. Built-in object utilities
Commonly used utilities:
- `Object.keys(obj)` — array of property names.
- `Object.values(obj)` — array of property values.
- `Object.entries(obj)` — array of `[key, value]` pairs.
- `Object.assign(target, ...sources)` — copy enumerable properties.
- `Object.freeze(obj)`, `Object.seal(obj)` — control mutability.

## 8. Prototypes & inheritance
Every object has an internal prototype link to another object from which it can inherit properties. The prototype chain resolves property lookups that are not found on the object itself. Understanding prototypes is essential for inheritance, method delegation, and property resolution.

## 9. Destructuring & spread
Destructuring provides a concise syntax for extracting properties into variables. The spread operator (`...`) can clone or merge objects immutably. Use these features to write clearer and more declarative data-transform code.

## 10. JSON vs objects
JavaScript objects are in-memory structures; JSON is a textual data interchange format. Convert between them using `JSON.stringify` and `JSON.parse` when sending/receiving data from external systems or APIs.

---

Notes
- For implementation patterns and examples, keep related examples in separate `.js` files next to this README.
- This file is designed for quick scanning and keyword search; update the Keywords line when adding new relevant topics.
