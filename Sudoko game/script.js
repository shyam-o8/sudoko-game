const sudokuGrid = document.getElementById('sudoku-grid');

function createSudokuBoard() {
    for (let i = 0; i < 81; i++) {
        const cell = document.createElement('input');
        cell.type = 'text';
        cell.className = 'cell';
        cell.maxLength = 1;
        cell.style.opacity = 0; // Start hidden
        cell.style.transition = 'opacity 0.5s'; // Transition for fade-in
        setTimeout(() => {
            cell.style.opacity = 1; // Fade in effect
        }, i * 50); // Staggered appearance
        cell.addEventListener('input', function() {
            this.value = this.value.replace(/[^1-9]/g, '');
        });
        sudokuGrid.appendChild(cell);
    }
}


function solveSudoku() {
}

document.getElementById('solve-button').addEventListener('click', solveSudoku);

createSudokuBoard();
