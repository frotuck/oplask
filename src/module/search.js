import axios from "axios";

const accessKey = "cSzr8Sb7qg6Z38UjwaiNECu1261QWjBOrBPrXnEWaRU";


export async function getImages() {
  let searchWord = ""
  const response = await axios.get(
    `https://api.unsplash.com/photos/${searchWord}/?client_id=${accessKey}`,
    console.log("getImages() ran")

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