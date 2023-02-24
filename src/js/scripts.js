const porcentagem1 = document.querySelector("#porcentagem");
const porcentagem2 = document.querySelector("#porcentagem-2");

let count1 = 0;
let count2 = 0;

setInterval(() => {
  if (count1 === 70) {
    clearInterval();
  } else {
    count1++;
    porcentagem1.innerHTML = count1 + "%";
  }
}, 20);

setInterval(() => {
  if (count2 === 90) {
    clearInterval();
  } else {
    count2++;
    porcentagem2.innerHTML = count2 + "%";
  }
}, 25);
