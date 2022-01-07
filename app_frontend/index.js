
const renderDataGrid = (data) => {
  const markup = `
    <ul class="content__grid">
      ${data.map((game) => 
        ` <li>
            <img src=${game.background_image} width="250" height="250">
            <h3>${game.name}</h3>
          </li>
        `
      )}
    </ul>
  `
  document.querySelector('.content__wrapper').innerHTML = markup
}

const getInitialData = async () => {
  const data = await fetch('http://localhost:3000/api/games')
  const response = await data.json()
  return response.results
}

const initApp = async () => {
  const fetchedData = await getInitialData()
  renderDataGrid(fetchedData)
}

document.addEventListener('DOMContentLoaded', initApp)