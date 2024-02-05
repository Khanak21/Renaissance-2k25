import axios from "axios";
const serverUrl = process.env.NEXT_PUBLIC_SERVER;

const registerUrl = "api/auth/admin/register";

const registerUserApi = async (data) => {
  const { username, email, password, student_from, mobile, gender } = data;
  const isMnnitStudent = student_from === "mnnit" ? true : false;
  return await axios
    .post(`${serverUrl}${registerUrl}`, {
      username,
      email,
      password,
      isMnnitStudent,
      mobile,
      gender,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      const message = err.response ? err.response.data.message : err.message;
      return { success: false, message: message };
    });
};
export default registerUserApi;
