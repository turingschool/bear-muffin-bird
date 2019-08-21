var addBearBtn = document.querySelector('.bear');
var addMuffinBtn = document.querySelector('.muffin');
var addBirdBtn = document.querySelector('.bird');
var allItems = document.querySelector('.items');

addBearBtn.addEventListener('click', addBear);
addMuffinBtn.addEventListener('click', addMuffin);
addBirdBtn.addEventListener('click', addBird);

function addBear() {
  allItems.innerHTML += `<p class="item">🐻</p>`;
}

function addMuffin() {
  allItems.innerHTML += `<p class="item">🧁</p>`;
}

function addBird() {
  allItems.innerHTML += `<p class="item">🐦</p>`;
}
