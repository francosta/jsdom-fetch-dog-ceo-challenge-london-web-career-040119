console.log("%c HI", "color: firebrick");

// Event Listeners
document.addEventListener("DOMContentLoaded", event => {
  // Variables
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  const div = document.querySelector("#dog-image-container");
  const breedsDiv = document.querySelector("#dog-breeds");
  const breedList = document.querySelectorAll("li");

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
});
