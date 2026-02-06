const tareas = [400, 300, 200];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runSerie() {
  for (const ms of tareas) {
    await sleep(ms);
  }
}

async function runParalelo() {
  await Promise.all(tareas.map((ms) => sleep(ms)));
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
