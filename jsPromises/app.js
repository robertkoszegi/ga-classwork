
// const p = new Promise( function(resolve, reject){
//     console.log(resolve, reject);
// });

// const p = new Promise( function(resolve, reject){
//     let value = 42;
//     resolve(value)
// });

// const p = new Promise( function(resolve, reject){
//     setTimeout(function(){
//         reject("something went wrong");
//         console.log("promist after resolve", p);
//     }, 2000)
// });



// console.log("promise before resolve", p)


// p.then(function(result){
//     console.log(result)
// }).catch(function(err) {
//     console.log(err)
// });


function asyncAdd(a, b, delay) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(a + b);
      }, delay);
    });
  }


//   asyncAdd(5, 10, 2000)
//  .then(function(sum) {
//    console.log(sum);
//    return asyncAdd(sum, 100, 1000);
//  })
//  .then(function(sum) {
//    console.log(sum);
//    return asyncAdd(sum, 1000, 2000);
//  })
//  .then(function(sum) {
//    console.log(sum);
//  });

// ASYNC AWAIT
async function getAdd(){
    let sum = await asyncAdd(5, 20, 2000);

    console.log(sum)
    
}

getAdd();


