console.log('Starting App');

setTimeout(() => {
  console.log('Inside the function');
}, 2000);

setTimeout(() => {
  console.log('Inside the function 2');
}, 0);

console.log('Finish app');
