export default class FormValidator {
    constructor(settings, formElement) {
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;
        this._formElement = formElement;

        this._inputElems = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._submitButton = this._formElement.querySelector(this._submitButtonSelector);
    }

    _disableButton() {
        this._submitButton.classList.add(this._inactiveButtonClass);
        this._submitButton.disabled = true;
    };

    _enableButton() {
        this._submitButton.classList.remove(this._inactiveButtonClass);
        this._submitButton.disabled = false;
    };

    _hideInputError(inputElem) {
        const errorMessageElem = this._formElement.querySelector(`#${inputElem.id}-error`)
        inputElem.classList.remove(this._inputErrorClass);
        errorMessageElem.textContent = "";
        errorMessageElem.classList.remove(this._errorClass);
    }

    _checkInputValidity(inputElem) {
        if (!inputElem.validity.valid) {
            this._showInputError(inputElem);
        } else {
            this._hideInputError(inputElem);
        }
    }

    _showInputError(inputElem, errorMessage) {
        const errorMessageElem = this._formElement.querySelector(`#${inputElem.id}-error`)
        inputElem.classList.add(this._inputErrorClass);
        errorMessageElem.textContent = inputElem.validationMessage;
        errorMessageElem.classList.add(this._errorClass);
    }

    _hasInvalidInput() {
        return !this._inputElems.every((inputElem) => {
            return inputElem.validity.valid;
        })
    }

    resetValidation() {
        this.toggleButtonState();

        this._inputElems.forEach((inputElem) => {
        this._hideInputError(inputElem)
      });
    };

    toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._disableButton();
            return;
        }

        this._enableButton();
    };

    _setEventListeners() {
        this._inputElems.forEach((inputElem, index, array) => {
            inputElem.addEventListener('input', (evt) => {
                this._checkInputValidity(inputElem);
                this.toggleButtonState();
            });
        });
    }

    enableValidation() {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        this._setEventListeners();
    }
}

