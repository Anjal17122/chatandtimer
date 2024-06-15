import  axios  from "axios";


const BASE_URL = "http://localhost:5000";

const get = async (relativeUrl) => {
    try {
        console.log(BASE_URL+relativeUrl);

      const resp = await axios.get(BASE_URL + relativeUrl)
      console.log(BASE_URL+relativeUrl);
      return resp.data;
    } catch (error) {
        console.log(error);
        alert("Couldn't get messages")
    }
  };

  const post = async (
    relativeUrl,
    data,    
  ) => {
    try {
      const response = await axios.post(
        BASE_URL + relativeUrl,
        data
      );
      return response.data.data;
    } catch (error) {
    //   setSubmitting(false);
    alert("Couldn't send message")
    console.log(error);
}
  };

  export {post,get};