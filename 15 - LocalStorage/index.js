var addItems = document.querySelector(".add-items");
var itemsList = document.querySelector(".plates");
var items = [];
function addItem(e) {
    e.preventDefault();
    items.push({ name: addItems === null || addItems === void 0 ? void 0 : addItems.item.value, done: true });
    console.table(items);
    addItems === null || addItems === void 0 ? void 0 : addItems.reset();
}
// function populateList(plates: Item[] = [], platesList: HTMLUListElement) {
//   platesList.innerHTML = plates.map((plate) => {
//     return `
//     <li>
//     </li>`;
//   });
// }
addItems === null || addItems === void 0 ? void 0 : addItems.addEventListener("submit", addItem);
