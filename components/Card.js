import { handleOpenModal } from "../utils/utils.js";

export default class Card {
    constructor({ name, link }, cardSelector) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;

        this._cardElement = document.querySelector("#card-template").content.firstElementChild.cloneNode(true);
    }

    _setEventListeners() {
        // like button 
        this._cardElement.querySelector('.card__like-button').addEventListener('click', () => {
            this._toggleLikeButton()
        })

        this._cardElement.querySelector('.card__image').addEventListener('click', () => {
            this._previewModal = document.querySelector('#preview-card-modal');
            this._previewModal.querySelector('.modal__image').src = this._link;
            this._previewModal.querySelector('.modal__image').alt = this._name;
            this._previewModal.querySelector('.modal__caption').textContent = this._name;
            handleOpenModal(this._previewModal);
        });

        // delete button
        this._cardElement.querySelector('.card__trashButton').addEventListener('click', () => {
            this._handleDeleteCard()
        });

    }

    _toggleLikeButton() {
        this._cardElement.querySelector('.card__like-button').classList.toggle('card__like-button_active');
    }

    _handleDeleteCard() {
        this._cardElement.remove()
        this._cardElement = null;
    }

    // _cardImageData() {
    //     this._cardElement.querySelector('.card__image').src = this.link;
    //     this._cardElement.querySelector('.card__image').alt = this.name;
    // }
    // this._cardElement.querySelector('.card__image').addEventListener('click', () => {
    //     this._cardImageData()
    // })

    getView() {
        this._setEventListeners()

        this._cardElement.querySelector('.card__image').src = this._link;
        this._cardElement.querySelector('.card__image').alt = this._name;
        this._cardElement.querySelector('.card__title').textContent = this._name;

        return this._cardElement
    }
}