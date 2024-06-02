import axios from "axios";

const apiUrl = "https://your-api-url.com";

axios
  .get(apiUrl)
  .then((response) => {
    const data = response.data;
    // Do something with the data
  })
  .catch((error) => {
    console.error(error);
  });
