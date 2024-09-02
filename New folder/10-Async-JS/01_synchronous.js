/* 
  * JS là single thread
  * Sync: code chạy từ trên xuống dưới >> thằng dưới muốn chạy thì phải đợi thằng trên chạy xong

*/

console.log("- 1st");
console.log("- 2nd");
console.log("========");
console.log("- 1st");
boilingWater();
console.log("- 3rd");

function boilingWater() {
  console.log("boiling...");
  for (let i = 0; i < 10000; i++) console.log("still not done....");
  console.log("DONE");
}
