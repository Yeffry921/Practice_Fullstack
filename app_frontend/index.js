const renderDataGrid = (data) => {
  const markup = `
      ${data.map((game) => 
        `
        <li>
          <div>
            <img src=${game.background_image} width="250" height="250">
          </div>
          <div>
            <h3 data-id=${game.id} class="game__name">${game.name}</h3>
          </div>
        </li>
        `
      ).join('')}
  `
  document.querySelector('.content__grid').innerHTML = markup
}

const renderIndividualData = async (event) => {
  const data = await showIndividualGameData(event)
  if(!data) {
    return;
  }
  const markup = `
    <div class="content__game-wrapper">
      <h1>${data.name}</h1>
      <img src=${data.background_image_additional} class="content__image" width="450" height="450">
      <div class="content__description">${data.description}</div>
    </div>
  `
  document.querySelector('.content__wrapper').innerHTML = markup
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
    return await data.json()
  }
}

const initApp = async () => {
  const fetchedData = await getInitialData()
  renderDataGrid(fetchedData)
}

document.addEventListener('DOMContentLoaded', initApp)
document.querySelector('.content__grid').addEventListener('click', renderIndividualData)