const form = document.querySelector('.form')

form.addEventListener('submit', (event) => {
    const value = document.querySelector('.nombre').value
    fetch(value)
      .then(response => response.json())
      .then(data => {
          const code = document.querySelector('.response')
          code.innerHTML = JSON.stringify(data, null, 4)
      })
    event.preventDefault()
})