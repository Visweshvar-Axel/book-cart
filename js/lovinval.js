const loginForm = document.querySelector('#login-form');
const usernameInput = document.querySelector('#username-input');
const passwordInput = document.querySelector('#password-input');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (!username || !password) {
    alert('Please enter username and password');
    return;
  }
  else if(password.length < 8){
    alert('password should have atleast \'8\' characters length');
    return;
  }

  alert('Login successful!');
  loginForm.submit();
});