function helloNpm() {
  return "hello NPM"
}

// sleep function.
const sleep = async (milliseconds) => {
    await new Promise(resolve => setTimeout(resolve, milliseconds));
}

// rendomInt with range.
function randomInt(min = 0, max = 99999999) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// rendomFloat with range.
function randomFloat(min = 0, max = 99999999) {
  return (Math.random() * (max - min + 1) + min);
}

// validate email function.
function validateEmail(email) {
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(email);
};

// capitalize function first latter "uppercase".
function capitalize(str) {
  const arr = str.trim().toLowerCase().split(" ");

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  return arr.join(" ");
};


module.exports = { helloNpm, sleep, randomInt, randomFloat, validateEmail, capitalize };