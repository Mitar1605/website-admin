const category = document.getElementsByClassName('main__categorie')
const options = document.getElementsByClassName('main__categorie_options')

for (let i = 0; i < category.length; i++) {
  let openOption = false
  
  category[i].addEventListener('click', (e) => {
    openOption = !openOption
  
    if (options[i].style.display === 'block' && !options[i].contains(e.target)){
      options[i].style.display = 'none'
      document.querySelector('.main__categorie_card').style.alignItems = 'center'
    }
    else {
      options[i].style.display = 'block'
      document.querySelector('.main__categorie_card').style.alignItems = 'flex-start'
    }
  })
}

let newCategory = false

document.querySelector('.main__categorie_card_add').addEventListener('click', () => {
  newCategory = !newCategory

  if (newCategory) document.querySelector('.main__categorie_add_card').style.display = 'flex'
  else document.querySelector('.main__categorie_add_card').style.display = 'none'
})
