export default class FormValidator {
    constructor(settings, formElement) {
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;
        this._formElement = formElement;
    }

    _disableButton() {
        this._submitButtonSelector.classList.add(this._inactiveButtonClass);
        this._submitButtonSelector.disabled = true;
    };
    
    _enableButton() {
        this._submitButtonSelector.classList.remove(this._inactiveButtonClass);
        this._submitButtonSelector.disabled = false;
    };

    _hideInputError(inputElem) {
        const errorMessageElem = this._formElement.querySelector(`#${inputElem.id}-error`)
        inputElem.classList.remove(this._inputErrorClass);
        errorMessageElem.textContent = "";
        errorMessageElem.classList.remove(errorClass);
    }

    _checkInputValidity() {
        if (!inputElem.validity.valid) {
            this._showInputError(this._formElement, inputElem, this.settings);
        } else {
            this._hideInputError(this.formElem, inputElem, this.settings);
        }
    }

    _showInputError(inputElem, errorMessage) {
        const errorMessageElem = this._formElement.querySelector(`#${inputElem.id}-error`)
        inputElem.classList.add(this._inputErrorClass);
        errorMessageElem.textContent = inputElem.validationMessage;
        errorMessageElem.classList.add(this._errorClass);
    }

    _hasInvalidInput(inputElems) {
        return !inputElems.every((inputElem) => {
            return inputElem.validity.valid;
        })
    }

    _toggleButtonState(inputElems) {
        if (this._hasInvalidInput(inputElems)) {
            this._disableButton(this._submitButtonSelector, this._inactiveButtonClass);
            return;
        }
    
        this._enableButton(this._submitButtonSelector, this.inactiveButtonClass);
    };

    _setEventListeners() {
        const inputElems = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        const buttonElem = this._formElement.querySelector(this._submitButtonSelector);

        inputElems.forEach((inputElem) => {
            inputElem.addEventListener('input', (evt) => {
                this._checkInputValidity(this_formElement, inputElem, this.settings);
                this._toggleButtonState(inputElems);
            });
        });
    }

    enableValidation() {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        setEventListeners(formElem, this.settings);
    }
}

const settings = {
    formSelector: ".modal__form",
    inputSelector: ".modal__form-input",
    submitButtonSelector: ".modal__button",
    inactiveButtonClass: "modal__button_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__error-visible"
}


 

// const showInputError = (formElement, inputElem, { inputErrorClass, errorClass }) => {
    
// };

// const checkInputValidity = (formElem, inputElem, this.settings) => {
    
// };

// const hasInvalidInput = (inputElems) => {
//     
// };





// const setEventListeners = (formElem, config) => {
//     const { inputSelector } = config;
//     const { submitButtonSelector } = config;
//     const inputElems = [...formElem.querySelectorAll(inputSelector)]
//     const submitButtonElem = formElem.querySelector(submitButtonSelector);
    
// };

// const enableValidation = config => {
//     const formElems = [...document.querySelectorAll(config.formSelector)];
//     formElems.forEach((formElem) => {
//         
//     });
// };

// enableValidation(config);