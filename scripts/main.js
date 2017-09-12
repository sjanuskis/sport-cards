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

var firstSport = document.getElementById('firstCard');

const firstCardElements =
`
  <div class="borderTop"></div>
  <div class="header">
    <p>${players[0].name}</p>
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
        <div id="firstLineRight">${players[0].yearOfBirth}</div>
      </div>
      <div class="detailsBorder"></div>
      <div class="line">
        <div id="secondLineLeft"></div>
        <div id="secondLineRight">${players[0].height}</div>
      </div>
      <div class="detailsBorder"></div>
      <div class="line">
        <div id="thirdLineLeft"></div>
        <div id="thirdLineRight">${players[0].weight}</div>
      </div>
      <div class="detailsBorder"></div>
      <div class="line">
        <div id="fourthLineLeft"></div>
        <div id="fourthLineRight">${players[0].goalsForCurrentTeam}</div>
      </div>
      <div class="detailsBorder"></div>
      <div class="line">
        <div id="fifthLineLeft"></div>
        <div id="fifthLineRight">${players[0].fifthLineRight}</div>
      </div>
      <div class="detailsBorder"></div>
      <div class="line">
        <div id="bottomTextTop">Top Signed from: ${players[0].topSignedFrom}</div>
        <div id="bottomTextMiddle">Position: ${players[0].position}</div>
        <div id="bottomTextEnd">Squad No.: ${players[0].squadNo}</div>
      </div>
    </div>
  </div>
`;

  firstSport.innerHTML = firstCardElements;

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
fourthLineLeft.textContent = "Goals for Arsenal";

var detailsFifthLineLeft = document.querySelector('#fifthLineLeft');
detailsFifthLineLeft.textContent = "International Cups";


};



// look at the example below:
// all you need is an element in html with the id of card to see the result

window.onload = function () {
    const card = document.getElementById('card');
    
    const coders = [
        {
            name: 'Simonas'
        },
        {
            name: 'Aurimas',
            email: 'some@email.com'
        }
    ];
    
    coders.map(coder => {
        card.insertAdjacentHTML('afterBegin', printCard(coder.name))
    });

    function printCard (name) {
        console.log(name)
        return `
            <h1>Hola, ${name} </h1>
        `
    };
};

// using this example approach, try to loop over players array,
// use insertAdjacentHTML api to add it to html, and instead of
// passing the html, call a function (printCard(coder.name) in example)
// and pass the arguments to the function, that the card will use.

// Try to print both players using first cards template.

// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
// ask as many questions as you like!


