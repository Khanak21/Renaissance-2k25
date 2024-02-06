import axios from "axios";
const serverUrl = process.env.NEXT_PUBLIC_SERVER;

const getEventUrl = "api/events/";

const getEventApi = async ({ eventid }) => {
  console.log("eventId",eventid);
  return await axios
    .get(`${serverUrl}${getEventUrl}${eventid}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      const message = err.response ? err.response.data.message : err.message;
      return { success: false, message: message };
    });
};
export default getEventApi;
