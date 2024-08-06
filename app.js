const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".containerform");


sign_up_btn.addEventListener('click', () => {

    container.classList.add("sign-up-mode");

});

sign_in_btn.addEventListener('click', () => {

    container.classList.remove("sign-in-mode");

});











<div class="col-2">
                    <img src="/assets/Login-amico.png" alt="" srcset="" width="100%">
                </div>