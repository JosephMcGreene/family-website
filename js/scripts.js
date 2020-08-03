const newItemInput = document.querySelector('#newItemInput');
const newItemButton = document.querySelector('#newItemButton');
const listUl = document.querySelector('ul');
const lis = listUl.children;


function attachListItemButtons (li) {
  let checkBox = document.createElement('input');

// Start Here Next Time <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<-----------------------------

  let upButton = document.createElement('button');
  upButton.className = 'up';
  upButton.textContent = 'Up';
  li.appendChild(upButton);

  let downButton = document.createElement('button');
  downButton.className = 'down';
  downButton.textContent = 'Down';
  li.appendChild(downButton);

  let removeButton = document.createElement('button');
  removeButton.className = 'remove';
  removeButton.textContent = 'Remove';
  li.appendChild(removeButton);
}

// for (let i = 0; i < lis.length; i++ ) {
//   attachListItemButtons(lis[i]);
// }

newItemButton.addEventListener('click', () => {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.textContent = newItemInput.value;
  ul.appendChild(li);
  attachListItemButtons(li);
  newItemInput.value = '';
});

listUl.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON')

    if (event.target.textContent === 'Remove') {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
    if (event.target.textContent === 'Up') {
      let li = event.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      if (prevLi) {
        ul.insertBefore(li, prevLi);
      }
    }
    if (event.target.textContent === 'Down') {
      let li = event.target.parentNode;
      let nextLi = li.nextElementSibling;
      let ul = li.parentNode;
      if (nextLi) {
        ul.insertBefore(nextLi, li);
      }
    }
});
