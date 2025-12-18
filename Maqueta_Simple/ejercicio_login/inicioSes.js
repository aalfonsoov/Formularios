const password = document.querySelector('#password');
const btn = document.querySelector('#verPasswd');

btn.type = 'button';
btn.textContent = 'Ver';

btn.addEventListener('click', () => {
  const oculto = password.type === 'password';
  password.type = oculto ? 'text' : 'password';
  btn.textContent = oculto ? 'Ocultar' : 'Ver';
});
