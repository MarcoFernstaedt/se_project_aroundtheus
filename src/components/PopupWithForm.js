import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);

    this._handleFormSubmit = handleFormSubmit;
    this._popup = this._popup = document.querySelector(popupSelector);
    this._form = this._popup.querySelector(".modal__form");
    this._inputList = this._form.querySelectorAll(".modal__form-input");
  }

  _getInputValues() {
    this._inputValues = {};
    this._inputList.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
  }

  setEventListeners() {
    this._form.addEventListener("submit", () => {
      this._data = this._getInputValues()
      this._handleFormSubmit(this._data);
    });
    super.setEventListeners();
  }

  close() {
    this._form.reset();
    super.close();
  }
}
