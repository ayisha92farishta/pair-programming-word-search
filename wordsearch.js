const wordSearch = (letters, word) => { 
   
    //searching words horizontally
     const horizontalJoin = letters.map(ls => ls.join(''))
     for (l of horizontalJoin) {
         if (l.includes(word)) return true;
     }
     
 
    //transpose the letetrs
    const lettersTranspose = transpose(letters);
 
    //searching word hirizontally over the newly transposed letters
 
    const verticalJoin = lettersTranspose.map(ls => ls.join(''))
    for (v of verticalJoin) {
     if (v.includes(word)) return true;
    }
 
   return false;
 
 };
 
 //function to transpose 
 const transpose = function(letters) {
     return letters[0].map((x, colIndex) => letters.map(row => row[colIndex]));
 }
 
 
 module.exports = wordSearch