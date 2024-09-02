const btn = document.querySelector(".btn");

const url = "./api/people.json";
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////

// * có thể thấy sử dụng async/await giúp code của chúng ta gọn đi rất nhiều
btn.addEventListener("click", async function () {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  displayItems(data);
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
