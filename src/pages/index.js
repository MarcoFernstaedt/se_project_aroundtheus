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
  selectors,
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

const userInfo = new UserInfo(
  selectors.userNameSelector,
  selectors.userJobSelector
);

console.log(userInfo.getUserInfo())

profileEditBtn.addEventListener("click", () => {
  const { userName, userJob } = userInfo.getUserInfo();

  editProfileModalTitleInput.value = userName;
  editProfileModalDescriptionInput.value = userJob;

  profileModal.open();
  formValidators["profile-form"].resetValidation();
});

const handleImageClick = ({ name, link }) => {
  imageModal.open({ name, link });
};

const renderCard = (cardData) => {
  const card = new Card(cardData, handleImageClick, selectors.cardSelector);
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
  selectors.cardListSelector
);
section.renderItems();

const imageModal = new PopuuWithImage(selectors.imageModalSelector);
imageModal.setEventListeners();

const cardModal = new PopupWithForm(selectors.cardModalSelector, (cardData) => {
  const card = renderCard(cardData);
  section.addItem(card);
  cardModal.close();
});
cardModal.setEventListeners();

const profileModal = new PopupWithForm(
  selectors.profileModalSelector,
  (profileData) => {
    userInfo.setUserInfo(profileData.name, profileData.job);

    // profileTitleText.textContent = editProfileModalTitleInput.value
    // profileDescriptionText.textContent = editProfileModalDescriptionInput.value

    profileModal.close();
  }
);
profileModal.setEventListeners();

cardAddBtn.addEventListener("click", () => {
  cardModal.open();
  formValidators[selectors.cardFormSelector].resetValidation();
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
//   cardModal.close()
// });
