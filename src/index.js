console.log("%c HI", "color: firebrick");

// Event Listeners
document.addEventListener("DOMContentLoaded", event => {
  // Variables
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  const div = document.querySelector("#dog-image-container");
  const breedsDiv = document.querySelector("#dog-breeds");
  const filter = document.querySelector("#breed-dropdown");

  // Functions
  //   Images
  function getImages(url) {
    return fetch(url).then(resp => resp.json());
  }

  function addImages(object) {
    object.message.forEach(element => addImage(element));
  }

  function addImage(url) {
    let img = document.createElement("img");
    img.src = url;
    console.log(img.src);
    div.append(img);
  }

  // Breeds
  function getBreeds(url) {
    return fetch(url).then(resp => resp.json());
  }

  function addBreeds(object) {
    for (const key in object.message) {
      addBreed(key);
    }
  }

  function addBreedsLetter(object) {
    const lisEl = document.querySelectorAll("li");
    lisEl.forEach(element => {
      element.remove();
    });
    for (const key in object.message) {
      const selectedLetter = filter.selectedOptions[0].value;
      if (key[0] === selectedLetter) {
        addBreed(key);
      }
    }
  }

  function addBreed(url) {
    const liTag = document.createElement("li");
    liTag.innerText = url;
    breedsDiv.append(liTag);
    liTag.addEventListener("click", function(event) {
      liTag.style.color = "green";
    });
  }

  getImages(imgUrl).then(images => addImages(images));
  getBreeds(breedUrl).then(breeds => addBreeds(breeds));

  filter.addEventListener("change", function(event) {
    getBreeds(breedUrl).then(breeds => addBreedsLetter(breeds));
  });
});
