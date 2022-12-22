const addItems: HTMLFormElement | null = document.querySelector(".add-items");
const itemsList: HTMLUListElement | null = document.querySelector(".plates");
const items: Item[] = [];

interface Item {
  name: String;
  done: Boolean;
}

function addItem(e: Event) {
  e.preventDefault();
  items.push({ name: <string>addItems?.item.value, done: true });
  console.table(items);

  addItems?.reset();
}

// function populateList(plates: Item[] = [], platesList: HTMLUListElement) {
//   platesList.innerHTML = plates.map((plate) => {
//     return `
//     <li>

//     </li>`;
//   });
// }

addItems?.addEventListener("submit", addItem);
