const tareas = [400, 300, 200];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runSerie() {
  // TODO
}

async function runParalelo() {
  // TODO
}

async function main() {
  console.time("serie");
  await runSerie();
  console.timeEnd("serie");

  console.time("paralelo");
  await runParalelo();
  console.timeEnd("paralelo");
}

main();
