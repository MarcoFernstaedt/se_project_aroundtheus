export default class FormValidator {
    constructor(settings, formElement) {
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;
        this._formElement = formElement;
    }

    _showInputError(inputElem, errorMessage) {
        const errorMessageElem = this._formElement.querySelector(`#${inputElem.id}-error`)
        inputElem.classList.add(this._inputErrorClass);
        errorMessageElem.textContent = inputElem.validationMessage;
        errorMessageElem.classList.add(this._errorClass);
    }

    _hasInvalidInput() {
        return !inputElems.every((inputElem) => {
            return inputElem.validity.valid;
        })
    }

    _toggleButtonState(inputElems) {
        if (this._hasInvalidInput(inputElems)) {
            disableButton(this._submitButtonSelector, this._inactiveButtonClass);
            return;
        }
    
        enableButton(submitButtonElem, { inactiveButtonClass });
    };

    _setEventListeners() {
        const inputElems = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        const buttonElem = this.form.querySelector(this._submitButtonSelector);

        inputElems.forEach((inputElem) => {
            inputElem.addEventListener('input', (evt) => {
                this._checkInputValidity(this_formElement, inputElem, config);
                this._toggleButtonState(inputElems);
            });
        });
    }

    enableValidation() {
        this._formElem.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        setEventListeners(formElem, config);
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

const editFormValidator = new FormValidator(settings, editForm);
const addFormValidator = new FormValidator(settings, addForm);


//  const hideInputError = (formElement, inputElem, { inputErrorClass, errorClass }) => {
//     const errorMessageElem = this.formElementent.querySelector(`#${inputElem.id}-error`)
//     inputElem.classList.remove(inputErrorClass);
//     errorMessageElem.textContent = "";
//     errorMessageElem.classList.remove(errorClass);
// }

// const showInputError = (formElement, inputElem, { inputErrorClass, errorClass }) => {
    
// };

// const checkInputValidity = (formElem, inputElem, config) => {
//     if (!inputElem.validity.valid) {
//         showInputError(formElem, inputElem, config);
//     } else {
//         hideInputError(formElem, inputElem, config);
//     }
// };

// const hasInvalidInput = (inputElems) => {
//     
// };

// const disableButton = (submitButtonElem, { inactiveButtonClass }) => {
//     submitButtonElem.classList.add(inactiveButtonClass);
//     submitButtonElem.disabled = true;
// };

// const enableButton = (submitButtonElem, { inactiveButtonClass }) => {
//     submitButtonElem.classList.remove(inactiveButtonClass);
//     submitButtonElem.disabled = false;
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