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

const profileTitleText = document.querySelector('.profile__title');
const profileDescriptionText = document.querySelector('.profile__description');
const profileEditBtn = document.querySelector('.profile__edit-button');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal__close');
const modalTitleInput = document.querySelector('#profile-title-input');
const modalDescriptionInput = document.querySelector('#profile-description-input');

profileEditBtn.addEventListener('click', function () {

    modalTitleInput.value = String(profileTitleText.textContent)
    modalDescriptionInput.value = String(profileDescriptionText.textContent);

    modal.classList.add('modal_opened');
});

modalCloseBtn.addEventListener('click', function () {
    modal.classList.remove('modal_opened');
});

