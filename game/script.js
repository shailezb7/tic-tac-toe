document.addEventListener('DOMContentLoaded', () => {
     const board = document.querySelector('.board');
    const cells = document.querySelectorAll('.cell');
     const resetButton = document.querySelector('#reset');
    let currentPlayer = 'X';
  

    
    cells.forEach(cell => {
      cell.addEventListener('click', handleCellClick);
    });
  

    
    resetButton.addEventListener('click', resetGame);
  

    
    function handleCellClick(event) {
       const cell = event.target;
  

  
       if (cell.textContent !== '') return;
   

  
       cell.textContent = currentPlayer;
  
   
  
         if (checkWin() || checkTie()) {
            disableCells();
          } else {
     

          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
      }
  
     function  checkWin() {
       const winningCombinations =  [
         [0, 1, 2], [3, 4, 5], [6, 7, 8], 
         [0, 3, 6], [1, 4, 7], [2, 5, 8], 
         [0, 4, 8], [2, 4, 6] 
       ];
  
       for (const combination of winningCombinations) {
         const [a, b, c] = combination;
         if (cells[a].textContent !== '' &&
             cells[a].textContent === cells[b].textContent &&
             cells[a].textContent === cells[c].textContent) {
           highlightWinningCells(combination);
           return true;
         }
       }
  
       return false;

    }
  
  
    function checkTie() {
      for (const cell of cells) {
        
        if (cell.textContent === '') {
          return false; 
        }
      }
  
      return true; 
    }
  

    function highlightWinningCells(combination) {
      for (const index  of combination) {
        cells[index].classList.add(' win');
      }
    }
  
 
    function disableCells() {
      cells.forEach(cell => {
        cell.removeEventListener(' click', handleCellClick);
      });
    }
  

        function resetGame() {
        cells.forEach( cell  => {
            cell.textContent = '';
            cell.classList.remove('win');
        });
  
        currentPlayer = 'X';
    
        cells.forEach( cell => {
            cell.addEventListener('click', handleCellClick);
        });
     }
 });