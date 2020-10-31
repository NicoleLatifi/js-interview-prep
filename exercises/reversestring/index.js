// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//Solve it with any thing you know


function reverse(str) {
  return str.split("").reverse().join("");
}

//Solve it again but cant use Array.reverse

function reverse2(str) {
  let result = []
  const splitStr = str.split("")
  for(let i = splitStr.length - 1; i >= 0; i--) {
    result.push(splitStr[i])
  }
  return result.join("")
}

//Solve it using an array iterator method

function reverse3(str) {
  const result = []
  let counter = str.length
  while (counter >= 0) {
    result.push(str.charAt(counter))
    counter--
  }
  return result.join("")
}

module.exports = { reverse, reverse2, reverse3 };
