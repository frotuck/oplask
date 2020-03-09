import axios from "axios";

const accessKey = "cSzr8Sb7qg6Z38UjwaiNECu1261QWjBOrBPrXnEWaRU";

export async function getImages() {
  console.log(accessKey);
  const response = await axios.get(
    `https://api.unsplash.com/photos/random/?client_id=${accessKey}`
  );
  console.log("hello2");
  return response;
}
