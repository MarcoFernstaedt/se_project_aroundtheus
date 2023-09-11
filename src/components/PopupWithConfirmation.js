import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._form = this._popup.querySelector(".modal__form");
    }

    open() {
        this._form.reset();
        super.open()
    }

    close() {
        this._form.reset();
        super.close()
    }

    setSubmitAction(callback) {
        this._handleFormSubmit = callback;
    }

    setEventListeners() {
        this._form.addEventListener('submit', () => {
            this._handleFormSubmit()
        })
        super.setEventListeners()
    }
}