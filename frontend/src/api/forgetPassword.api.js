import axios from "axios";
const serverUrl = process.env.NEXT_PUBLIC_SERVER;

const forgetPasswordUrl = "api/auth/forgetpassword";

const forgetPasswordApi = async (data) => {
  const { email } = data;
  return await axios
    .post(`${serverUrl}${forgetPasswordUrl}`, { email })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      const message = err.response ? err.response.data.message : err.message;
      return { success: false, message: message };
    });
};
export default forgetPasswordApi;
