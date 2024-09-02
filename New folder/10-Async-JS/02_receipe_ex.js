/*
 * Make Soup:
 * Chop Onion
 * Chop Carrots
 * Boil Water for 10,000
 * Add Carrots & Boil for 5,000
 * Add Onion & Boil for 5,000
 * Làm sao làm đc công thức ở trên bằng sync
 */

function boilingWater(time) {
  console.log("boiling...");
  for (let i = 0; i < time; i++) console.log("still not done....");
  console.log("DONE");
}

//////////////////////////////////////////
console.log("========= 1 =========");
//////////////////////////////////////////
console.log("Chop Onion");
console.log("Chop Carrot");
boilingWater(10_000);
boilingWater(5_000);
boilingWater(5_000);

//////////////////////////////////////////
console.log("========= 2 =========");
//////////////////////////////////////////

// * để tiết kiệm thời gian, chúng ta sẽ phải re-arrange code ở trên lại >> trong thời gian đợi nước sôi thì chúng ta có thể cắt onion và carrot

boilingWater(10_000);
console.log("Chop Onion");
boilingWater(5_000);
console.log("Chop Carrot");
boilingWater(5_000);

// ! nhưng rõ ràng là không đc, chúng ta phải đợi nước sôi hết rồi thì mới cắt onion đc >> vì vậy phải dùng async JS
