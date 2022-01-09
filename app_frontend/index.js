const renderDataGrid = (data) => {
  const markup = `
      ${data.map((game) => 
        `
        <li>
          <img src=${game.background_image} width="250" height="250">
          <h3 data-id=${game.id} class="game__name">${game.name}</h3>
        </li>
        `
      ).join('')}
  `
  document.querySelector('.content__grid').innerHTML = markup
}

const getInitialData = async () => {
  const data = await fetch('http://localhost:3000/api/games')
  const response = await data.json()
  return response.results
}

const showIndividualGameData = async (event) => {
  if(event.target.className === 'game__name') {
    const id = event.target.dataset.id
    const data = await fetch(`http://localhost:3000/api/games/${id}`)
    const response = await data.json()
    console.log(response)
  }
}

const initApp = async () => {
  const fetchedData = await getInitialData()
  renderDataGrid(fetchedData)
}

document.addEventListener('DOMContentLoaded', initApp)
document.querySelector('.content__grid').addEventListener('click', showIndividualGameData)