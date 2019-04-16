document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded!');
const array = ["Rock","Paper","Scissors"];

  const rand = (array) => {
    return array[Math.floor(Math.random() * Math.floor(array.length))]};

  const choice = document.querySelector('#button-group');
    choice.addEventListener('click',(event)=>{
      const playersChoice = document.querySelector('#players-choice')
      const player = event.target.value;
      playersChoice.textContent = `Player plays: ${player}`;

      const computersChoice = document.querySelector('#computers-choice')
      const computer = rand(array)
      computersChoice.textContent = `Computer plays: ${computer}`;

      const result = document.querySelector('#result')
      switch (player) {
        case `Rock`:
          switch (computer) {
            case `Rock`:
                result.textContent = `It's a draw`;
                break;
            case `Paper`:
                result.textContent = `Computer wins`;
                break;
            case `Scissors`:
                result.textContent = `Player wins`;
                break;
          }
          break;
        case `Paper`:
          switch (computer) {
            case `Rock`:
                result.textContent = `Player wins`;
                break;
            case `Paper`:
                result.textContent = `It's a draw`;
                break;
            case `Scissors`:
                result.textContent = `Computer wins`;
                break;
          }
          break;
        case `Scissors`:
          switch (computer) {
            case `Rock`:
                result.textContent = `Computer wins`;
                break;
            case `Paper`:
                result.textContent = `Player wins`;
                break;
            case `Scissors`:
                result.textContent = `It's a draw`;
                break;
          };
        };
      });
    });
