const profileTitleText = document.querySelector('.profile__title');
const profileDescriptionText = document.querySelector('.profile__description');
const modal = document.querySelector('.modal');
const profileEditBtn = document.querySelector('.profile__edit-button');

profileEditBtn.addEventListener('click', function (e) {
    modal.classList.add('modal_opened');
});

const modalCloseBtn = document.querySelector('.modal__close');
modalCloseBtn.addEventListener('click', function () {
    modal.classList.remove('modal_opened');
});

const initialCards = [
    {
        name: "Yosemite Valley",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg"
    },
    {
        name: "Lake Louise",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg"
    },
    {
        name: "Bald Mountains",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg"
    },
    {
        name: "Latemar",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg"
    },
    {
        name: "Vanoise National Park",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg"
    },
    {
        name: "Lago di Braies",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg "
    }
]

const modalTitleInput = document.querySelector('.modal__form-input');
modalTitleInput.getAttribute('title');
console.log(modalTitleInput.value);
if (modalTitleInput.value = "") {
    modalTitleInput.value = profileTitleText.textContent
}