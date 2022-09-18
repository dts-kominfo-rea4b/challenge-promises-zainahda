const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {

  try {
    const theaterOne = await promiseTheaterIXX();
    const theaterTwo = await promiseTheaterVGC();

    const output = [...theaterOne, ...theaterTwo].filter((value) => value.hasil === emosi).length;
    return output;
  } catch(error) {
    console.log(error)
  }
}

module.exports = {
  promiseOutput,
};
