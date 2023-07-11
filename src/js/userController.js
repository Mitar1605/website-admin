const loginContainer = document.querySelector('.main__login_container')
const loginForm = document.querySelector('.main__login')
const loginBtn = document.querySelector('.main__login_btn')

document.querySelector('.main__login_form').addEventListener('submit', (e) => {
  e.preventDefault()
  return localStorage.setItem('isRegistered', true)
})

if (localStorage.getItem('isRegistered')) {
  loginContainer.style.display = 'none'
}