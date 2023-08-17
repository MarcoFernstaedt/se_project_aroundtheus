import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopuuWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import "../pages/index.css";

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
// const editProfileModal = document.querySelector("#edit-profile-modal");

// const previewImageModal = document.querySelector("#preview-card-modal");
const profileForm = document.forms["profile-form"];
const cardForm = document.forms["card-form"];

const editProfileModalTitleInput = document.querySelector(
  "#profile-title-input"
);
const editProfileModalDescriptionInput = document.querySelector(
  "#profile-description-input"
);

// const cardListElement = document.querySelector(".cards__list");
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

const formValidators = {};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElem) => {
    const validator = new FormValidator(config, formElem);
    const formName = formElem.getAttribute("name");

    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(config);

profileEditBtn.addEventListener("click", function (evt) {
  // userInfo.getUserInfo()
  let info = userInfo.getUserInfo()
  
  editProfileModalTitleInput.value = String(info.name);
  editProfileModalDescriptionInput.value = String(
    info.job
  );

  profileModal.open()
  formValidators["profile-form"].resetValidation();
});

const cardSelector = "#card-template";

const handleImageClick = ({ name, link }) => {
  imageModal.open({name, link});
};

const renderCard = (cardData) => {
  const card = new Card(cardData, handleImageClick, cardSelector);
  return card.getView();
};

const section = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = renderCard(item);
      section.addItem(card);
    },
  },
  ".cards__list"
);
section.renderItems();

const imageModalSelector = "#preview-card-modal";
const imageModal = new PopuuWithImage(imageModalSelector);
imageModal.setEventListeners();

const addCardModal = new PopupWithForm("#add-card-modal", (cardData) => {
  const card = renderCard(cardData)
  // addCardModal.close()
  section.addItem(card);
});
addCardModal.setEventListeners();

const userName = "#profile-title-input"
const userJob = "#profile-description-input"
const userInfo = new UserInfo(userName, userJob)

const profileModal = new PopupWithForm(
  "#edit-profile-modal",
  (profileData) => {
    userInfo.setUserInfo(profileData.name, profileData.job)
    
    profileTitleText.textContent = editProfileModalTitleInput.value
    profileDescriptionText.textContent = editProfileModalDescriptionInput.value

    profileModal.close()
  }
);
profileModal.setEventListeners();

cardAddBtn.addEventListener("click", (evt) => {
  addCardModal.open()
  formValidators["card-form"].resetValidation();
});

profileForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  // profileTitleText.textContent = editProfileModalTitleInput.value;
  // profileDescriptionText.textContent = editProfileModalDescriptionInput.value;

  profileModal.close()
});

// const createCard = data => {
//   const cardElement = new Card(data, "#card-template");
//   return cardElement.getView();
// }


cardForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  addCardModal.close()
});
