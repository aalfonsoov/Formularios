
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");
  if (!form) return;

  const $ = (id) => document.getElementById(id);

  const email = $("email");
  const pass1 = $("password");
  const pass2 = $("password2");
  const legal = $("legal");

  const btn1 = $("verPasswd");
  const btn2 = $("verPasswd2");

  const RE_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  const RE_PASS  = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  const showError = (el, msg) => {
    if (!el) return;
    el.classList.add("is-invalid");

 
    const box = el.type === "checkbox" ? el.closest(".legal") : (el.closest(".input-group") || el.parentElement);
    if (!box) return;

    let small = box.querySelector(".field-error");
    if (!small) {
      small = document.createElement("small");
      small.className = "field-error";
      small.style.display = "block";
      small.style.marginTop = "6px";
      small.style.fontSize = "12px";
      small.style.color = "#b91c1c";
      box.appendChild(small);
    }
    small.textContent = msg;
  };

  const clearError = (el) => {
    if (!el) return;
    el.classList.remove("is-invalid");
    const box = el.type === "checkbox" ? el.closest(".legal") : (el.closest(".input-group") || el.parentElement);
    const small = box?.querySelector(".field-error");
    if (small) small.textContent = "";
    box?.classList?.remove("is-invalid");
  };

  const toggle = (btn, input) => {
    if (!btn || !input) return;
    btn.addEventListener("click", () => {
      const hidden = input.type === "password";
      input.type = hidden ? "text" : "password";
      btn.textContent = hidden ? "Ocultar" : "Ver";
    });
  };

  toggle(btn1, pass1);
  toggle(btn2, pass2);


  form.addEventListener("input", (e) => {
    if (e.target?.id) clearError(e.target);
  });
  form.addEventListener("change", (e) => {
    if (e.target === legal) clearError(legal);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    [email, pass1, pass2, legal].forEach(clearError);

    let ok = true;

    if (!RE_EMAIL.test((email.value || "").trim())) {
      showError(email, "Correo no válido.");
      ok = false;
    }

    if (!RE_PASS.test(pass1.value || "")) {
      showError(pass1, "Contraseña: 8+ con mayúscula, minúscula y número.");
      ok = false;
    }

    if ((pass2.value || "") !== (pass1.value || "")) {
      showError(pass2, "Las contraseñas no coinciden.");
      ok = false;
    }

    if (!legal.checked) {

      legal.closest(".legal")?.classList.add("is-invalid");
      showError(legal, "Debes aceptar la LOPD/RGPD.");
      ok = false;
    }

    if (!ok) return;

    alert("Validación local OK.");
  });
});
