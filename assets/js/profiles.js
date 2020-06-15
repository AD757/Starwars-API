const drawCharacterBase = (data, coll = `char-collection_0`) => {
  return `<article data-coll='${coll}' class='sw-main sw-main__characters__item'>
	<h3>${data["name"]}</h3>
	</article>`;
};

const drawCharacterProfile = (data) => {
  return `
  <h3>${data["name"]}</h3>
  <div class="sw-main__characters__item-inner">
  <p><span class='sw-main__characters__item-inner-label'>Birth-year:</span> ${data["birth_year"]}</p>
  <p><span class='sw-main__characters__item-inner-label'>Gender:</span> ${data["gender"]}</p>
  <p><span class='sw-main__characters__item-inner-label'>Height:</span> ${data["height"]} cm</p>
  <p><span class='sw-main__characters__item-inner-label'>Mass: </span>${data["mass"]} kg</p>
  <p><span class='sw-main__characters__item-inner-label'>Skin-color: </span>${data["skin_color"]}</p>
  <p><span class='sw-main__characters__item-inner-label'>Eye-color: </span>${data["eye_color"]}</p>
  </div>`;
};

const drawCloseBtn = () => {
  return `<i onclick='closeCharTile(event)'class="fas fa-times-circle"></i>`;
}