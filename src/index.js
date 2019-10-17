module.exports = function solveSudoku(matrix) {

//function solveSudoku(matrix) {
  let localI = 0;
  let localJ = 0;
    if (isEnd(matrix)) {
      return matrix;
    } else {
      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
          if (matrix[i][j] == 0) {
            localI = i;
            localJ = j;
          }
        }      
      }
      sets = checkCell(matrix, localI, localJ);
      if (sets) {
        for (let set of sets) {
          matrix[localI][localJ] = set;
          solveSudoku(matrix);
          if(isEnd(matrix)) return matrix;
          matrix[localI][localJ] = 0;
	      }
      }
	      
    }

}
const checkCell = (matrix, row, col) => {
    if (matrix[row][col] === 0) {
      let set = new Set([1,2,3,4,5,6,7,8,9]);
      for (let i = 0; i <= 8; i++) {
        if(set.has(matrix[i][col])) {
          set.delete(matrix[i][col]);
        }
        if(set.has(matrix[row][i])) {
          set.delete(matrix[row][i]);
        }
        
      }
      for (let i = Math.floor(row / 3) * 3, lastRow = i + 3; i < lastRow; i++) {
        for (let j = Math.floor(col / 3) * 3, lastCol = j + 3; j < lastCol; j++) {
          set.delete(matrix[i][j]);
        }
      }
      return set;      
    }
};
function isEnd(matrix) {
	for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] === 0) return false;
    }
	}
	return true;	
}
const initial = [
  [6, 5, 0, 7, 3, 0, 0, 8, 0],
  [0, 0, 0, 4, 8, 0, 5, 3, 0],
  [8, 4, 0, 9, 2, 5, 0, 0, 0],
  [0, 9, 0, 8, 0, 0, 0, 0, 0],
  [5, 3, 0, 2, 0, 9, 6, 0, 0],
  [0, 0, 6, 0, 0, 0, 8, 0, 0],
  [0, 0, 9, 0, 0, 0, 0, 0, 6],
  [0, 0, 7, 0, 0, 0, 0, 5, 0],
  [1, 6, 5, 3, 9, 0, 4, 7, 0]
];
//solveSudoku(initial);