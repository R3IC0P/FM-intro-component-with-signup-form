document.forms[0].addEventListener("submit", (e) => {
    e.preventDefault();
    const inputs = document.querySelectorAll(".intro__sign-up--form input");
    inputs.forEach((input) => {
        input.classList.remove("is-invalid");
        if (input.value.length === 0) {
            input.classList.add("is-invalid");
        }
    });
});
