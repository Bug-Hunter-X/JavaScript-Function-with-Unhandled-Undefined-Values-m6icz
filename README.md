# JavaScript Function with Unhandled Undefined Values

This repository demonstrates a common, yet subtle bug in JavaScript related to the handling of null and undefined values.  The provided `foo` function attempts to gracefully handle null values but fails to properly handle undefined values, leading to unexpected NaN results.

The solution demonstrates a more robust approach that correctly handles both null and undefined values.

## Bug Description

The `foo` function, in `bug.js`, uses strict equality (`===`) to check for null values. While this correctly handles null inputs, it fails when an argument is `undefined`. When either `a` or `b` is `undefined`, the strict equality check `a === null` will return `false`, causing the code to reach `return a + b`. Adding `undefined` results in `NaN` (Not a Number).