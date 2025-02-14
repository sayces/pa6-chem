import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputComponent from "../input/InputComponent";
import authStyles from "./auth_styles.module.scss";
import page_styles from '../pages/pages_styles/pages_styles.module.scss';
import inputs from "../input/input.json";
import LinkLabel from "../links/LinkLabel";
import InputFieldAttr from "../input/InputFieldAttr";
import inputStyles from "../input/_input.module.scss";
import linkStyles from "../links/_links.module.scss";
import BannerComponent from "../banner/BannerComponent";
import {
  getUsers,
  createUser,
  deleteUser,
  loginUser,
} from "../../../api/api.js";
import { useAuthStore } from "../../store/authStore";

let customLink = [
  {
    src: "",
    content: "авторизация",
  },
  {
    src: "",
    content: "регистрация",
  },
];

export default function AuthForm() {
  const [toggleAuthLink, setToggleAuthLink] = useState(true); // signIn/signUp page
  const [users, setUsers]: any = useState([]); // all users

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [newUser, setNewUser] = useState<{
    username: string;
    password: string;
  }>({
    username,
    password,
  }); // new user field
  const [secondPassword, setSecondPassword] = useState(""); // second password field
  const [submitValid, setSubmitValid] = useState(false);
  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
    secondPassword?: string;
  }>({});
  const user = useAuthStore((state) => state.user);
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  useEffect(() => {
    let newErrors: {
      username?: string;
      password?: string;
      secondPassword?: string;
    } = {};
    async function loadUsers() {
      const userData = await getUsers();
      setUsers(userData);
    }
    loadUsers();
    if (!username.trim()) {
      newErrors.username = "Username is required";
    }
    if (!password.trim()) {
      newErrors.password = "Password is required";
    }
    if (!secondPassword.trim() && toggleAuthLink) {
      newErrors.secondPassword = "Password is required";
    }
    if (secondPassword !== password && toggleAuthLink) {
      newErrors.secondPassword = "Passwords do not match";
    }
    setErrors(newErrors);
    setSubmitValid(Object.keys(newErrors).length === 0);
  }, [username, password, secondPassword]);

  useEffect(() => {
    if (user) navigate("/");
    console.log("effect on user");
  }, []);

  const handleAddUser = async () => {
    if (toggleAuthLink) {
      const addedUser = await createUser({ username, password });
      setUsers([...users, addedUser]);
      console.log(users);
    }
  };

  const handleLogin = async () => {
    if (!toggleAuthLink) {
      try {
        const { user, token } = await loginUser(username, password);
        login(user, token);
        // navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleAuthLink = (e: any) => {
    e.preventDefault();
    setToggleAuthLink(!toggleAuthLink);
  };

  const handleFormSubmit = (e: any) => {
    console.log("submit");
    
    e.preventDefault();
    try {
      if (toggleAuthLink) {
        console.log("signup");
        handleAddUser();
      } else {
        console.log("login");
        handleLogin();
      }
    } catch (error) {
      console.log(error);
    }   
  };

  return (
    <div className={page_styles.page}>
    <form onSubmit={handleFormSubmit} className={authStyles.authForm}>
      <div>
        <LinkLabel
          className={linkStyles.smallLink}
          onClick={handleAuthLink}
          link={toggleAuthLink ? customLink[1] : customLink[0]}
        />
        <LinkLabel
          size="small"
          onClick={handleAuthLink}
          link={toggleAuthLink ? customLink[0] : customLink[1]}
        />
      </div>
      <div className={inputStyles.inputContainer}>
        <InputComponent
          onFocus={null}
          inputProps={inputs[0]}
          type="login"
          value={username}
          onChange={(e: any) =>
            // setNewUser({ ...newUser, username: e.target.value })
            setUsername(e.target.value)
          }
        />
        {errors.username && (
          <p className={authStyles.error}>{errors.username}</p>
        )}
      </div>

      <div className={inputStyles.inputContainer}>
        <InputComponent
          onFocus={null}
          inputProps={inputs[1]}
          type="password"
          value={password}
          onChange={(e: any) =>
            // setNewUser({ ...newUser, password: e.target.value })
            setPassword(e.target.value)
          }
        />
        {errors.password && (
          <p className={authStyles.error}>{errors.password}</p>
        )}
      </div>
      {toggleAuthLink ? (
        <div className={inputStyles.inputContainer}>
          <InputComponent
            onFocus={null}
            inputProps={inputs[2]}
            type="password"
            value={secondPassword}
            onChange={(e: any) => setSecondPassword(e.target.value)}
          />
          {errors.secondPassword && (
            <p className={authStyles.error}>{errors.secondPassword}</p>
          )}
        </div>
      ) : null}
      <div>
        <InputFieldAttr type="submit" onClick={null} disabled={!submitValid}>
          {"отправить"}
        </InputFieldAttr>
      </div>
    </form>
    </div>
  );
}
