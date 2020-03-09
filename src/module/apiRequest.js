import axios from "axios";

const accessKey = "cSzr8Sb7qg6Z38UjwaiNECu1261QWjBOrBPrXnEWaRU";


export async function getImages() {
  let searchWord = ""
  const response = await axios.get(
<<<<<<< HEAD:src/module/search.js
    `https://api.unsplash.com/photos/${searchWord}/?client_id=${accessKey}`,
    console.log("getImages() ran")

=======
    `https://api.unsplash.com/photos/?client_id=${accessKey}`
>>>>>>> d3a62a5e3611c7e02e5121deec4128c18f971df9:src/module/apiRequest.js
  );
  return response;
}

// export async function getSearchImages() {
//   console.log("hej från getSearchImages");
//   const response = await axios.get(
//     `https://api.unsplash.com/search/photos/?query=${searchInput}`

//   );
//   console.log(response);
//   return response;
// }