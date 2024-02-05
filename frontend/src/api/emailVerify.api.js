import axios from "axios";
const serverUrl = process.env.NEXT_PUBLIC_SERVER;

const registerUrl = "api/auth/emailverify";

const emailVerifyApi = async (data) => {
  const { token } = data;
  return await axios
    .post(
      `${serverUrl}${registerUrl}`,
      {},
      { headers: { Authorization: "Bearer " + token } }
    )
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      const message = err.response ? err.response.data.message : err.message;
      return { success: false, message: message };
    });
};
export default emailVerifyApi;
