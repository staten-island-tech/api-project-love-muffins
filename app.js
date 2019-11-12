class Person {
  constructor(name, religion) {
    this.name = name;
    this.religion = religion;
  }
}

class UI {
  addPerson(person) {
    let html =
      '<div class="display-person flew-row"><div class="display-name">%name%</div><div class="display-religion">%religion%</div></div>';

    let newHtml = html.replace("%name%", person.name);
    newHtml = newHtml.replace("%religion%", person.religion);
    document.querySelector(".display").insertAdjacentHTML("beforeend", newHtml);
  }

  clearFields() {
    document.getElementById("name").value = "";
    document.getElementById("religion").value = "";
  }

  removePerson(target) {
    if (target.className === "remove-person") {
      target.parentElement.remove();
      // console.log(e.target.parentElement);
    }
  }
}

document.getElementById("person-form").addEventListener("submit", function(e) {
  const name = document.getElementById("name").value;
  const religion = document.getElementById("religion").value;

  const person = new Person(name, religion);

  const ui = new UI();
  ui.addPerson(person);
  ui.clearFields();
  e.preventDefault();
});

document.querySelector(".display").addEventListener("click", function(e) {
  const ui = new UI();
  ui.removePerson(e.target);
  ui.clearFields();
  e.preventDefault();
});

async function getPerson() {
  try {
    const result = await fetch("https://pokeapi.co/api/v2/pokemon/ditto/");
    const data = await result.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

const DOMStrings = {
  input: document.getElementById("person-form"),
  name: document.getElementById("pokemon-name"),
  displayName: document.querySelector(".person-name-size"),
  displayReligion: document.querySelector(".display-image-front-def")
};

DOMStrings.input.addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector(".nes-btn").click();
  }
});

function getPkmn() {
  DOMStrings.input.addEventListener("submit", async function(e) {
    e.preventDefault();
    try {
      const result = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${DOMStrings.name.value}`
      );
      const data = await result.json();
      // console.log(data);

      const displayPkmn = function(data) {
        DOMStrings.displayName.innerText = data.name;
        DOMStrings.displayNum.innerText = data.id;
        DOMStrings.displayImageFront.src = data.sprites.front_default;
        DOMStrings.displayImageBack.src = data.sprites.back_default;
        DOMStrings.displayImageShinyFront.src = data.sprites.front_shiny;
        DOMStrings.displayImageShinyBack.src = data.sprites.back_shiny;
        DOMStrings.type.textContent = data.types.map(data => data.type.name);
      };
      displayPkmn(data);
    } catch (err) {
      console.log(err);
    }
  });
}

getPkmn();
