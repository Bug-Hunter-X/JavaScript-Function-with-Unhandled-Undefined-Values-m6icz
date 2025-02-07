function foo(a, b) {
  // Check for null or undefined using loose equality
  if (a == null || b == null) {
    return 0;
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(1, null)); // Output: 0
console.log(foo(undefined, 2)); // Output: 0
console.log(foo(null, 2)); // Output: 2