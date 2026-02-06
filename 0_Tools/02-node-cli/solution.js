const args = process.argv.slice(2);

const suma = args
  .map((v) => Number(v))
  .filter((n) => !Number.isNaN(n))
  .reduce((acc, n) => acc + n, 0);

console.log("Suma:", suma);
