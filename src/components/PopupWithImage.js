import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._title = this._popup.querySelector(".modal__caption");
    this._image = this._popup.querySelector(".modal__image");
  };

  open({ link, name }) {
    this._title.textContent = name;
    this._image.src = link;
    this._image.alt = name;
    super.open();
  };
};
