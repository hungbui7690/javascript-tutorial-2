const btn = document.querySelector(".btn");

const url = "./api/people.jsons";

/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////

// ! đây là trường hợp không có try/catch >> app bị stop
// console.log(abc);

// * dưới đây nhờ có try/catch nên app vẫn tiếp tục chạy
try {
  console.log("hello");
  console.log(random);
} catch (error) {
  console.log(error);
}

console.log("hey");

/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////

btn.addEventListener("click", async function () {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    displayItems(data);
  } catch (error) {
    console.log(error);
  }
});

const displayItems = (items) => {
  const displayData = items
    .map((item) => {
      const { name } = item;
      return `<p>${name}</p>`;
    })
    .join("");

  const element = document.createElement("div");
  element.innerHTML = displayData;
  document.body.appendChild(element);
};
