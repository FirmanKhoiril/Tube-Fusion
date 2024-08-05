import axios from 'axios';

const BASE_URL = 'https://coinranking1.p.rapidapi.com'

const options = {
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_APP_CRYPTO_API_KEY || "6443a330b9mshca44e19b852f815p13be46jsn3253cb1de0ea",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };
  
  export const FetchCrypto = async (url: string): Promise<any> => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
    return data;
  };
