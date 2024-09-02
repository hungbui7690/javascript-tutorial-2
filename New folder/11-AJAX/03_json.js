/*
  * JSON = Javascript Object Notation

  * khi server send data cho chúng ta, thì chỉ có thể send dưới dạng text >> nhưng nếu send dưới dang text thì data structure bên trong không thể giữ lại >> đó là lý do vì sao chúng ta sử dụng JSON >> có thể convert sang string để send và cũng có thể convert lại thành JSON để lấy lại data structure mà chúng ta muốn

  * với JSON file thì property name phải là string, chứ ko thể là type khác như object

  ! nhớ cài JSON Viewer Chrome Extension

  * 2 methods phải nhớ khi work với JSON: 
    * JSON.parse() >> convert String to JSON
    * JSON.stringify() >> convert JSON to String


 */

const btn = document.querySelector(".btn");

const url = "./api/people.json";
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////

// * có thể thấy khi click ko có refresh
btn.addEventListener("click", () => {
  getData(url);
});

// * bỏ hết ở bài trước vào function
function getData(url) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // * ===========================================

      console.log(typeof xhr.responseText); //* string

      const data = JSON.parse(xhr.responseText);
      console.log(typeof data); //* object
      console.log(data);

      // * cách này thường sử dụng khi work với JSON
      const displayData = data
        .map((item, i) => {
          return `<p>${item.name}</p>`;
        })
        .join(" ");

      const element = document.createElement("div");
      element.innerHTML = displayData;
      document.body.appendChild(element);

      // * ===========================================
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
        state: xhr.readyState,
      });
    }
  };

  xhr.send();
}
