import axios from "axios";
const serverUrl = process.env.NEXT_PUBLIC_SERVER;

const getAllEventsUrl = "api/events";

const getAllEventsApi = async () => {
  return await axios
    .get(`${serverUrl}${getAllEventsUrl}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      const message = err.response ? err.response.data.message : err.message;
      return { success: false, message: message };
    });
};
export default getAllEventsApi;
