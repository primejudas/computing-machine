const container = document.getElementById("container");
const rows = document.querySelectorAll("#row");
const operas = document.querySelectorAll("#opr");
const disp = document.getElementById("rowdisp2");
const disp1 = document.getElementById("rowdisp");
const clear = document.querySelector("#clr");
const del = document.querySelector("#del");
let equal = document.querySelector("#rowequl");

rows.forEach((node) => {
  node.addEventListener("click", (e) => {
    disp.textContent = disp.textContent + e.target.dataset.id;
  });
});

operas.forEach((node) => {
  node.addEventListener("click", (e) => {
    disp.textContent = disp.textContent + e.target.dataset.id;
  });
});

clear.addEventListener("click", (e) => {
  disp.textContent = "";
  disp1.textContent = "";
});

del.addEventListener("click", (e) => {
  disp.textContent = disp.textContent.slice(0, -1);
});
document.addEventListener("keypress", (e) => {
  let name = e.key;
  disp.textContent = disp.textContent + name;
});

equal.addEventListener("click", (e) => {
  const contentOnTheScreen = disp.textContent;
  let lastItem = contentOnTheScreen.slice(-1);
  if (["+", "-", "*", "/"].includes(lastItem)) {
    disp.textContent = disp.textContent.slice(0, -1);
  } else {
    if (contentOnTheScreen.includes("+")) {
      contentOnTheScreen.indexOf("+");
      let num1 = contentOnTheScreen.slice(0, contentOnTheScreen.indexOf("+"));
      let num2 = contentOnTheScreen.slice(contentOnTheScreen.indexOf("+") + 1);
      disp.textContent = add(Number(num1), Number(num2));
      disp1.textContent = contentOnTheScreen;
    } else if (contentOnTheScreen.includes("*")) {
      contentOnTheScreen.indexOf("*");
      let num1 = contentOnTheScreen.slice(0, contentOnTheScreen.indexOf("*"));
      let num2 = contentOnTheScreen.slice(contentOnTheScreen.indexOf("*") + 1);
      disp.textContent = multiply(Number(num1), Number(num2));
      disp1.textContent = contentOnTheScreen;
    } else if (contentOnTheScreen.includes("-")) {
      contentOnTheScreen.indexOf("-");
      let num1 = contentOnTheScreen.slice(0, contentOnTheScreen.indexOf("-"));
      let num2 = contentOnTheScreen.slice(contentOnTheScreen.indexOf("-") + 1);
      disp.textContent = subsract(Number(num1), Number(num2));
      disp1.textContent = contentOnTheScreen;
    } else if (contentOnTheScreen.includes("/")) {
      contentOnTheScreen.indexOf("/");
      let num1 = contentOnTheScreen.slice(0, contentOnTheScreen.indexOf("/"));
      let num2 = contentOnTheScreen.slice(contentOnTheScreen.indexOf("/") + 1);
      disp.textContent = divide(Number(num1), Number(num2));
      disp1.textContent = contentOnTheScreen;
    } else if (contentOnTheScreen.includes("^")) {
      contentOnTheScreen.indexOf("^");
      let num1 = contentOnTheScreen.slice(0, contentOnTheScreen.indexOf("^"));
      let num2 = contentOnTheScreen.slice(contentOnTheScreen.indexOf("^") + 1);
      disp.textContent = divide(Number(num1), Number(num2));
      disp1.textContent = contentOnTheScreen;
    }

    function add(parameter1, parameter2) {
      return parameter1 + parameter2;
    }
    function mathplus(parameter1, parameter2) {
      return parameter1 ** parameter2;
    }
    function multiply(parameter1, parameter2) {
      return parameter1 * parameter2;
    }
    function subsract(parameter1, parameter2) {
      return parameter1 - parameter2;
    }
    function divide(parameter1, parameter2) {
      return parameter1 / parameter2;
    }
    function err(parameter1, parameter2) {
      return "MATH ERROR!";
    }
  }
});
