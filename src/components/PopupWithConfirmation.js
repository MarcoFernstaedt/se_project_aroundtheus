import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._form = this._popup.querySelector(".modal__form");
        this._submitButton = this._popup.querySelector(".modal__button");
    }

    open() {
        this._form.reset();
        super.open()
    }

    close() {
        this._form.reset();
        super.close()
    }

    confirmDelete(submit) {
        return submit;
    }

    setEventListeners() {
        this._form.addEventListener('submit', () => {
            this.confirmDelete(true)
        })
        super.setEventListeners()
    }
}