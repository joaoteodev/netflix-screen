const modal = document.querySelector('.modal')
const chooseProfile = document.querySelector('.choose-profile')

const buttonCloseModal = document.querySelector('.close-modal')
buttonCloseModal.addEventListener('click', () => {
  modal.classList.add('hidden')
  document.body.classList.remove('overflow-hidden')
})

const liNewProfile = document.createElement('li')
const buttonCreateNewProfile = document.createElement('button')
const backgroundNewProfile = document.createElement('div')
const newProfileIcon = document.createElement('p')
const newProfileName = document.createElement('span')

buttonCreateNewProfile.classList.add('profile-link')

newProfileName.classList.add('profile-name')
newProfileName.textContent = 'Criar novo perfil'
newProfileIcon.classList.add('new-profile')
newProfileIcon.textContent = '+'
backgroundNewProfile.classList.add('background-new-profile')

backgroundNewProfile.appendChild(newProfileIcon)
buttonCreateNewProfile.appendChild(backgroundNewProfile)
buttonCreateNewProfile.appendChild(newProfileName)
liNewProfile.appendChild(buttonCreateNewProfile)
liNewProfile.classList.add('profile')

chooseProfile.appendChild(liNewProfile)

{
  /* <li class="profile">
<button href="#" class="profile-link" id="create-new-profile">
  <div class="background-new-profile">
    <p class="new-profile">+</p>
  </div>
  <span class="profile-name">Novo perfil</span>
</button>
</li> */
}

buttonCreateNewProfile.addEventListener('click', () => {
  window.scrollTo(0, 0)
  modal.classList.remove('hidden')
  document.body.classList.add('overflow-hidden')
})

function createNewProfile(name, url) {
  const liProfile = document.createElement('li')
  const profileLink = document.createElement('button')
  const imageProfile = document.createElement('img')
  const nameProfile = document.createElement('span')

  nameProfile.textContent = name
  nameProfile.classList.add('profile-name')

  imageProfile.setAttribute('src', url)
  imageProfile.classList.add('profile-icon')

  profileLink.classList.add('profile-link')
  profileLink.appendChild(imageProfile)
  profileLink.appendChild(nameProfile)

  liProfile.classList.add('profile')
  liProfile.appendChild(profileLink)

  chooseProfile.appendChild(liProfile)
}

function newProfile(event) {
  event.preventDefault()

  const nameProfile = document.querySelector('#name-profile')
  const imageProfile = document.querySelector('#image-profile')

  if (nameProfile.value && imageProfile.value) {
    modal.classList.add('hidden')
    document.body.classList.remove('overflow-hidden')
  } else {
    return
  }

  createNewProfile(nameProfile.value, imageProfile.value)

  manageProfile()

  nameProfile.value = ''
  imageProfile.value = ''
}

function manageProfile() {
  const profileList = document.querySelector('.choose-profile')
  const profileLength = profileList.children.length
  const maxProfileLength = 5

  if (profileLength > maxProfileLength) {
    buttonCreateNewProfile.classList.add('hidden')
    document.body.classList.remove('overflow-hidden')
    chooseProfile.removeChild(liNewProfile)
  } else {
    chooseProfile.removeChild(liNewProfile)
    chooseProfile.appendChild(liNewProfile)
  }
}

manageProfile()

const buttonNewProfile = document.querySelector('#newProfile')
buttonNewProfile.addEventListener('click', newProfile)
