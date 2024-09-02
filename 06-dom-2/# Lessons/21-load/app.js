/*
  The "load" event
  - fires when the whole page has loaded, including all dependent resources such as stylesheets, imgs. 
  - this is in contrast to DOMContentLoaded, which is fired as soon as page DOM has been loaded, without waiting for resources to finish loading 
    >> at the end, this will run after DOMContentLoaded
  
  *** window.addEventListener('load', function(){});

*/

window.addEventListener('load', function () {
  console.log('Run SECOND - load')
  const img = this.document.querySelector('img')
  console.log(img)
  console.log(img.width)
})

window.addEventListener('DOMContentLoaded', function () {
  console.log('Run FIRST - DOMContentLoaded')
  const img = this.document.querySelector('img')
  console.log(img)
  console.log(img.width) // this will return 0 if we set to SLOW NETWORK (Dev Tools >> Network >> Slow 3G )
})

// ### Application: videos in web app
