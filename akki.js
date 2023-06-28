
let arr = [1,2,3,4,5,6];


let array = [1,0,3,4];
let chunk_size = 3;
 let i =0;

while (i < array.length) {
    
    const chunk = array.slice(i, i + chunk_size);

    chunk.forEach((row) => {
     
        console.log(row)
    });
    i += chunk_size;
  }