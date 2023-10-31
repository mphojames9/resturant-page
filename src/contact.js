function createContact() {
  const contact = document.createElement('div')
  contact.classList.add('contact')

  const phoneNumber = document.createElement('p')
  phoneNumber.textContent = '📞 011 1454 154'

  const address = document.createElement('p')
  address.textContent = '🏠 Demo street 1465, Rosebank, Pretoria, 0001'

  const restaurantLocation = document.createElement('img')
  restaurantLocation.src = 'images/Demo-map.jpg'
  restaurantLocation.alt = 'Mozzafiato restaurant location'

  contact.appendChild(phoneNumber)
  contact.appendChild(address)
  contact.appendChild(restaurantLocation)

  return contact
}

function loadContact() {
  const main = document.getElementById('main')
  main.textContent = ''
  main.appendChild(createContact())
}

export default loadContact
