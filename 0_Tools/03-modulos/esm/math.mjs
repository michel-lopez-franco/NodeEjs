export function suma(a, b) {
  return a + b;
}

export default function promedio(nums) {
  const total = nums.reduce((acc, n) => acc + n, 0);
  return total / nums.length;
}
