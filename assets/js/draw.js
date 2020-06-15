const drawCharTiles = (coll = "char-collection_0", searchResult = "") => {
  const charContainer = document.querySelector(".sw-main .sw-main__characters");
  charContainer.innerHTML = ``;
  let data = [];
  if (searchResult.length > 0) {
    data = searchResult;
    data.forEach((item) => {
      charContainer.innerHTML += drawCharacterBase(item, item["coll"]);
    });
  } else {
    data = getData(coll);
    data.forEach((item) => {
      charContainer.innerHTML += drawCharacterBase(item, coll);
    });
  }
};

drawCharTiles();
