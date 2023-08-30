import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopuuWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
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

const apiToken = "2aecf13b-f884-4550-afc8-5336476728b3";
const apiUrl = "https://around-api.en.tripleten-services.com/v1";
let userId = null;

const api = new Api({
  baseUrl: apiUrl,
  headers: {
    authorization: apiToken,
    "Content-Type": "application/json",
  },
});

const userInfo = new UserInfo(
  selectors.userNameSelector,
  selectors.userJobSelector
);

// api
//   .getUserInfo()
//   .then((res) => {
//       console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([data, cards]) => {
    userId = data._id;
    userInfo.setUserInfo({
      name: data.name,
      job: data.about,
    });

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
  })
  .catch((err) => {
    console.log(err);
  });

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

profileEditBtn.addEventListener("click", () => {
  const info = userInfo.getUserInfo();

  editProfileModalTitleInput.value = info.name;
  editProfileModalDescriptionInput.value = info.job;

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

const imageModal = new PopuuWithImage(selectors.imageModalSelector);
imageModal.setEventListeners();

api.getInitialCards()
  .then((res) => {
    console.log(res)
  })

const cardModal = new PopupWithForm(selectors.cardModalSelector, (cardData) => {
  const card = renderCard(cardData);
  section.addItem(card);
  cardModal.close();
});
cardModal.setEventListeners();

const profileModal = new PopupWithForm(
  selectors.profileModalSelector,
  (profileData) => {
    api
      .editUserInfo(profileData)
      .then((profileData) => {
        userInfo.setUserInfo(profileData.name, profileData.job);
        profileModal.close();
      })
      .catch((err) => {
        console.error(err);
      });
  }
);
profileModal.setEventListeners();

cardAddBtn.addEventListener("click", () => {
  cardModal.open();
  formValidators[selectors.cardFormSelector].resetValidation();
});
