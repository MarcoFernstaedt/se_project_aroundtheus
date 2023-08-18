import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopuuWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import {
  initialCards,
  config,
  editProfileModalDescriptionInput,
  editProfileModalTitleInput,
  cardAddBtn,
  profileEditBtn,
} from "../utils/utils.js";
import "../pages/index.css";

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
  let info = userInfo.getUserInfo();

  editProfileModalTitleInput.value = String(info.name);
  editProfileModalDescriptionInput.value = String(info.job);

  profileModal.open();
  formValidators["profile-form"].resetValidation();
});

const cardSelector = "#card-template";

const handleImageClick = ({ name, link }) => {
  imageModal.open({ name, link });
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
  const card = renderCard(cardData);
  // addCardModal.close()
  section.addItem(card);
});
addCardModal.setEventListeners();

const userName = "#profile-title-input";
const userJob = "#profile-description-input";
const userInfo = new UserInfo(userName, userJob);

const profileModal = new PopupWithForm("#edit-profile-modal", (profileData) => {
  userInfo.setUserInfo(profileData.name, profileData.job);

  // profileTitleText.textContent = editProfileModalTitleInput.value
  // profileDescriptionText.textContent = editProfileModalDescriptionInput.value

  profileModal.close();
});
profileModal.setEventListeners();

cardAddBtn.addEventListener("click", (evt) => {
  addCardModal.open();
  formValidators["card-form"].resetValidation();
});

// profileForm.addEventListener("submit", (evt) => {
//   evt.preventDefault();

//   // profileTitleText.textContent = editProfileModalTitleInput.value;
//   // profileDescriptionText.textContent = editProfileModalDescriptionInput.value;

//   profileModal.close()
// });

// const createCard = data => {
//   const cardElement = new Card(data, "#card-template");
//   return cardElement.getView();
// }

// cardForm.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   addCardModal.close()
// });
