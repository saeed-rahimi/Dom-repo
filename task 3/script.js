const list=document.querySelectorAll(".list");
const showbox=document.querySelector(".textlist");
const clearBTN=document.querySelector(".btn");
const ul=document.getElementById("clear");
list.forEach(item => {
    item.addEventListener('click', (e) => {
        console.log(item);
        showbox.textContent=""
        showbox.textContent = `You clicked: ${e.target.textContent}`;
    });


    item.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'red';
    });

    item.addEventListener('mouseout', (e) => {
        e.target.style.backgroundColor = ''; 
    });
    clearBTN.addEventListener('click', () => {
        item.innerHTML = ''; 
         showbox.textContent = ''; 
       });
  });

 
 