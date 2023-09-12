export default class Card {
  constructor({
    name,
    link,
    userId,
    _id,
    ownerId,
    isLiked,
    handleImageClick,
    handleDeleteClick,
    handleLikeClick,
    cardSelector,
  }) {
    this._name = name;
    this._link = link;
    this._userId = userId;
    this._cardId = _id;
    this._ownerId = ownerId;
    this._isLiked = isLiked;
    this._handleImageClick = handleImageClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
    this._cardSelector = cardSelector;
  }

  _setEventListeners() {
    // like button
    this._likeButton.addEventListener("click", () => {
      this._handleLikeClick(this);
    });

    this._cardImage.addEventListener("click", () => {
      this._handleImageClick({ name: this._name, link: this._link });
    });

    // delete button
    this._cardElement
      .querySelector(".card__trashButton")
      .addEventListener("click", () => this._handleDeleteClick(this));
  }

  // toggleLikeButton() {
  //   this._likeButton.classList.toggle('card__like-button_active');
  // }
  
  _renderLikes() {
    if (this._isLiked) {
      this._likeButton.classList.add("card__like-button_active");
    } else {
      this._likeButton.classList.remove("card__like-button_active");
    }
  }

  setLikes(isLiked) {
    this._isLiked = isLiked;
    this._renderLikes()
  }

  deleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  getView() {
    this._cardElement = document.querySelector(this._cardSelector).content.firstElementChild.cloneNode(true);
    this._cardImage = this._cardElement.querySelector(".card__image");
    this._likeButton = this._cardElement.querySelector(".card__like-button");

    this._setEventListeners();
    this._renderLikes();

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardElement.querySelector(".card__title").textContent = this._name;
    return this._cardElement;
  }
}
