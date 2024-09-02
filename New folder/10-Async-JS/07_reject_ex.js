/* 
  Important Unsplash API update !!!!

  Hello,

  * In the following video we will get a random photo from Unsplash API. Unfortunately, since I recorded the video, API changed it's rules and most likely the photo won't be random (in order to get a random photo, you will need to use API KEY). So just a heads up, the functionality still works, just photos wont be random.

  * GG: source unsplash

*/

/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////

const container = document.querySelector(".img-container");

const btn = document.querySelector(".btn");
const url = `https://source.unsplash.com/random`;

/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////

function loadImage(url) {
  const promise = new Promise((resolve, reject) => {
    // * thằng new Image() sẽ có 2 events đó là load và error
    let img = new Image();
    img.addEventListener("load", () => {
      resolve(img);
    });

    // * nếu thằng url ở trên bị sai sẽ chạy dòng này
    img.addEventListener("error", () => {
      reject(new Error(`Failed to load img from the source: ${url}`));
    });

    img.src = url;
  });

  return promise;
}

btn.addEventListener("click", function () {
  // * bởi vì loadImage() trả về promise >> để lấy ra phải dùng .then()
  loadImage(url)
    .then((data) => {
      console.log(data);
      container.append(data);
    })
    .catch((err) => console.log(err));
});

/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////
