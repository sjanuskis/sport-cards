window.onload = function() {

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

var firstSport = document.getElementById('firstCard');

const firstCardElements =
`
  <div class="borderTop"></div>
  <div class="header">
    <p>${playerA.name}</p>
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
        <div id="firstLineRight">${playerA.yearOfBirth}</div>
      </div>
      <div class="detailsBorder"></div>
      <div class="line">
        <div id="secondLineLeft"></div>
        <div id="secondLineRight">${playerA.height}</div>
      </div>
      <div class="detailsBorder"></div>
      <div class="line">
        <div id="thirdLineLeft"></div>
        <div id="thirdLineRight">${playerA.weight}</div>
      </div>
      <div class="detailsBorder"></div>
      <div class="line">
        <div id="fourthLineLeft"></div>
        <div id="fourthLineRight">${playerA.goalsForCurrentTeam}</div>
      </div>
      <div class="detailsBorder"></div>
      <div class="line">
        <div id="fifthLineLeft"></div>
        <div id="fifthLineRight">${playerA.fifthLineRight}</div>
      </div>
      <div class="detailsBorder"></div>
      <div class="line">
        <div id="bottomTextTop"></div>
        <div id="bottomTextMiddle"></div>
        <div id="bottomTextEnd"></div>
      </div>
    </div>
  </div>
`;

  document.body.firstSport.innerHTML = firstCardElements;

// use 'let' or 'const' instead of 'var'. Make sure you understand 'scoping' in javascript.
// let - https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/let
// const - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
// var firstCardHeader = document.querySelector('.header p');
//
// // assign content to the playerA names property
// firstCardHeader.textContent = playerA.name;
//
// apply for all the same logic as ^
// var factFile = document.querySelector('.left b');
// factFile.textContent = "FACT FILE";
//
// var detailsFirstLineLeft = document.querySelector('#firstLineLeft');
// detailsFirstLineLeft.textContent = "Year of Birth";
//
// // var detailsFirstLineRight = document.querySelector('#firstLineRight');
// // detailsFirstLineRight.textContent = playerA.yearOfBirth;
//
// var detailsSecondLineLeft = document.querySelector('#secondLineLeft');
// detailsSecondLineLeft.textContent = "Height (cm)";
//
// // var detailsSecondLineRight = document.querySelector('#secondLineRight');
// // detailsSecondLineRight.textContent = playerA.height;
//
// var detailsThirdLineLeft = document.querySelector('#thirdLineLeft');
// detailsThirdLineLeft.textContent = "Weight (kg)";
//
// // var detailsThirdLineRight = document.querySelector('#thirdLineRight');
// // detailsThirdLineRight.textContent = playerA.weight;
//
// var detailsFourthLineLeft = document.querySelector('#fourthLineLeft');
// fourthLineLeft.textContent = "Goals for Arsenal";
//
// // var detailsFourthLineRight = document.querySelector('#fourthLineRight');
// // detailsFourthLineRight.textContent = playerA.goalsForCurrentTeam;
//
// var detailsFifthLineLeft = document.querySelector('#fifthLineLeft');
// detailsFifthLineLeft.textContent = "International Caps";
//
// // var detailsFifthLineRight = document.querySelector('#fifthLineRight');
// // detailsFifthLineRight.textContent = playerA.internationalCups;
//
// var bottomTextTop = document.querySelector('#bottomTextTop');
// bottomTextTop.textContent = "Top Signed from: " + playerA.topSignedFrom;
//
// var bottomTextMiddle = document.querySelector('#bottomTextMiddle');
// bottomTextMiddle.textContent = "Position: " + playerA.position;
//
// var bottomTextEnd = document.querySelector('#bottomTextEnd');
// bottomTextEnd.textContent = "Squad No.: " + playerA.squadNo;

};
