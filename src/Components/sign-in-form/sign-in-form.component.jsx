import React, { useState } from "react";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  SigninAuthwithPasswordemail,
} from "../../utils/Firebase.utils/Firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
import Button from "../Button/button.component";

// import { UserContext } from "../../context/user.context";

const SignInForm = () => {
  const defaultFormfield = {
    email: "",
    password: "",
  };
  const [Formfield, setFormField] = useState(defaultFormfield);
  const { email, password } = Formfield;

  // const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormField(defaultFormfield);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormField({ ...Formfield, [name]: value });
  };

  const SignInwithGoogleUser = async () => {
    await signInWithGooglePopup();
   
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await SigninAuthwithPasswordemail(email, password);

      // setCurrentUser(user)

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("Incorrect Email");
          break;
        default:
          console.error(
            `The error you are encountering while submitting the SignIn From ${error}`
          );
      }
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          required
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={handleChange}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType="google"
            onClick={SignInwithGoogleUser}
          >
            Google sign in
          </Button>{" "}
          {/* buttons are type submit inside of forms so keep an eye on it */}
        </div>
      </form>
    </div>
  );
};

export default SignInForm;

// So what's going on

// I made the controlled component by adding the name and value attribute
// we've to maintain the value and name same that we put inthe DefaultFormfield its mandatory
// the name tells the name of the state change and the value gives the value
// handleChange ka fnc generic bnadia take main hr jaga use kr skon or usse hr jga use krlia
// event s a prop lia take main jo jo cheezen trigger ho rhi hain uski value get krlon
// actually event.target se hm sari cheezen get kr rhe hain jo jo input main ho rhi hain
// phir dobara destructure kr k value setValue se change krdi state ko
// we use a hook useState to keep track of the hooks
// onChange pr handleChange hr component pr lagana mt bholna vnra value event main nh jaigi koi bhi chahe name ya value
// create createUserDocumentFromAuth main mene user obj dia aur jo hai display name q k waha name  fill out hojaye is ki vja yeh hai
// k mere ps name null araha tha
