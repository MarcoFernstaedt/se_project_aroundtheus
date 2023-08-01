import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import { handleCloseModal, handleOpenModal } from "../utils/utils.js";

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
// const previewImageModal = document.querySelector("#preview-card-modal");
// const editProfileModalForm = editProfileModal.querySelector(".modal__form");
// const addCardModalForm = addCardModal.querySelector(".modal__form");
const profileForm = document.forms["profile-form"];
const cardForm = document.forms["card-form"];

const editProfileModalTitleInput = document.querySelector(
  "#profile-title-input"
);
const editProfileModalDescriptionInput = document.querySelector(
  "#profile-description-input"
);

const cardListElement = document.querySelector(".cards__list");
// const cardTemplate =
//   document.querySelector("#card-template").content.firstElementChild;
const cardTitleInput = addCardModal.querySelector("#card-title-input");
const cardImageInput = addCardModal.querySelector("#card-image-input");
// https://images.unsplash.com/photo-1550330545-87c6109a81f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__form-input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error-visible",
};

const formValidators = {}

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElem) => {
    const validator = new FormValidator(config, formElem)
    const formName = formElem.getAttribute('name')

    formValidators[formName] = validator;
    validator.enableValidation();
   
  });
};

enableValidation(config);

profileEditBtn.addEventListener("click", function (evt) {
  editProfileModalTitleInput.value = String(profileTitleText.textContent);
  editProfileModalDescriptionInput.value = String(
    profileDescriptionText.textContent
  );
  
  handleOpenModal(editProfileModal);
  formValidators['profile-form'].resetValidation()
});

const modals = document.querySelectorAll(".modal");
modals.forEach((modal) => {
  modal.addEventListener("mousedown", (evt) => {
    if (
      evt.target.classList.contains("modal_opened") ||
      evt.target.classList.contains("modal__container-preview")
    ) {
      handleCloseModal(modal);
    }
    if (evt.target.classList.contains("modal__close")) {
      handleCloseModal(modal);
    }
  });
});

cardAddBtn.addEventListener("click", (evt) => {
  handleOpenModal(addCardModal);
  formValidators['card-form'].resetValidation()
});

profileForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  profileTitleText.textContent = editProfileModalTitleInput.value;
  profileDescriptionText.textContent = editProfileModalDescriptionInput.value;

  handleCloseModal(editProfileModal);
});

const createCard = data => {
  const cardElement = new Card(data, "#card-template");
  return cardElement.getView();
}

const renderCard = (data, wrapper) => {
  const cardElement = createCard;
  wrapper.prepend(cardElement);
};

cardForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const name = cardTitleInput.value;
  const link = cardImageInput.value;
  renderCard({ name, link }, cardListElement);
  cardForm.reset();

  handleCloseModal(addCardModal);
});

initialCards.forEach((data) => {
  renderCard(data, cardListElement);
});

