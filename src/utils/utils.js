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

const profileForm = document.forms["profile-form"];
const cardForm = document.forms["card-form"];

const editProfileModalTitleInput = document.querySelector(
  "#profile-title-input"
);
const editProfileModalDescriptionInput = document.querySelector(
  "#profile-description-input"
);

const cardTitleInput = cardForm.querySelector("#card-title-input");
const cardImageInput = cardForm.querySelector("#card-image-input");
// https://images.unsplash.com/photo-1550330545-87c6109a81f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__form-input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error-visible",
};

const selectors = {
  userNameSelector: ".profile__title",
  userJobSelector: ".profile__description",
  imageModalSelector: "#preview-card-modal",
  cardListSelector: ".cards__list",
  cardSelector: "#card-template",
  cardModalSelector: "#add-card-modal",
  cardFormSelector: "card-form",
  profileModalSelector: "#edit-profile-modal",
  profileFormSelector: "profile-form",
}

export {
  initialCards,
  config,
  cardImageInput,
  cardTitleInput,
  editProfileModalDescriptionInput,
  editProfileModalTitleInput,
  cardForm,
  profileForm,
  cardAddBtn,
  profileEditBtn,
  profileDescriptionText,
  profileTitleText,
  selectors,
};