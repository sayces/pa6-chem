import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputComponent from "../input/InputComponent";
import auth_styles from "./_auth_styles.module.scss";
import page_styles from "../main/_pages_styles.module.scss";
import inputs from "../input/input.json";
import LinkLabel from "../links/LinkLabel";
import InputFieldAttr from "../input/InputFieldAttr";
import inputStyles from "../input/_input.module.scss";
import link_styles from "../links/_links.module.scss";
import BannerComponent from "../banner/BannerComponent";
import {
  getUsers,
  createUser,
  deleteUser,
  loginUser,
} from "../../../api/apiUser.js";
import { useAuthStore } from "../../store/authStore";

export default function AuthForm() {
  const [toggleAuthLink, setToggleAuthLink] = useState(true); // signIn/signUp page
  const [users, setUsers]: any = useState([]); // all users

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
      const addedUser = await createUser(username, password);
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

  const handleAuthLink = () => {
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
    <div className={page_styles.auth_page}>
      <form onSubmit={handleFormSubmit} className={auth_styles.authForm}>
        <div className={link_styles.main_link_container}>
          <LinkLabel onClick={() =>{}}>
            <h1 className={link_styles.link}>
              {toggleAuthLink ? "Регистрация" : "Авторизация"}
            </h1>
          </LinkLabel>
          <svg className={link_styles.main_link_arrow}
        width="16"
        height="16"
        viewBox="0 0 198 129"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          
          d="M9 9.87503L166.389 9.87505C175.072 9.87505 179.629 20.1797 173.788 26.603L122.5 83"
          stroke="black"         
          stroke-width="18"
          stroke-linecap="round"
        />
        <path
          d="M189 119.125L31.6107 119.125C22.9285 119.125 18.3711 108.82 24.2125 102.397L75.5 46"
          stroke="black"
          stroke-width="18"
          stroke-linecap="round"
        />
      </svg>
          <LinkLabel onClick={handleAuthLink}>
            <h1 className={link_styles.link_alt}>
              {toggleAuthLink ? "Авторизация" : "Регистрация"}
            </h1>
          </LinkLabel>
        </div>
        <div className={inputStyles.input_container}>
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
            <p className={auth_styles.error}>{errors.username}</p>
          )}
        </div>

        <div className={inputStyles.input_container}>
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
            <p className={auth_styles.error}>{errors.password}</p>
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
              <p className={auth_styles.error}>{errors.secondPassword}</p>
            )}
          </div>
        ) : (
          <></>
        )}
        <div>
          <InputFieldAttr type="submit" onClick={null} disabled={!submitValid}>
            {"отправить"}
          </InputFieldAttr>
        </div>
      </form>
    </div>
  );
}
