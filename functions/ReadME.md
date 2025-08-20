<!-- Key thing about Function -->

## Functions — Overview and Key Concepts

This document summarizes the core concepts related to functions in JavaScript, explaining terminology, special behaviors, and practical considerations for using functions effectively.

Completed topics:
1) Function fundamentals
2) Parameters & arguments
3) Function expressions
4) Arrow functions (ES6)
5) Return values
6) Scope
7) Closures
8) Higher-order functions
9) Callbacks & async functions
10) The `this` keyword
11) Hoisting
12) IIFE (Immediately Invoked Function Expression)
13) Rest & spread with functions
14) Pure vs. impure functions

---

1) Function fundamentals

A function is a block of code that performs a task or computes a value and may return that value. Functions can be declared using declarations or expressions. They may produce side effects (mutating external state, manipulating the DOM, performing network calls) or be purely computational.

2) Parameters & arguments

- Parameter: the named placeholder in a function definition; parameters may have default values.
- Argument: the actual value passed when calling the function.
- Note: the number of arguments passed may differ from the number of parameters; there are patterns to collect remaining values when necessary. Passing `undefined` or `null` can change behavior, so document required parameters and follow a clear API contract.

3) Function expressions

- A function expression is a function assigned to a variable or used as a value (for example, when passing a callback).
- Unlike function declarations, expressions are not hoisted in the same way; when assigned to `const`/`let` they follow block-scoping rules.
- Use function expressions when you need dynamic function values, factories, or callbacks.

4) Arrow functions (ES6)

- Arrow functions provide a concise syntax and do not create their own bindings for `this`, `arguments`, `super`, or `new.target`.
- Arrow functions cannot be used as constructors.
- They are appropriate for short functions and simple callbacks; avoid them when a dynamic `this` context is required.

5) Return values

- If a function has no explicit `return`, it evaluates to `undefined`.
- Functions may return any type: primitives, objects, other functions, Promises, etc.
- Define a clear contract for return values, error conditions (throw vs. sentinel values), and behavior with invalid inputs.

6) Scope

- JavaScript provides global scope, function scope, and block scope (with `let`/`const`).
- Variables declared with `var` are function-scoped and hoisted; `let`/`const` have a temporal dead zone and are only accessible after their declaration.
- Understanding scope helps avoid name collisions and accidental mutation of shared state.

7) Closures

- A closure occurs when a function retains access to variables from the lexical scope in which it was created, even after that outer scope has finished execution.
- Use closures for encapsulating private state, creating factories, partial application, and memoization.
- Be mindful of memory: closures hold references to outer variables and can contribute to retained memory if large structures are captured.

8) Higher-order functions (HOF)

- A higher-order function accepts one or more functions as arguments or returns a function as its result.
- HOFs enable abstraction, composition, decorators, and transformation pipelines.
- Design HOFs with clear, minimal interfaces to improve composability and reuse.

9) Callbacks & async functions

- A callback is a function passed to another function to be invoked after a task completes (synchronously or asynchronously).
- Promises and `async`/`await` provide modern patterns for asynchronous control flow, improving readability compared to nested callbacks.
- Always handle asynchronous errors (via `.catch` or `try`/`catch`), and consider timeouts and cancellation patterns where applicable.

10) The `this` keyword

- The value of `this` depends on how a function is invoked: as a method, as a standalone function, via `call`/`apply`, or as a constructor.
- Arrow functions do not have their own `this`; they inherit `this` lexically from the surrounding scope.
- When designing APIs, document expected invocation context to avoid ambiguous behavior and bugs.

11) Hoisting

- Function declarations are hoisted and can be invoked before their appearance in source order.
- Variables declared with `var` are hoisted (initially `undefined`); `let`/`const` cannot be accessed before their declaration (temporal dead zone).
- Function expressions assigned to variables do not have the same hoisting behavior as declarations.

12) IIFE (Immediately Invoked Function Expression)

- An IIFE is a pattern that executes a function immediately after it is defined and is used to create a private scope.
- ES modules (import/export) have largely replaced many use cases for IIFEs, but IIFEs remain useful in contexts where a quick, isolated scope is needed.

13) Rest & spread with functions

- Rest parameters (`...args`) collect remaining arguments into an array, enabling flexible APIs.
- Spread syntax (`...iterable`) expands arrays or iterables when calling functions or constructing new collections.
- Use spread to clone or merge arrays/objects immutably rather than mutating existing structures.

14) Pure vs. impure functions

- Pure functions always produce the same output for the same input and have no side effects; they are easier to test and reason about.
- Impure functions depend on or modify external state (randomness, current time, I/O, global mutation).
- Prefer isolating pure logic and confining impure behavior to integration layers (I/O, network, UI).

---

Best practices (brief)

- Keep functions focused and short; follow single-responsibility principles.
- Document parameters, return values, and error behavior.
- Avoid mutating input values; favor immutable patterns.
- Use `const` for function references when reassignment is not intended.
- Separate pure logic from side effects to facilitate testing.

Edge cases to test

- `null` / `undefined` / missing parameters
- Type mismatches
- Recursion depth / potential stack overflows
- Performance with large collections
- Asynchronous errors, timeouts, and race conditions
