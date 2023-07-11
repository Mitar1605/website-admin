const main = document.querySelector('.main')
const burgerBtn = document.querySelector('.header__burger')
const aside = document.querySelector('.aside')

let asideOpened = false

burgerBtn.addEventListener('click', () => {
  asideOpened = !asideOpened

  if (asideOpened) aside.style.left = 0
  else aside.style.left = '-100%'
})

main.addEventListener('click', (e) => {
  if (!aside.contains(e.target)) {
    asideOpened = false
    aside.style.left = '-100%'
  }
})