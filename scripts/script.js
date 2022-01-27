const profileOpenPopupButton = document.querySelector('.edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-icon');

function openPopup(event) {
  event.preventDefault()
  popup.classList.add('popup_opened')
}

function closePopup() {
  popup.classList.remove('popup_opened')
}

profileOpenPopupButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);


let formElement = document.querySelector('.popup__container')
let nameInput = document.querySelector('.popup__field-name')
let jobInput = document.querySelector('.popup__field-role')

function formSubmitHandler (evt) {
    evt.preventDefault();
    let userName = nameInput.value
    let userJob = jobInput.value

    let profileName = document.querySelector('.name');
    let profileJob = document.querySelector('.role');

    profileName.textContent = userName;
    profileJob.textContent = userJob;

    closePopup()
}
formElement.addEventListener('submit', formSubmitHandler); 
