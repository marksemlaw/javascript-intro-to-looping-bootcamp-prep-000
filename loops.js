function forLoop(array) {
  for(let i = 0; i < 25; i++){
  if (i === 1) {array.unshift(`I am ${i} strange loop.`)} else {array.unshift(`I am ${i} strange loops.`)}
  }
}

function maybeTrue() {
  return Math.random() >= 0.5
}
 
do {
  console.log('doo-bee-doo-bee-doo')
} while (maybeTrue());
  