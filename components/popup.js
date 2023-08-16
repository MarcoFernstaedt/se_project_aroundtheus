export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
      // const openModal = document.querySelector('.modal_opened');
      // handleCloseModal(openModal)
    }
  }

  close() {
    this._popupSelector.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  open() {
    this._popupSelector.classList.add("modal_opened");
    document.addEventListener("keydown", (evt) => {
      this._handleEscClose(evt);
    });
  }

  setEventListeners() {
    this._popupSelector.addEventListener("mousedown", (evt) => {
      if (
        evt.target.classList.contains("modal_opened") ||
        evt.target.classList.contains("modal__container-preview")
      ) {
        this.close();
      }
      if (evt.target.classList.contains("modal__close")) {
        this.close();
      }
    });
  }
}
