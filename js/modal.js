
const modal = document.querySelector('.modal')
const modalTriggerBtn = document.querySelector('#btn-get')
const modalCloseBtn = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

modalTriggerBtn.onclick = () => openModal()
modalCloseBtn.onclick = () => closeModal()
modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal()
    }
}

setTimeout(() => {
    openModal();
}, 10000);

function showModalOnScroll() {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        showModal();

        window.removeEventListener('scroll', showModalOnScroll);
    }
}

function showModal() {
    openModal()
}

