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


// use 'let' or 'const' instead of 'var'. Make sure you understand 'scoping' in javascript.
// let - https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/let
// const - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
var firstCardHeader = document.querySelector('.header p');

// assign content to the playerA names property
firstCardHeader.textContent = 'David Rocastle';

// apply for all the same logic as ^
var factFile = document.querySelector('.left b');
factFile.textContent = "FACT FILE";

var detailsFirstLineLeft = document.querySelector('#firstLineLeft');
detailsFirstLineLeft.textContent = "Year of Birth";

var detailsFirstLineRight = document.querySelector('#firstLineRight');
detailsFirstLineRight.textContent = "1967";

var detailsSecondLineLeft = document.querySelector('#secondLineLeft');
detailsSecondLineLeft.textContent = "Height (cm)";

var detailsSecondLineRight = document.querySelector('#secondLineRight');
detailsSecondLineRight.textContent = "173";

var detailsThirdLineLeft = document.querySelector('#thirdLineLeft');
detailsThirdLineLeft.textContent = "Weight (kg)";

var detailsThirdLineRight = document.querySelector('#thirdLineRight');
detailsThirdLineRight.textContent = "72";

var detailsFourthLineLeft = document.querySelector('#fourthLineLeft');
fourthLineLeft.textContent = "Goals for Arsenal";

var detailsFourthLineRight = document.querySelector('#fourthLineRight');
detailsFourthLineRight.textContent = "34";

var detailsFifthLineLeft = document.querySelector('#fifthLineLeft');
detailsFifthLineLeft.textContent = "International Caps";

var detailsFifthLineRight = document.querySelector('#fifthLineRight');
detailsFifthLineRight.textContent = "14";

var bottomTextTop = document.querySelector('#bottomTextTop');
bottomTextTop.textContent = "Top Signed from: N/A";

var bottomTextMiddle = document.querySelector('#bottomTextMiddle');
bottomTextMiddle.textContent = "Position: Midfield";

var bottomTextEnd = document.querySelector('#bottomTextEnd');
bottomTextEnd.textContent = "Squad No.: N/A";
