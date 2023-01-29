document.getElementById("click-btn").addEventListener("click", () => {
  fetch("https://api.thedogapi.com/v1/breeds")
    .then((res) => res.json())
    .then((data) => ShowData(data));
});

const ShowData = (dogList) => {
  const main = document.getElementById("main");
  const TenDogList = dogList.slice(0, 21);
  for (const dog of TenDogList) {
    const div = document.createElement("div");
    div.classList = "col col-lg-4";
    div.innerHTML = `
    <h4>${dog.name}</h4>
    <p>${dog.bred_for}</p>
    <p>${dog.breed_group}</p>
    <img width="300px" height="200px" src="${dog.image.url}" />
    `;
    main.appendChild(div);
  }
};
