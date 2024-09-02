const headingOne = document.querySelector(".one");
const headingTwo = document.querySelector(".two");
const headingThree = document.querySelector(".three");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  setTimeout(() => {
    headingOne.style.color = "red";
    setTimeout(() => {
      headingTwo.style.color = "green";
      setTimeout(() => {
        headingThree.style.color = "blue";
      }, 1000);
    }, 1000);
  }, 1000);
});

// * chạy theo thứ tự red > green > blue
// ! callback hell as well >> nesting callback inside a callback >> sử dụng Promise / async/await để không phải nest callbacks

console.log("I'm second");
