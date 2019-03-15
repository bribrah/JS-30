const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];
console.log(items);

addItems.addEventListener('submit', addItem);
populateList(items,itemsList);

function addItem(e){
    //this is the form element
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false
    };
    items.push(item);
    populateList(items,itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}

function populateList(plates = [], platesList){
    platesList.innerHTML = plates.map((plate , i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? "checked" : ""} >
                <label for="item${i}">${plate.text}</label>
            </li>
        `;
    }).join("");
}

itemsList.addEventListener('click', toggleDone)
function toggleDone(e){
    if (!e.target.matches('input')) return; //skip unless clicking an input
    items[e.target.dataset.index].done = !items[e.target.dataset.index].done;

}