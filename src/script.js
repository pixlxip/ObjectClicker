// by pixl_xip

//--DEFINE VARIABLES--//

let coins = 0;
let currentStage = 0;
let boost = 0; //TODO: BOOSTS
let auto = 0;  //TODO: AUTO
let cheat = 0;
let tutorial = true;
let resetConfirm = false;
let big = false;
let largePrimaryNumberName = "not defined";
let largeSecondaryNumberName = "not defined";
let largeTertiaryNumberName = "not defined";
let largeQuaternaryNumberName = "not defined";
let largeQuinaryNumberName = "not defined";
let largeSenaryNumberName = "not defined";
let largeSeptenaryNumberName = "not defined";
let largeOctonaryNumberName = "not defined";
let largeNonaryNumberName = "not defined";
let largeDenaryNumberName = "not defined";

if (document.cookie === "") {
  //TODO: COOKIES
}

//--DEFINE ARRAYS--//

const stages = [
  "atom",
  "bacterium",
  "redBloodCell",
  "grainOfSalt",
  "ant",
  "pebble",
  "marble",
  "snail",
  "butterfly",
  "leaf",
  "clock",
  "turkey",
  "chair",
  "couch",
  "table",
  "tree",
  "house",
  "barn",
  "skyscraper",
  "asteroid",
  "pluto",
  "moon",
  "mercury",
  "mars",
  "venus",
  "earth",
  "neptune",
  "uranus",
  "saturn",
  "jupiter",
  "sun",
  "sirius"
]

const expNums = [
  303,
  63,
  60,
  57,
  54,
  51,
  48,
  45,
  42,
  39,
  36,
  33,
  30,
  27,
  24,
  21,
  18,
  15,
  12,
  9,
  6,
  3,
  0
]
const expNames = [
  " Centillion",
  " Vigintillion",
  " Novemdecillion",
  " Octodecillion",
  " Septendecillion",
  " Sexdecillion",
  " Quindecillion",
  " Quattuordecillion",
  " Tredecillion",
  " Duodecillion",
  " Undecillion",
  " Decillion",
  " Nonillion",
  " Octillion",
  " Septillion",
  " Sextillion",
  " Quintillion",
  " Quadrillion",
  " Trillion",
  " Billion",
  " Million",
  " Thousand",
  ""
]

//--DEFINE HTML ELEMENTS--//

const getUpg = document.getElementById("upgDiv");
const getObj = document.getElementsByClassName("object");
const getObjDiv = document.getElementById("objDiv");
const getCoinCounter = document.getElementById("coins");
const getReset = document.getElementById("reset");
const getTutorial = document.getElementById("tutorial");
const getCredits = document.getElementById("credits");
const getLoading = document.getElementById("loading");
const getUnloaded = document.getElementById("unloaded");

//--DEFINE FUNCIONS--//

function mouseOverUpg() {
  if (coins < ((currentStage + 2) ** 2 + 6) ** (currentStage + 1) - 0.1) {
    document.getElementById("upgDiv").style = "background-color: #BF616A"
  } else {
    document.getElementById("upgDiv").style = "background-color: #8FBCBB"
  }
  if (currentStage != stages.length - 1) {
    document.getElementById("upgrade").innerText = abbreviateNumberInString(((currentStage + 2) ** 2 + 6) ** (currentStage + 1)) + " coins";
  } else {
    document.getElementById("upgrade").innerText = "No more upgrades!";
    document.getElementById("upgDiv").style = "background-color: #BF616A"
  }
}

function mouseOutUpg() {
  document.getElementById("upgrade").innerText = "Upgrade";
  document.getElementById("upgDiv").style = "background-color: #3B4252"
}

function createObjects() {
  for (let i = 0; i < stages.length; i++) {
    if (getObjDiv.innerHTML === "") {
      getObjDiv.innerHTML = "<img src=\"src/stages/" + stages[i] + ".png\" class=\"object\" id=\"" + stages[i] + "\" style=\"display: inline-block; width: 100%;\">";
    } else {
      getObjDiv.innerHTML = getObjDiv.innerHTML += "<img src=\"" + stages[i] + "\" class=\"object\" id=\"" + stages[i] + "\" style=\"display: none; width: 100%;\">"
    }
  }
}

function changeObj(file, alt) {
  getObj.src = file;
  getObjDiv.alt = alt;
}

function altCoins() {
  if (!big) {
    return (Math.round(coins * 10) / 10).toString()
  } else {
    return coins.toString()
  }
}

function chooseObjFileByNum(num) {
  return "src/stages/".concat(stages[num], ".png")
}

function updateCoinCounter() {
  getCoinCounter.innerHTML = abbreviateNumberInString(altCoins()).concat(/*largeDenaryNumberName, largeNonaryNumberName, largeOctonaryNumberName, largeSeptenaryNumberName, largeSenaryNumberName, */largeQuinaryNumberName, largeQuaternaryNumberName, largeTertiaryNumberName, largeSecondaryNumberName, largePrimaryNumberName, " coins");
  console.log(largeQuinaryNumberName, "-", largeQuaternaryNumberName, "-", largeTertiaryNumberName, "-", largeSecondaryNumberName, "-", largePrimaryNumberName)
  largeDenaryNumberName = largeNonaryNumberName = largeOctonaryNumberName = largeSeptenaryNumberName = largeSenaryNumberName = largeQuinaryNumberName = largeQuaternaryNumberName = largeTertiaryNumberName = largeSecondaryNumberName = largePrimaryNumberName = "not defined";
  console.log("big:", big);
}

function buy(num) {
  if (!big) coins -= num; else coins -= BigInt(num);
  updateCoinCounter();
}

function gain(num) {
  if (coins > 1000000000000000 && !big) {
    if (typeof num === "bigint") {
      coins += num;
    } else {
      if (Math.floor(coins) === coins) {
        coins = BigInt(coins + num);
        console.log("=");
      } else {
        coins = BigInt(Math.floor(coins) + 1 + num);
        console.log("!");
      }
    }
    big = true;
  } else if (big) {
    if (typeof num === "bigint") {
      coins += num;
    } else {
      coins += BigInt(Math.floor(num) + 1);
    }
  } else {
    if (typeof num === "bigint") {
      if (Math.floor(coins) === coins) {
        coins = BigInt(coins) + num;
        console.log("gain bigint to int")
      } else {
        coins = BigInt(Math.floor(coins) + 1) + num;
        console.log("gain bigint to number");
      }
      big = true;
    } else {
      coins += num;
    }
  }
  updateCoinCounter();
}

function abbreviateNumberInString(input) {

  if (Math.floor(input) === input || big) {
    console.log("abbreviateNumberInString() was called!");
    var place = 0;
    console.log("input: ", input);

    for (i = expNums[0]; i > -1; i -= 3) {
      //console.log(i);
      if (expNums.includes(i)) {
        console.log(i);
        if (input.length > i) {
          console.log("place: ", place, "to name: ", expNames[place]);
          console.log("type: ", typeof place);

          if (largePrimaryNumberName === "not defined") {
            largePrimaryNumberName = expNames[place];
            return abbreviateNumberInString(input.slice(0, input.length - i))
          } else if (largeSecondaryNumberName === "not defined") {
            largeSecondaryNumberName = expNames[place];
            return abbreviateNumberInString(input.slice(0, input.length - i))
          } else if (largeTertiaryNumberName === "not defined") {
            largeTertiaryNumberName = expNames[place];
            return abbreviateNumberInString(input.slice(0, input.length - i))
          } else if (largeQuaternaryNumberName === "not defined") {
            largeQuaternaryNumberName = expNames[place];
            return abbreviateNumberInString(input.slice(0, input.length - i))
          } else if (largeQuinaryNumberName === "not defined") {
            largeQuinaryNumberName = expNames[place];
            return input.slice(0, input.length - i)//abbreviateNumberInString(input.slice(0, input.length - i))
          }/*else if(largeSenaryNumberName === "not defined"){
            largeQuaternaryNumberName = expNames[place];
            return abbreviateNumberInString(input.slice(0, input.length - i))
          }else if(largeSeptenaryNumberName === "not defined"){
            largeQuaternaryNumberName = expNames[place];
            return abbreviateNumberInString(input.slice(0, input.length - i))
          }else if(largeOctonaryNumberName === "not defined"){
            largeQuaternaryNumberName = expNames[place];
            return abbreviateNumberInString(input.slice(0, input.length - i))
          }else if(largeNonaryNumberName === "not defined"){
            largeQuaternaryNumberName = expNames[place];
            return abbreviateNumberInString(input.slice(0, input.length - i))
          }else if(largeDenaryNumberName === "not defined"){
            largeQuaternaryNumberName = expNames[place];
            return input.slice(0, input.length - i)
          }*/
        }
        place++;
      }
    }
  } else {
    largePrimaryNumberName = largeSecondaryNumberName = largeTertiaryNumberName = largeQuaternaryNumberName = largeQuinaryNumberName = largeSenaryNumberName = "";
    return input
  }
}

function upgrade() {
  if (currentStage < stages.length - 1) {
    if (!big) {
      if (coins > ((currentStage + 2) ** 2) ** (currentStage + 1) + 6 - 0.1) {
        buy(((currentStage + 2) ** 2) ** (currentStage + 1) + 6);
        currentStage++;
        mouseOverUpg();
        changeObj(chooseObjFileByNum(currentStage), stages[currentStage]);
      } else console.log("Not enough coins!")
    } else {
      if (coins > BigInt(((currentStage + 2) ** 2) ** (currentStage + 1) + 6 - 1)) {
        buy(((currentStage + 2) ** 2) ** (currentStage + 1) + 6);
        currentStage++;
        mouseOverUpg();
        changeObj(chooseObjFileByNum(currentStage), stages[currentStage]);
      } else console.log("Not enough coins!")
    }
  } else console.log("Stage Limit Reached! (For Now!)")

  //Return Reset button to normal
  getReset.innerHTML = "Reset";
  resetConfirm = false;
}

//--CLICK AND HOVER EVENT LISTENERS--//

getObjDiv.onclick = function() {
  gain((10 ** (currentStage + 1)) / 100 + boost);
  console.log("Clicked!");
  console.log(altCoins());

  //Hide Tutorial
  if (tutorial === true) {
    tutorial = false;
    getTutorial.style.display = "none";
  }

  //Return Reset button to normal
  getReset.innerHTML = "Reset";
  resetConfirm = false;
}

getUpg.onclick = function() {
  upgrade();
  console.log("Clicked!");
}

getObj.ondragstart = () => {
  return false;
};

getCredits.onclick = function() {
  cheat++;
  if (cheat == 5) {
    gain(10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n);
    cheat = 0;

    //Hide Tutorial
    if (tutorial === true) {
      tutorial = false;
      getTutorial.style.display = "none";
    }
  }
}

getReset.onclick = function() {
  if (resetConfirm === true) {
    coins = 0;
    currentStage = 0;
    boost = 0;
    tutorial = true;
    resetConfirm = false;
    big = false;
    updateCoinCounter();
    getTutorial.style.display = "block";
    changeObj(chooseObjFileByNum(0));
    getReset.innerHTML = "Reset";
  } else {
    resetConfirm = true;
    getReset.innerHTML = "You sure?";
  }
}

getUpg.onmouseover = function() { mouseOverUpg() };
getUpg.onmouseout = function() { mouseOutUpg() };

//--CALL CODE--//

updateCoinCounter();

//getTutorial.style.display = "none"; //disable tutorial (for now)



getLoading.style.display = "none";
getUnloaded.style.display = "block";
getTutorial.style.display = "block";

createObjects();