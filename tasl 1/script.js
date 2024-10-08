"use strict";
const text = document.querySelectorAll("p");
text[0].textContent = "jello";
text.forEach((mov, i) => {
  mov.textContent = `paragraph ${i + 1}`;
 mov.style.backgroundColor = "blue";
});

