const promise = new Promise(function (resolve, reject) {
  resolve("Hey!");
});

const cows = 15;
const conuntCows = new Promise(function (resolve, reject) {
  if (cows > 10) {
    resolve(`We have ${cows} cows on the farm`);
  } else {
    reject("The is no cows on the farm");
  }
});

conuntCows
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("finally"));
