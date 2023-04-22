// enabling validation by calling enableValidation()
// pass all the settings on call

const hideInputError = (formElem, inputElem, { inputErrorClass, errorClass }) => {
    const errorMessageElem = formElem.querySelector(`#${inputElem.id}-error`)
    inputElem.classList.remove(inputErrorClass);
    errorMessageElem.textContent = "";
    errorMessageElem.classList.remove(errorClass);
}

const showInputError = (formElem, inputElem, { inputErrorClass, errorClass }) => {
    const errorMessageElem = formElem.querySelector(`#${inputElem.id}-error`)
    inputElem.classList.add(inputErrorClass);
    errorMessageElem.textContent = inputElem.validationMessage;
    errorMessageElem.classList.add(errorClass);
};

const checkInputValidity = (formElem, inputElem, config) => {
    if (!inputElem.validity.valid) {
        showInputError(formElem, inputElem, config);
    } else {
        hideInputError(formElem, inputElem, config);
    }
};

const hasInvalidInput = (inputElems) => {
    return !inputElems.every((inputElem) => {
        return inputElem.validity.valid;
    })
};

const inactiveButton = (submitButtonElem, { inactiveButtonClass }) => {
    submitButtonElem.classList.add(inactiveButtonClass);
    submitButtonElem.disabled = true;
};

const activeButton = (submitButtonElem, { inactiveButtonClass }) => {
    submitButtonElem.classList.remove(inactiveButtonClass);
    submitButtonElem.disabled = false;
};

const toggleButtonState = (inputElems, submitButtonElem, { inactiveButtonClass }) => {
    if (hasInvalidInput(inputElems)) {
        inactiveButton(submitButtonElem, { inactiveButtonClass });
        return;
    }

    activeButton(submitButtonElem, { inactiveButtonClass });
};

const setEventListeners = (formElem, config) => {
    const { inputSelector } = config;
    const { submitButtonSelector } = config;
    const inputElems = [...formElem.querySelectorAll(inputSelector)]
    const submitButtonElem = formElem.querySelector(submitButtonSelector);
    inputElems.forEach((inputElem) => {
        inputElem.addEventListener('input', (evt) => {
            checkInputValidity(formElem, inputElem, config);
            toggleButtonState(inputElems, submitButtonElem, config);
        });
    });
};

const enableValidation = config => {
    const formElems = [...document.querySelectorAll('.modal__form')];
    formElems.forEach((formElem) => {
        formElem.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        setEventListeners(formElem, config);
    });
};

const config = {
    formSelector: ".modal__form",
    inputSelector: ".modal__form-input",
    submitButtonSelector: ".modal__button",
    inactiveButtonClass: "modal__button_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__error-visible"
}

enableValidation(config);
