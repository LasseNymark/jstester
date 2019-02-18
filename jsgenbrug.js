"use strict";

let recycles = [{
    beskrivelse: "Birgitte Kirk Iversen",
    address: "Sønderhøj 30, 8260 Viby J",
    img: "https://www.baaa.dk/CropUp/headshot/media/1524902/birgitte-kirk-iversen.jpg"
  },
  {
    beskrivelse: "Michael Hvidtfeldt",
    address: "Sønderhøj 30, 8260 Viby J",
    img: "https://www.eaaa.dk/CropUp/headshot/media/116737/Michael-Hvidtfeldt.jpg"
  },
  {
    beskrivelse: "Rasmus Cederdorff",
    address: "Sønderhøj 30, 8260 Viby J",
    img: "http://eaaa.cederdorff.com/mdu-f18front/object_teachers_grid/img/race.jpg"
  }
];

console.log(recycles);

function appendRecycles(recycles) {
  for (let recycle of recycles) {
    console.log(recycle);
    document.querySelector("#grid-teachers").innerHTML += `
      <article>
        <img src='${recycle.img}'>
        <h3>${recycle.beskrivelse}</h3>
        ${recycle.address}<br>
      </article>
    `;

  }
}

appendRecycles(recycles);


/* Her tilføjes der ny et nyt objekt */

function createRecycle() {
  // get the values from the input fields
  let beskrivelse = document.querySelector('#add-recycle-form input[name=beskrivelse]').value;
  let address = document.querySelector('#add-recycle-form input[name=address]').value;
  let img = document.querySelector('#add-recycle-form input[name=fileupload]').value;

  // create a new object
  let newrecycle = {
    beskrivelse: beskrivelse,
    address: address,
    img: img
  };

  recycles.push(newrecycle);

  // reset grid
  document.querySelector("#grid-teachers").innerHTML = "";
  // call appendTeachers to append all teachers again
  appendRecycles(recycles);
}