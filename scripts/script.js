const profileOpenPopupButton = document.querySelector('.edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-icon');
const profileName = document.querySelector('.user__name');
const profileJob = document.querySelector('.user__role');

function openPopup(event) {
  event.preventDefault()
  popup.classList.add('popup_opened')
}

function closePopup() {
  popup.classList.remove('popup_opened')
}

profileOpenPopupButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);


const formElement = document.querySelector('.popup__container')
const nameInput = document.querySelector('.popup__field-name')
const jobInput = document.querySelector('.popup__field-role')

function formSubmitHandler (evt) {
    evt.preventDefault();
    let userName = nameInput.value
    let userJob = jobInput.value

    profileName.textContent = userName;
    profileJob.textContent = userJob;

    closePopup()
}
formElement.addEventListener('submit', formSubmitHandler); 
