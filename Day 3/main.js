let openModal = document.querySelector(".open-modal");
let closeIcon = document.querySelector(".modal__header__icon");
let closeButton = document.querySelector(".modal__close");
let modal = document.querySelector(".modal__overplay");

openModal.addEventListener("click", function(event) {
    modal.style.display = "block";
});

let modalShow = () => {
    modal.style.display="none";
}

closeIcon.addEventListener("click",modalShow);

closeButton.addEventListener("click", modalShow);

modal.addEventListener("click", function(event) {
    if(event.target === event.currentTarget) modal.style.display="none";
});
