/*
 * Fetch is built in >> we don't need to install anything
 * Promise based
 * XHR is not wrong, we can complete all upcoming example using XHR. FETCH is just an alternative & modern approach with simpler & cleaner syntax
 */

const btn = document.querySelector(".btn");

const url = "./api/people.json";
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////

// * thằng fetch() sẽ trả về promise có chứa response object: trong đây chứa 1 số useful properties và methods
// * phải nhớ trong .then() sau fetch() phải có "RETURN"
fetch(url)
  .then((response) => {
    console.log(response);
    return response.json(); // ! thằng này trả về promise mà resolve() là JS Object
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// ! có thể thấy thằng fetch() giúp chúng ta chỉ tốn vài dòng code khi work với AJAX
