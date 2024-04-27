import { server } from "../store";
import axios from "axios";
import {
  loginRequest,
  loginSuccess,
  loginFail,
  logoutstate,
  resetState,
  resetFailState,
  forgetRequest,
  forgetSuccess,
} from "../reducers/adminReducer";
import toast from "react-hot-toast";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    const { data } = await axios.post(
      `${server}/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    // dispatch({ type: "loginSuccess", payload: data });

    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginFail(error.response.data.message));
  }
};

export const addSkill = async (skillImgUrl, skillName, skillPercentage) => {
  try {
    const skill = await axios.post(
      `${server}/addSkill`,
      { skillImgUrl, skillName, skillPercentage },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    toast.success(skill.data.message);
  } catch (err) {
    toast.error(err.response.data.message);
  }
};
export const addProject = async (
  sourseCodeOrVideoLink,
  projectImgUrl,
  githubCode,
  projecttitle,
  discription
) => {
  try {
    const project = await axios.post(
      `${server}/addProject`,
      {
        sourseCodeOrVideoLink,
        projectImgUrl,
        githubCode,
        projecttitle,
        discription,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    toast.success(project.data.message);
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

export const logout = () => async (dispatch) => {
  try {
    const logout = await axios.get(`${server}/logout`, {
      withCredentials: true,
    });

    toast.success(logout.data.message);
    dispatch(logoutstate());
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

export const changePasswordAction = async (oldPassword, newPassword) => {
  try {
    const changepassword = await axios.put(
      `${server}/changepassword`,
      {
        oldPassword,
        newPassword,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    toast.success(changepassword.data.message);
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

export const sendSMS = async (name, email, sms) => {
  try {
    const smsstore = await axios.post(`${server}/sendSMS`, {
      name,
      email,
      sms,
    });

    toast.success(smsstore.data.message);
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

export const forgetPassword = (email) => async (dispatch) => {
  try {
    dispatch(forgetRequest());
    const forgetpassword = await axios.post(
      `${server}/forgetpassword`,
      {
        email,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    toast.success(forgetpassword.data.message);
    dispatch(forgetSuccess());
  } catch (err) {
    dispatch(forgetSuccess());
    toast.error(err.response.data.message);
  }
};

export const resetPasswordAction =
  (token, password, confirmPassword) => async (dispatch) => {
    try {
      const resetpassword = await axios.put(
        `${server}/resetpassword/${token}`,
        { password, confirmPassword },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(resetpassword.data.message);
      dispatch(resetState());
    } catch (err) {
      toast.error(err.response.data.message);
      dispatch(resetFailState());
    }
  };
