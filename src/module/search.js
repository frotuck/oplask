import axios from "axios";

// const accessKey = "cSzr8Sb7qg6Z38UjwaiNECu1261QWjBOrBPrXnEWaRU";
const accessKey = "o_O6CqexLBlVKOEP2LnlCB3S_BpXOigldC3VF9o5GtQ";


export async function getImages(terms) {
  try {
    const response = await axios.get(`https://api.unsplash.com/search/photos/?client_id=${accessKey}&query=${terms}`);
    console.log(response)
    return response;

  } catch (error) {
    console.log(error)
  }

}

// export async function getSearchImages() {
//   console.log("hej från getSearchImages");
//   const response = await axios.get(
//     `https://api.unsplash.com/search/photos/?query=${searchInput}`

//   );
//   console.log(response);
//   return response;
// }
