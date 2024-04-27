import React, { useState } from "react";
import "../styles/Admin.css";
import {
  addProject,
  addSkill,
  changePasswordAction,
  logout,
} from "../redux/actions/adminAction.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AdminDashboard = () => {
  const [skillImgUrl, setSkillImgUrl] = useState("");
  const [skillName, setSkillName] = useState("");
  const [skillPercentage, setSkillPercentage] = useState("");
  const [projectcodelinkorvideo, setProjectcodelinkorvideo] = useState("");
  const [projectimgurl, setProjectimgurl] = useState("");
  const [projectgithublink, setProjectgithublink] = useState("");
  const [projecttitle, setProjecttitle] = useState("");
  const [projectdiscription, setProjectdiscription] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const skillSubmit = (e) => {
    e.preventDefault();
    const isOnline = navigator.onLine;
    if (!isOnline) {
      toast.error("Please check your connection.");
    } else {
      addSkill(skillImgUrl, skillName, skillPercentage);
      setSkillImgUrl("");
      setSkillName("");
      setSkillPercentage("");
    }
  };
  const projectSubmit = (e) => {
    e.preventDefault();
    const isOnline = navigator.onLine;
    if (!isOnline) {
      toast.error("Please check your connection.");
    } else {
      addProject(
        projectcodelinkorvideo,
        projectimgurl,
        projectgithublink,
        projecttitle,
        projectdiscription
      );
      setProjectcodelinkorvideo("");
      setProjectimgurl("");
      setProjectgithublink("");
      setProjecttitle("");
      setProjectdiscription("");
    }
  };
  const logouthandler = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/");
  };
  const changePasswordbtn = (e) => {
    e.preventDefault();
    changePasswordAction(oldPassword, newPassword);
    setOldPassword("");
    setNewPassword("");
  };
  return (
    <div>
      <div className="adminbox">
        <div className="skillAdd">
          <h4>Add Skill-</h4>

          <input
            type="text"
            name="img"
            className="skillinput"
            value={skillImgUrl}
            placeholder="Enter Skill img Url."
            required
            onChange={(e) => setSkillImgUrl(e.target.value)}
          />
          <input
            type="text"
            name="skillname"
            className="skillinput"
            value={skillName}
            placeholder="Enter Skill Name."
            required
            onChange={(e) => setSkillName(e.target.value)}
          />
          <input
            type="number"
            name="percentage"
            className="skillinput"
            value={skillPercentage}
            placeholder="Enter Skill Percentage."
            required
            onChange={(e) => setSkillPercentage(e.target.value)}
          />

          <button className="addbtn" onClick={skillSubmit} type="submit">
            Add Skill
          </button>
        </div>

        <div className="projectAdd">
          <h4>Add Project-</h4>
          <input
            type="text"
            name="skillname"
            className="skillinput"
            value={projectcodelinkorvideo}
            onChange={(e) => setProjectcodelinkorvideo(e.target.value)}
            placeholder="Enter project source code link or video link ."
            required
          />
          <input
            type="text"
            name="skillname"
            className="skillinput"
            value={projectimgurl}
            onChange={(e) => setProjectimgurl(e.target.value)}
            placeholder="Enter project image url ."
            required
          />
          <input
            type="text"
            name="skillname"
            className="skillinput"
            value={projectgithublink}
            onChange={(e) => setProjectgithublink(e.target.value)}
            placeholder="Enter project source code link github ."
            required
          />
          <input
            type="text"
            name="skillname"
            className="skillinput"
            value={projecttitle}
            onChange={(e) => setProjecttitle(e.target.value)}
            placeholder="Enter project title ."
            required
          />

          <textarea
            className="skillinput"
            value={projectdiscription}
            onChange={(e) => setProjectdiscription(e.target.value)}
            placeholder="Enter discription about project ."
            name=""
            required
            id=""
            cols="20"
            rows=""
          ></textarea>
          <button className="addbtn" onClick={projectSubmit} type="submit">
            Add Project
          </button>
        </div>
      </div>
      <div className="changepassword">
        <input
          type="text"
          placeholder="Old Password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <button className="changepasswordbtn" onClick={changePasswordbtn}>
          Change
        </button>
      </div>

      <button className="logout" onClick={logouthandler}>
        Logout
      </button>
    </div>
  );
};

export default AdminDashboard;
