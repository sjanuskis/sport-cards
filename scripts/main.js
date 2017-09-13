window.onload = function() {

const firstSport = document.getElementById('firstCard');

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
      <b></b>
    </div>
    <div class="detailsFirstCard">
      <div class="line">
        <div id="firstLineLeft"></div>
        <div id="firstLineRight">${yearOfBirth}</div>
      </div>
      <div class="detailsBorder"></div>
      <div class="line">
        <div id="secondLineLeft"></div>
        <div id="secondLineRight">${height}</div>
      </div>
      <div class="detailsBorder"></div>
      <div class="line">
        <div id="thirdLineLeft"></div>
        <div id="thirdLineRight">${weight}</div>
      </div>
      <div class="detailsBorder"></div>
      <div class="line">
        <div id="fourthLineLeft"></div>
        <div id="fourthLineRight">${goalsForCurrentTeam}</div>
      </div>
      <div class="detailsBorder"></div>
      <div class="line">
        <div id="fifthLineLeft"></div>
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
  `
};

// use 'let' or 'const' instead of 'var'. Make sure you understand 'scoping' in javascript.
// let - https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/let
// const - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
// var firstCardHeader = document.querySelector('.header p');

var factFile = document.querySelector('.left b');
factFile.textContent = "FACT FILE";

var detailsFirstLineLeft = document.querySelector('#firstLineLeft');
detailsFirstLineLeft.textContent = "Year of Birth";

var detailsSecondLineLeft = document.querySelector('#secondLineLeft');
detailsSecondLineLeft.textContent = "Height (cm)";

var detailsThirdLineLeft = document.querySelector('#thirdLineLeft');
detailsThirdLineLeft.textContent = "Weight (kg)";

var detailsFourthLineLeft = document.querySelector('#fourthLineLeft');
detailsFourthLineLeft.textContent = "Goals for Arsenal";

var detailsFifthLineLeft = document.querySelector('#fifthLineLeft');
detailsFifthLineLeft.textContent = "International Cups";

};
