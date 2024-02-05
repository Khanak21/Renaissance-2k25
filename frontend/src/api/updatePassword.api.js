import axios from "axios";
const serverUrl = process.env.NEXT_PUBLIC_SERVER;

const updatePasswordUrl = "api/auth/updatepassword";

const updatePasswordApi = async (data) => {
  const { token, password } = data;
  return await axios
    .post(
      `${serverUrl}${updatePasswordUrl}`,
      { password },
      { headers: { Authorization: "Bearer " + token } }
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      const message = err.response ? err.response.data.message : err.message;
      return { success: false, message: message };
    });
};
export default updatePasswordApi;
