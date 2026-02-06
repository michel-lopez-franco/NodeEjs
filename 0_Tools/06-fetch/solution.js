async function main() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    const names = data.map((u) => u.name);
    console.log(names);
  } catch (err) {
    console.error("Error en fetch:", err.message);
  }
}

main().catch((err) => console.error(err));
