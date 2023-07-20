import Card from "../components/Card";

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
const cardAddBtn = document.querySelector(".profile__add-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const addCardModal = document.querySelector("#add-card-modal");
const previewImageModal = document.querySelector("#preview-card-modal");
const editProfileModalForm = editProfileModal.querySelector(".modal__form");
const addCardModalForm = addCardModal.querySelector(".modal__form");

const editProfileModalTitleInput = document.querySelector(
    "#profile-title-input"
);
const editProfileModalDescriptionInput = document.querySelector(
    "#profile-description-input"
);

// const cardDatas = {
//     name: "hahaha",
//     link: "hahahah",
// }

// const card = new Card(cardDatas)

const cardListElement = document.querySelector(".cards__list");
const cardTemplate =
    document.querySelector("#card-template").content.firstElementChild;
const cardTitleInput = addCardModal.querySelector("#card-title-input");
const cardImageInput = addCardModal.querySelector("#card-image-input");
// https://images.unsplash.com/photo-1550330545-87c6109a81f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80

const getCardElement = (data) => {
    const cardElement = cardTemplate.cloneNode(true);
    const cardImageElement = cardElement.querySelector(".card__image");
    const cardTitleElement = cardElement.querySelector(".card__title");
    const deleteButton = cardElement.querySelector(".card__trashButton");
    const likeButton = cardElement.querySelector(".card__like-button");
    const cardImage = previewImageModal.querySelector(".modal__image");


    deleteButton.addEventListener("click", () => {
        cardElement.remove();
    });

    cardImageElement.addEventListener("click", (evt) => {
        cardImage.src = data.link;
        cardImage.alt = data.name;
        handleOpenModal(previewImageModal);
        previewImageModal.querySelector('.modal__caption').textContent = data.name;
    });

    likeButton.addEventListener("click", () => {
        likeButton.classList.toggle("card__like-button_active");
    });

    cardImageElement.src = data.link;
    cardImageElement.alt = data.name;
    cardTitleElement.textContent = data.name;

    return cardElement;
};

const handleCloseModal = (modal) => {
    modal.classList.remove("modal_opened");
    document.removeEventListener('keydown', closeByEscape);
};

const handleOpenModal = (modal) => {
    modal.classList.add("modal_opened");
    document.addEventListener('keydown', closeByEscape);
};

profileEditBtn.addEventListener("click", function (evt) {
    editProfileModalTitleInput.value = String(profileTitleText.textContent);
    editProfileModalDescriptionInput.value = String(
        profileDescriptionText.textContent
    );

    handleOpenModal(editProfileModal);
});

const modals = document.querySelectorAll('.modal');
modals.forEach((modal) => {
    modal.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('modal_opened') || evt.target.classList.contains('modal__container-preview')) {
            handleCloseModal(modal);
        }
        if (evt.target.classList.contains('modal__close')) {
            handleCloseModal(modal);
        }
    })
})

cardAddBtn.addEventListener("click", (evt) => {
    handleOpenModal(addCardModal);
});

editProfileModalForm.addEventListener("submit", (evt) => {
    evt.preventDefault();

    profileTitleText.textContent = editProfileModalTitleInput.value;
    profileDescriptionText.textContent = editProfileModalDescriptionInput.value;
    handleCloseModal(editProfileModal);
});

const renderCard = (data, wrapper) => {
    const cardElement = getCardElement(data);
    wrapper.prepend(cardElement);
};

addCardModalForm.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const name = cardTitleInput.value;
    const link = cardImageInput.value;
    renderCard({ name, link }, cardListElement);
    addCardModalForm.reset()

    const addCardSubmitButton = addCardModalForm.querySelector('.modal__button');
    toggleButtonState([cardTitleInput, cardImageInput], addCardSubmitButton, config)

    handleCloseModal(addCardModal);
});

initialCards.forEach((data) => {
    renderCard(data, cardListElement);
});

// close modal with escape key
const closeByEscape = (evt) => {

    if (evt.key === 'Escape') {
        const openModal = document.querySelector('.modal_opened');
        handleCloseModal(openModal)
    }
}