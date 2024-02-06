import axios from "axios";
const serverUrl = process.env.NEXT_PUBLIC_SERVER;

const unregisterUserUrl = "api/participate/unregister";

const unregisterUserApi = async (data) => {
  const { eventId } = data;
  const token = localStorage.getItem("token");
  return await axios
    .post(
      `${serverUrl}${unregisterUserUrl}`,
      { eventId },
      { headers: { Authorization: "Bearer " + token } }
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      const message = err.response ? err.response.data.message : err.message;
      if (message == "jwt expired") {
        localStorage.removeItem("token");
      }
      return { success: false, message: message };
    });
};
export default unregisterUserApi;
