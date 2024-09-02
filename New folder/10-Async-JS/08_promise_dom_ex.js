/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////

const headingOne = document.querySelector(".one");
const headingTwo = document.querySelector(".two");
const headingThree = document.querySelector(".three");

const btn = document.querySelector(".btn");

/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////

function addColor(time, element, color) {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve(); // * trường hợp này ko có data trả về
      }, time);
    } else {
      reject(new Error(`There is no such element ${element}`));
    }
  });
}

// * đây là làm lại bài số 5 bằng cách sử dụng promise
// ! bởi vì addColor() trả về promise >> chúng ta có thể dùng .then() để chain
btn.addEventListener("click", () => {
  addColor(1000, headingOne, "red")
    .then(() => addColor(2000, headingTwo, "green"))
    .then(() => addColor(3000, headingThree, "blue"))
    .catch((err) => console.log(err));
});
