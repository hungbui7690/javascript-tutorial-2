/*
 * Make Soup:
 * Chop Onion
 * Chop Carrots
 * Boil Water for 10,000
 * Add Carrots & Boil for 5,000
 * Add Onion & Boil for 5,000
 
* Browser sẽ cung cấp cho chúng ta những hàm này: Fetch Data, Get Geolocation, setTimer, setTimer...
* Vì vậy, khi nói Async Code chạy ở background >> chúng ta đưa cho browser, và browser chạy giúp chúng ta


 * 
 */

// ! sử dụng setTimeout()
function boilingWater(time) {
  console.log("boiling...");
  setTimeout(() => {
    console.log(`DONE ${time}`);
  }, time);
}

//////////////////////////////////////////
console.log("========= 1 =========");
//////////////////////////////////////////

// boilingWater(10_000);
// console.log("Chop Onion");
// console.log("Chop Carrot");
// boilingWater(5_000);

// * có thể thấy rằng bây giờ chúng ta đã có thể chop onion và carrot trong khi boiling...

//////////////////////////////////////////
console.log("========= 2 =========");
//////////////////////////////////////////
boilingWater(1_000);
console.log("Chop Onion");
console.log("Chop Carrot");
for (let i = 0; i < 2000; i++) console.log("Still busy...");
