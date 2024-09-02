/* 
* Khi chúng ta vào nhà hàng và order, thường thì chúng ta sẽ không nhận đc food ngay, mà chỉ nhận đc receipt >> receipt là promise 
* Promise có 3 trạng thái: pending, resolved, rejected

* new Promise(cb) >> trong cb đó nhận vào 2 functions nữa

*/

const promise = new Promise((resolve, reject) => {
  let value = false; // * thằng value này giả bộ như là value mà chúng ta nhận đc từ server sau khi request tới server
  if (value) resolve([1, 2, 2]);
  else reject(`error`);
});
console.log(promise);

// * vậy bây giờ làm sao lấy đc value đó ra >> ko thể lấy bằng promise.value >> mà phải lấy bằng promise.then()
// * đây là cách duy nhất để lấy ra value trong promise >> và đây là value khi fulfilled >> value mà chúng ta truyền vào resolve() sẽ đc lấy ra ở đây
promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));
