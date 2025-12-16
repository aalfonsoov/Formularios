const togglePassword = (btnSelector, inputSelector) => {
  const btn = document.querySelector(btnSelector);
  const input = document.querySelector(inputSelector);

  if (!btn || !input) return;

  // Asegura que no envíe el formulario si está dentro de <form>
  btn.type = 'button';

  // Texto inicial opcional
  if (!btn.textContent.trim()) btn.textContent = 'Ver';

  btn.addEventListener('click', () => {
    const oculto = input.type === 'password';
    input.type = oculto ? 'text' : 'password';
    btn.textContent = oculto ? 'Ocultar' : 'Ver';
  });
};

// Login (si existe)
togglePassword('#verPasswd', '#password');

// Registro (si existe)
togglePassword('#verPasswd2', '#password2');
