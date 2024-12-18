const initialCards = [
    {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
    },
    {
        name: "Lake Louise",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
    },
    {
        name: "Bald Mountains",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
    },
    {
        name: "Latemar",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
    },
    {
        name: "Vanoise National Park",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
    },
    {
        name: "Lago di Braies",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
    }
];

// Open the modal
const profileEditBtn = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileCloseButton = document.querySelector("#profile-close-btn");
const profileTitle = document.querySelector(".profile__title");
const profilelDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector("#profile-description-input");
const profileEditForm = profileEditModal.querySelector(".modal__form");

const cardListEl = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card-template").content.firstElementChild;

// Functions
function closePopup() {
    profileEditModal.classList.remove("modal_opened");
}

function getCardElement(data) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardImageEl = cardElement.querySelector(".card__image");
    const cardTitleEl = cardElement.querySelector(".card__title");
    
    cardImageEl.src = data.link;
    cardImageEl.alt = data.name;

    cardTitleEl.textContent = data.name;
    return cardElement;
}

// Event Handlers
function handleProfileEditSubmit(e) {
    e.preventDefault();
    profileTitle.textContent = profileTitleInput.value;
    profilelDescription.textContent = profileDescriptionInput.value;
    closePopup();
}

// Event Listeners

profileEditBtn.addEventListener("click", () => {
    profileTitleInput.value = profileTitle.textContent;
    profileDescriptionInput.value = profilelDescription.textContent;
    profileEditModal.classList.add("modal_opened");
});

// Close the modal
profileCloseButton.addEventListener("click", closePopup);
profileEditForm.addEventListener("submit", handleProfileEditSubmit);

initialCards.forEach((data) => {
    const cardElement = getCardElement(data);
    cardListEl.prepend(cardElement);  
});
