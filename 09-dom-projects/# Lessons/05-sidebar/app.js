const toggleBtn = document.querySelector('.sidebar-toggle')
const closeBtn = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar')

toggleBtn.addEventListener('click', function () {
  // Method 1
  // if (sidebar.classList.contains('show-sidebar')) {
  //   sidebar.classList.remove('show-sidebar')
  // } else {
  //   sidebar.classList.add('show-sidebar')
  // }

  // Method 2
  sidebar.classList.toggle('show-sidebar')
})

closeBtn.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar')
})
