const boxes=document.getElementsByClassName(`box`);for(let i=0;i<boxes.length;i++){boxes[i].addEventListener('click',open_close_it);}
function open_close_it(event){event.preventDefault();let thisBox=event.target.closest(`.box`);let theAnswer=thisBox.children[1];let thisVectorImage=thisBox.children[0].children[0];thisBox.classList.toggle(`active`);if(thisBox.classList.contains(`active`)){thisVectorImage.style.transform=`rotate(180deg)`;theAnswer.style.maxHeight=theAnswer.scrollHeight+`px`;}else{thisVectorImage.style.transform=`rotate(0deg)`;theAnswer.style.maxHeight=`0`;}}
const hamburger=document.querySelector("#hamburger");const popup=document.querySelector("#popup");hamburger.addEventListener("click",hambHandler);function hambHandler(){popup.classList.toggle(`open`);hamburger.classList.toggle("active");}
const toDuyPage=document.querySelectorAll(`.play`);for(let i of toDuyPage){i.setAttribute(`onclick`,`go_to_buy_page`)}
function go_to_buy_page(){window.location.href='/buy'}
