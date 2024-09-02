/* 
  * async function someFunction(){
  *   await
  * }
  * 
  * async otherFunction = async() => {
  *   await
  * }

*/

/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////

const headingOne = document.querySelector(".one");
const headingTwo = document.querySelector(".two"); // ! .four: để tạo ra lỗi >> try/catch
const headingThree = document.querySelector(".three");

const btn = document.querySelector(".btn");
const btn1 = document.querySelector(".btn1");

/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////

function addColorPromise(time, element, color) {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve("hello");
      }, time);
    } else {
      reject(new Error(`There is no such element ${element}`));
    }
  });
}

// * function nào có async đằng trước mặc định return promise >> cb trong event có return promise, nhưng trong trường hợp này chúng ta không quan tâm bởi vì thằng này ko resolve hay reject
btn.addEventListener("click", async () => {
  // * khi sử dụng async/await thì phải sử dụng try/catch block để bắt lỗi
  try {
    const first = await addColorPromise(500, headingOne, "red");
    await addColorPromise(500, headingTwo, "green");
    await addColorPromise(500, headingThree, "blue");

    console.log(first); // * nếu hàm resolve() không return gì thì sau khi chạy 3 hàm await ở trên sẽ trả về undefined; nếu có return lại thì sẽ trả về giá trị return
  } catch (error) {
    console.log(error);
  }
});

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

async function displayColor() {
  try {
    const first = await addColorPromise(500, headingOne, "red");
    await addColorPromise(500, headingTwo, "green");
    await addColorPromise(500, headingThree, "blue");
    console.log(first);
  } catch (error) {
    console.log(error);
  }
  return "hello";
}

// * bởi vì thằng displayColor() return promise >> chúng ta có thể sử dụng .then()
// * method 1
// btn1.addEventListener("click", function () {
//   displayColor().then((data) => console.log(data));
// });

//  * method 2
//  ! lưu ý: phải có async mới sử dụng await đc
btn1.addEventListener("click", async () => {
  // ? method2
  const result = await displayColor();
  console.log(result);
});
