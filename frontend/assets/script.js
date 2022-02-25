const btnSignup = document.querySelector('.signup')
const btnLogin = document.querySelector('.login')
const formLogin = document.querySelector('.form-login')
const formSignup = document.querySelector('.form-signup')

btnSignup.addEventListener('click', () => {
    formLogin.style.display = 'none'
    formSignup.style.display = 'flex'
})
btnLogin.addEventListener('click', () => {
    formLogin.style.display = 'flex'
    formSignup.style.display = 'none'
})