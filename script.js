document.querySelector(".js-intro-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const inputs = document.querySelectorAll(".intro__form-item > input");
    inputs.forEach((input) => {
        input.classList.remove("is-invalid");
        if (input.value.length === 0) {
            input.classList.add("is-invalid");
        }
    });
});
