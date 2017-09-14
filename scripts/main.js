window.onload = function() {

const firstSport = document.getElementById('cards');

const playerA = {
    name: 'David Rocastle',
    yearOfBirth: '1967',
    height: '173 cm',
    weight: '72 kg',
    goalsForCurrentTeam: '34',
    internationalCups: '14',
    topSignedFrom: 'N/A',
    position: 'midfield',
    squadNo: 'N/A'
}

const players = [
    {
        name: 'David Rocastle',
        yearOfBirth: '1967',
        height: '173 cm',
        weight: '72 kg',
        goalsForCurrentTeam: '34',
        internationalCups: '14',
        topSignedFrom: 'N/A',
        position: 'midfield',
        squadNo: 'N/A'
    },
    {
        name: 'Other Name',
        yearOfBirth: '1977',
        height: '181 cm',
        weight: '78 kg',
        goalsForCurrentTeam: '46',
        internationalCups: '5',
        topSignedFrom: 'N/A',
        position: 'midfield',
        squadNo: 'N/A'
    }
];

players.map(player => {
  firstSport.insertAdjacentHTML('afterBegin', printCard(player.name, player.yearOfBirth, player.height, player.weight,
    player.goalsForCurrentTeam, player.internationalCups, player.topSignedFrom, player.position, player.squadNo))
});

function printCard (name, yearOfBirth, height, weight, goalsForCurrentTeam, internationalCups, topSignedFrom, position, squadNo){
  return `
  <div id="firstCard">
  <div class="borderTop"></div>
  <div class="header">
    <p>${name}</p>
    <p>
      <i class="fa fa-flag-checkered" aria-hidden="true"></i>
    </p>
  </div>
  <div class="picture"></div>
  <div class="info">
    <div class="left">
      <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>
      <b>FACT FILE</b>
    </div>
    <div class="detailsFirstCard">
      <div class="line">
        <div id="firstLineLeft">Year of Birth</div>
        <div id="firstLineRight">${yearOfBirth}</div>
      </div>
      <div class="detailsBorder"></div>
      <div class="line">
        <div id="secondLineLeft">Height (cm)</div>
        <div id="secondLineRight">${height}</div>
      </div>
      <div class="detailsBorder"></div>
      <div class="line">
        <div id="thirdLineLeft">Weight (kg)</div>
        <div id="thirdLineRight">${weight}</div>
      </div>
      <div class="detailsBorder"></div>
      <div class="line">
        <div id="fourthLineLeft">Goals for Arsenal</div>
        <div id="fourthLineRight">${goalsForCurrentTeam}</div>
      </div>
      <div class="detailsBorder"></div>
      <div class="line">
        <div id="fifthLineLeft">International Cups</div>
        <div id="fifthLineRight">${internationalCups}</div>
      </div>
      <div class="detailsBorder"></div>
      <div class="line">
        <div id="bottomTextTop">Top Signed from: ${topSignedFrom}</div>
        <div id="bottomTextMiddle">Position: ${position}</div>
        <div id="bottomTextEnd">Squad No.: ${squadNo}</div>
      </div>
    </div>
  </div>
  </div>
  <div class="buttons">
    <a href="#" id="hide">HIDE</a>
    <a href="#" id="show">SHOW</a>
  </div>
  `
};

// use 'let' or 'const' instead of 'var'. Make sure you understand 'scoping' in javascript.
// let - https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/let
// const - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
// var firstCardHeader = document.querySelector('.header p');

const hide = document.getElementById("hide");
const show = document.getElementById("show");
const cardOne = document.getElementById("firstCard");

hide.addEventListener("click", function(){
  if (cardOne.style.display == 'none') {
    cardOne.style.display = 'block';
    hide.style.display = 'block';
    show.style.display = 'none';
  } else {
    cardOne.style.display = 'none';
    hide.style.display = 'none';
    show.style.display = 'block';
  }
}, false);

show.addEventListener("click", function(){
  if (cardOne.style.display == 'none') {
    cardOne.style.display = 'block';
    hide.style.display = 'block';
    show.style.display = 'none';
  } else {
    cardOne.style.display = 'none';
    hide.style.display = 'none';
    show.style.display = 'block';
  }
}, false);

const hideTwo = document.getElementById("hideTwo");
const showTwo = document.getElementById("showTwo");
const cardTwo = document.getElementById("secondCard");

hideTwo.addEventListener("click", function(){
  if (cardTwo.style.display == 'none') {
    cardTwo.style.display = 'block';
    hideTwo.style.display = 'block';
    showTwo.style.display = 'none';
  } else {
    cardTwo.style.display = 'none';
    hideTwo.style.display = 'none';
    showTwo.style.display = 'block';
  }
}, false);

showTwo.addEventListener("click", function(){
  if (cardTwo.style.display == 'none') {
    cardTwo.style.display = 'block';
    hideTwo.style.display = 'block';
    showTwo.style.display = 'none';
  } else {
    cardTwo.style.display = 'none';
    hideTwo.style.display = 'none';
    showTwo.style.display = 'block';
  }
}, false);

const hideThree = document.getElementById("hideThree");
const showThree = document.getElementById("showThree");
const cardThree = document.getElementById("thirdCard");

hideThree.addEventListener("click", function(){
  if (cardThree.style.display == 'none') {
    cardThree.style.display = 'block';
    hideThree.style.display = 'block';
    showThree.style.display = 'none';
  } else {
    cardThree.style.display = 'none';
    hideThree.style.display = 'none';
    showThree.style.display = 'block';
  }
}, false);

showThree.addEventListener("click", function(){
  if (cardThree.style.display == 'none') {
    cardThree.style.display = 'block';
    hideThree.style.display = 'block';
    showThree.style.display = 'none';
  } else {
    cardThree.style.display = 'none';
    hideThree.style.display = 'none';
    showThree.style.display = 'block';
  }
}, false);


};
