document.addEventListener('DOMContentLoaded',()=>{
    const cardArray = [
        {
            name:'dog',
            img:'images/dog.png'
        },
        {
            name:'dove',
            img:'images/dove.png'
        },
        {
            name:'elephant',
            img:'images/elephant.png'
        },
        {
            name:'goose',
            img:'images/goose.png'
        },
        {
            name:'monkey',
            img:'images/monkey.png'
        },
        {
            name:'pig',
            img:'images/pig.png'
        },
        {
            name:'dog',
            img:'images/dog.png'
        },
        {
            name:'dove',
            img:'images/dove.png'
        },
        {
            name:'elephant',
            img:'images/elephant.png'
        },
        {
            name:'goose',
            img:'images/goose.png'
        },
        {
            name:'monkey',
            img:'images/monkey.png'
        },
        {
            name:'pig',
            img:'images/pig.png'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    const cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      var cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
    }
  
    //flip your card
    function flipCard() {
      var cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })
