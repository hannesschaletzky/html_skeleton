document.body.onload = initialize;

async function initialize() {
  const json = await readJsonData();
  console.log(json);

  appendDiv();
}

function appendDiv() {
  const div = document.createElement("div");
  div.classList.add("bg-green", "text-white");
  div.innerText = "Hello World!";
  document.body.appendChild(div);
}

async function readJsonData() {
  const response = await fetch("./data.json");
  const json = await response.json();
  return json;
}
