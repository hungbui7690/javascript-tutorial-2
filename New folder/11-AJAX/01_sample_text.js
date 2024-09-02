/* 
  * AJAX: Asynchronous Javascript & XML
  * HTTP Requests: communication between client & server
  * API: Application Programming Interface

*/

/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////

const xhr = new XMLHttpRequest();
console.log(xhr); // * readyState, status >> xem sự thay đổi của 2 thằng này

xhr.open("GET", "./api/sample.txt");
console.log(xhr); // * sau khi open, readyState = 1

// * có thể check file bằng browser >> localhost:8080/api/sample.txt

/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////

console.log("===========");

// ! bởi vì thằng này chạy ở background >> sẽ ko refresh page
xhr.onreadystatechange = function () {
  // console.log(xhr); // * thấy rõ readyState thay đổi
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
    const text = document.createElement("p");
    text.textContent = xhr.responseText;
    document.body.appendChild(text);
  } else {
    console.log({
      // ! thằng này cho dù ra status 200 vẫn chạy. lý do là vì ở state2, và state3 vẫn log ra thằng này
      status: xhr.status,
      text: xhr.statusText,
      state: xhr.readyState,
    });
  }
};

xhr.send();

console.log("Hello World"); // ! thằng này sẽ chạy trước
