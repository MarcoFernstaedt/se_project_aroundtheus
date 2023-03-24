const initialCards = [
    {
        name: "Yosemite Valley",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
    },
    {
        name: "Lake Louise",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
    },
    {
        name: "Bald Mountains",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
    },
    {
        name: "Latemar",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
    },
    {
        name: "Vanoise National Park",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
    },
    {
        name: "Lago di Braies",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg ",
    },
];

const profileTitleText = document.querySelector(".profile__title");
const profileDescriptionText = document.querySelector(".profile__description");
const profileEditBtn = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const modalForm = modal.querySelector(".modal__form");
const modalCloseBtn = document.querySelector(".modal__close");
const modalTitleInput = document.querySelector("#profile-title-input");
const modalDescriptionInput = document.querySelector(
    "#profile-description-input"
);
const cardListElement = document.querySelector(".cards__list");
const cardTemplate =
    document.querySelector("#card-template").content.firstElementChild;

function getCardElement(data) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardImageElement = cardElement.querySelector(".card__image");
    const cardTitleElement = cardElement.querySelector(".card__title");

    cardImageElement.src = data.link;
    cardImageElement.alt = data.name;
    cardTitleElement.textContent = data.name;

    return cardElement;
}

function handleCloseModal() {
    editProfileModal.classList.remove("modal_opened");
}

profileEditBtn.addEventListener("click", function () {
    modalTitleInput.value = String(profileTitleText.textContent);
    modalDescriptionInput.value = String(profileDescriptionText.textContent);

    editProfileModal.classList.add("modal_opened");
});

modalCloseBtn.addEventListener("click", handleCloseModal);

modalForm.addEventListener("submit", (evt) => {
    evt.preventDefault();

    profileTitleText.textContent = modalTitleInput.value;
    profileDescriptionText.textContent = modalDescriptionInput.value;

    handleCloseModal();
});

initialCards.forEach((data) => {
    const cardElement = getCardElement(data);
    cardListElement.prepend(cardElement);
});
