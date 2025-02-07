function foo(a, b) {
  if (a === null || b === null) {
    return 0; // This will cause an error if a or b is undefined
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(1, null)); // Output: 0
console.log(foo(undefined, 2)); // Output: NaN (This is the error)