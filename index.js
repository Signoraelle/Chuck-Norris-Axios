
async function fetchJSON() {
  const url = `https://api.chucknorris.io/jokes/random`;
  const response = await axios.get(url);
  const data = response.data;

  const htmlData = `
      <p><strong>${data.value}</strong></p>
      <img src=${data.icon_url} />
      `;
  document.querySelector("#chuck-norris").innerHTML = htmlData
};



fetchJSON();