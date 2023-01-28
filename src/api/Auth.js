import { AxiosInstance } from "../util/AxiosInstance/AxiosInstance";

export const Signup = async (user) => {
  const URL = "/auth/signup";

  try {
    const response = await AxiosInstance.post(URL, user);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// export const Login=async(user)=>{

// }
