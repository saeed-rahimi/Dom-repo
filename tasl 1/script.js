"use strict";
const text = document.querySelectorAll("p");
text.forEach((mov, i) => {
  mov.textContent = `paragraph ${i + 1}`;
 mov.style.backgroundColor = "lightblue";
 mov.style.borderRadius = "16px";
});
text[0].textContent = "First paragraph has been updated!";

