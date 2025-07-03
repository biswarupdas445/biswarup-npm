function helloNpm() {
  return "hello NPM"
}


const sleep = async (milliseconds) => {
    await new Promise(resolve => setTimeout(resolve, milliseconds));
}
module.exports = { helloNpm, sleep};