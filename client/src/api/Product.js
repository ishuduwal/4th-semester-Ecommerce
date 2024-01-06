import axios from "axios"
const apiURL = "http://localhost:5000/api/search/"

export const GetProduct = () => axios.get(apiURL);
export const searchProducts = async (query) => {
    try {
      const response = await search(query);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const search = async (query) => {
    try {
      const response = await axios.get(`${apiURL}?query=${query}`);
  
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(`Request failed with status ${response.status}`);
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
      throw error; // Propagate the error to the calling code
    }
  };