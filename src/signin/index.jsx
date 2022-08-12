import React, { useState } from "react";
import "./sign.css";
import { Visibility, VisibilityOff } from "@mui/icons-material"
import {
  Box,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";

function Index() {
  // const signInBtn = document.getElementById("signIn");
  // const signUpBtn = document.getElementById("signUp");
  // const fistForm = document.getElementById("form1");
  // const secondForm = document.getElementById("form2");
  const [signInValues, setSignInValues] = useState({
    userName: "",
    password: "",
    showPassword: false,
  });
  const [signUpValues, setSignUpValues] = useState({
    userName: "",
    password: "",
    showPassword: false,
  });
  const [isSignIn, setIsSignIn] = useState(false);
  const container = document.getElementsByClassName("container");

  const handleClickShowPassword = () => {
    setSignInValues({
      ...signInValues,
      showPassword: !signInValues.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleChangeSignIn = (prop) => (event) => {
    setSignInValues({ ...signInValues, [prop]: event.target.value });
  };
  const handleChangeSignUp = (prop) => (event) => {
    setSignUpValues({ ...signUpValues, [prop]: event.target.value });
  };
  // signInBtn.addEventListener("click", () => {
  //     container.classNameList.remove("right-panel-active");
  // });

  // signUpBtn.addEventListener("click", () => {
  //     container.classNameList.add("right-panel-active");
  // });

  // fistForm.addEventListener("submit", (e) => e.preventDefault());
  // secondForm.addEventListener("submit", (e) => e.preventDefault());
  return (
    <div className="body">
      <div className="container right-panel-active">
        <div className="container__form container--signup">
          <form action="#" className={isSignIn ? "form" : "myform"} id="form1">
          <h2 className="form__title">Sign In</h2>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              height="8rem"
            >
              <FormControl sx={{ m: 1,width: "35ch" }}>
                {/* <InputLabel htmlFor="userName">user name</InputLabel> */}
                <TextField
                  label="user name"
                  id="userName"
                  variant="outlined"
                  onChange={handleChangeSignIn("userName")}
                  value={signInValues.userName}
                ></TextField>
              </FormControl>
              <FormControl sx={{ m: 1, width: "35ch" }} variant="filled">
                <InputLabel htmlFor="filled-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  style={{  width: "100%" }}
                  id="filled-adornment-password"
                  type={signInValues.showPassword ? "text" : "password"}
                  value={signInValues.password}
                  onChange={handleChangeSignIn("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() =>
                            setSignInValues({
                            ...signInValues,
                            showPassword: !signInValues.showPassword,
                        })}
                        onMouseDown={(event)=>event.preventDefault()}
                        edge="end"
                      >
                        {signInValues.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>

            {/* <TextField type="password" placeholder="Password" className="input" ></input> */}
            <a href="#" className="link">
              Forgot your password?
            </a>
            <button className="btn">Sign In</button>
            
          </form>
        </div>

        <div className="container__form container--signin">
          <form action="#" className="form" id="form2">
            <h2 className="form__title">Sign Up</h2>
            <Box
              sx={{display:"flex",
              flexDirection:"column",
              justifyContent:"space-between",
              height:"8rem"}}
            >
              <FormControl sx={{  m: 1,width: "35ch" }}>
                {/* <InputLabel htmlFor="userName">user name</InputLabel> */}
                <TextField
                  label="user name"
                  id="userName"
                  variant="outlined"
                  onChange={handleChangeSignUp("userName")}
                  value={signUpValues.userName}
                ></TextField>
              </FormControl>
              <FormControl sx={{ m: 1,width: "35ch" }} variant="filled">
                <InputLabel htmlFor="signUp-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="signUp-password"
                  type={signUpValues.showPassword ? "text" : "password"}
                  value={signUpValues.password}
                  onChange={handleChangeSignUp("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() =>
                            setSignUpValues({
                            ...signUpValues,
                            showPassword: !signUpValues.showPassword,
                        })}
                        onMouseDown={(event)=>event.preventDefault()}
                        edge="end"
                      >
                        {signUpValues.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
            <button className="btn">Sign Up</button>
          </form>
        </div>

        <div className="container__overlay">
          <div className="overlay">
            <div className="overlay__panel overlay--left">
              <button
                className="btn"
                id="signIn"
                onClick={() => {
                  // console.log(container[0].classList)
                  setIsSignIn(!isSignIn);
                  container[0].classList.remove("right-panel-active");
                }}
              >
                Sign Up
              </button>
            </div>
            <div className="overlay__panel overlay--right">
              <button
                className="btn"
                id="signUp"
                onClick={() => {
                  setIsSignIn(!isSignIn);
                  container[0].classList.add("right-panel-active");
                }}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
