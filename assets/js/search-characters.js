const initSearch = (() => {

  const searchArr = [];
  for (let i = 0; i < localStorage.length; i++) {
    const cName = `char-collection_${i}`;
    const item = getData(cName);
    if(item !== null) {
      for (let j = 0; j < item.length; j++) {
        item[j]["coll"] = cName;
        searchArr.push(item[j]);
      }
    }
  }


  const getResult = (arr, value) => {
    console.log(arr)
    return arr.filter((input) =>
      input["name"].toString().toLowerCase().includes(value.toLowerCase())
    ).sort((a, b) => a.name.localeCompare(b.name));
  };


  document
    .querySelector("input[name='search']")
    .addEventListener("input", (event) => {
      const input = event.target.value;
      input.length <= 0
        ? drawCharTiles()
        : drawCharTiles(``, getResult(searchArr, input));
    });
})();



