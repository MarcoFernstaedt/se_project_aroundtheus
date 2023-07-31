const handleCloseModal = (modal) => {
    modal.classList.remove("modal_opened");
    document.removeEventListener('keydown', closeByEscape);
};

const handleOpenModal = (modal) => {
    modal.classList.add("modal_opened");
    document.addEventListener('keydown', closeByEscape);
};

const closeByEscape = (evt) => {

    if (evt.key === 'Escape') {
        const openModal = document.querySelector('.modal_opened');
        handleCloseModal(openModal)
    }
}

export { handleCloseModal, handleOpenModal };