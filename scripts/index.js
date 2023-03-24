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
const cardAddBtn = document.querySelector('.profile__add-button');
const editProfileModal = document.querySelector("#edit-profile-modal");
const addCardModal = document.querySelector("#add-card-modal")
const editProfileModalForm = editProfileModal.querySelector(".modal__form");
const profileModalCloseBtn = editProfileModal.querySelector(".modal__close");
const addCardModalCloseBtn = addCardModal.querySelector(".modal__close");
const editProfileModalTitleInput = document.querySelector("#profile-title-input");
const editProfileModalDescriptionInput = document.querySelector(
    "#profile-description-input"
);
const cardListElement = document.querySelector(".cards__list");
const cardTemplate =
    document.querySelector("#card-template").content.firstElementChild;

const getCardElement = data => {
    const cardElement = cardTemplate.cloneNode(true);
    const cardImageElement = cardElement.querySelector(".card__image");
    const cardTitleElement = cardElement.querySelector(".card__title");

    cardImageElement.src = data.link;
    cardImageElement.alt = data.name;
    cardTitleElement.textContent = data.name;

    return cardElement;
}

const handleCloseModal = modal => {
    modal.classList.remove("modal_opened");
}

const handleOpenModal = modal => {
    modal.classList.add('modal_opened');
};

profileEditBtn.addEventListener("click", function () {
    editProfileModalTitleInput.value = String(profileTitleText.textContent);
    editProfileModalDescriptionInput.value = String(profileDescriptionText.textContent);

    handleOpenModal(editProfileModal);
});

cardAddBtn.addEventListener('click', () => handleOpenModal(addCardModal));

profileModalCloseBtn.addEventListener("click", () => handleCloseModal(editProfileModal));
addCardModalCloseBtn.addEventListener("click", () => handleCloseModal(addCardModal));

editProfileModalForm.addEventListener("submit", (evt) => {
    evt.preventDefault();

    profileTitleText.textContent = editProfileModalTitleInput.value;
    profileDescriptionText.textContent = editProfileModalDescriptionInput.value;

    handleCloseModal();
});

initialCards.forEach((data) => {
    const cardElement = getCardElement(data);
    cardListElement.prepend(cardElement);
});
