export default class FormValidator {
    constructor(settings, formElement) {
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;
        this._formElement = formElement;

        this._inputElems = Array.from(this._formElement.querySelectorAll(this._inputSelector))
    }

    _disableButton() {
        this._formElement.querySelector(this._submitButtonSelector).classList.add(this._inactiveButtonClass);
        this._formElement.querySelector(this._submitButtonSelector).disabled = true;
    };

    _enableButton() {
        this._formElement.querySelector(this._submitButtonSelector).classList.remove(this._inactiveButtonClass);
        this._formElement.querySelector(this._submitButtonSelector).disabled = false;
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

    _toggleButtonState() {
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
                this._toggleButtonState(array, this._submitButtonSelector);
            });
        });
    }

    enableValidation() {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        this._setEventListeners(this._formElement, this.settings);
    }
}

