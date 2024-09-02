const btn = document.querySelector(".btn");

const url = "./api/people.json";
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////

btn.addEventListener("click", function () {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      displayItems(data); // ! gọi function ở đây
    })
    .catch((err) => console.log(err));
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
