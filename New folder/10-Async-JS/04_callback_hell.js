/*
 * callback, promise, async/await

 * Make Soup:
      * Chop Onion
      * Chop Carrots
      * Boil Water for 10,000
      * Add Carrots & Boil for 5,000
      * Add Onion & Boil for 5,000
      
 * ở bài trước, chúng ta đã có thể chop carrots trong thời gian đc nc sôi >> nhưng vẫn chưa thể làm chính xác như công thức (thiếu add Carrots & Boil...)
 */

function boilWater() {
  console.log("Boiling...");
  setTimeout(() => {
    console.log("Done 10000");
    console.log("Add Carrots");
    setTimeout(() => {
      console.log("Carrots Done");
      console.log("Add Onions");
      setTimeout(() => {
        console.log("Onions Done");
      });
    }, 5000);
    console.log("Chop Onion");
  }, 10000);
}

// ! Hiện tại, chúng ta đã tạo ra callback hell

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

boilWater();
console.log("Chop Carrots");
