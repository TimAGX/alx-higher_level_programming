#!/usr/bin/node
const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[3]);
function add (a, b){
  console.log(a + b);
}
add(process.argv[2], process.argv[3]);
