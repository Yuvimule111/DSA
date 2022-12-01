let n = parseInt(readline());

let heights = readline().split(" ").map(x => parseInt(x)).slice(0, n);

function standingRows(heights){
    
let expectedHeights = heights.map(x => x).sort((a,b) => a-b);
let count = 0;
for(let i = 0; i < heights.length; i++){
if(heights[i] != expectedHeights[i]) count++;
}
return count;
}
console.log(standingRows(heights));