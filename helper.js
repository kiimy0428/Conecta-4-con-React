export function checkHorizontalWinner(row, col) {
    let cells = this.state.cells;
  
    let a = 6;
  
    let value = this.state.player ? 2 : 1;
  
    while (i >= 3) {
      if (
        cells[row][a] === value &&
        cells[row][a - 1] === value &&
        cells[row][a - 2] === value &&
        cells[row][a - 3] === value
      ) {
        return 1;
      }
      a--;
    }
    return 0;
  }