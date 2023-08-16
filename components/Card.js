export default class Card {
    constructor({ name, link }, handeImageClick, cardSelector) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
        this._handleImageClick = handeImageClick;
        
        this._cardElement = document.querySelector(this._cardSelector).content.firstElementChild.cloneNode(true);
        this._cardImage = this._cardElement.querySelector('.card__image')
        this._likeButton = this._cardElement.querySelector('.card__like-button')

        this._previewModal = document.querySelector('#preview-card-modal');
        this._previewModalImage = this._previewModal.querySelector('.modal__image');
    }

    _setEventListeners() {
        // like button 
        this._cardElement.querySelector('.card__like-button').addEventListener('click', () => {
            this._toggleLikeButton()
        })

        this._cardElement.querySelector(this._cardImage).addEventListener('click', () => {
            this._handleImageClick({name: this._name, link: this._link});
        });
        
        // delete button
        this._cardElement.querySelector('.card__trashButton').addEventListener('click', () => {
            this._handleDeleteCard()
        });

    }

    _toggleLikeButton() {
        this._likeButton.classList.toggle('card__like-button_active');
    }

    _handleDeleteCard() {
        this._cardElement.remove()
        this._cardElement = null;
    }

    getView() {
        this._setEventListeners()

        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._cardElement.querySelector('.card__title').textContent = this._name;

        return this._cardElement
    }
}

// Connect the Card class to the popup. 
// Make Card take the handleCardClick() function into the constructor. 
// When the user clicks on the card, this function will 
// open the popup with an image.