const toDoList = JSON.parse(localStorage.getItem('to-do-list')) || ['A', 'B']; // empty array

renderList();

function renderList() {
  let htmlListHTML = '';
  for(let i = 0; i<toDoList.length; i++) {
    htmlListHTML += `<p>${toDoList[i]}</p>`; // generating an html with array
  }
  localStorage.setItem('to-do-list', JSON.stringify(toDoList));
  document.querySelector('.created-list').innerHTML = htmlListHTML;
}
// document.querySelector('.created-list').innerHTML = '';
// console.log(htmlListHTML);

function addToDO(){
  const inputdata =  document.querySelector(".to-do-clss");
  const name = inputdata.value;
  if (name !== '') {
    toDoList.push(name);
    renderList();
  }
  inputdata.value = '';
  console.log(toDoList);
}