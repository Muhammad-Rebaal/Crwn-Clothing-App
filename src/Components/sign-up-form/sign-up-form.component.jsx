import React, { useState } from "react";

import {
  AuthwithPasswordemail,
  createUserDocumentFromAuth,
} from "../../utils/Firebase.utils/Firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";
import Button from "../Button/button.component";
import { UserContext } from "../../context/user.context";

const Signup = () => {
  const defaultFormfield = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [Formfield, setFormField] = useState(defaultFormfield);
  const { displayName, email, password, confirmPassword } = Formfield;

  // const {setCurrentUser} = useContext(UserContext)

  const resetFormFields = () => {
    setFormField(defaultFormfield);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Your password does not match!");
      return; // Don't proceed with the signup if passwords don't match
    }

    try {
      const { user } = await AuthwithPasswordemail(email, password);
      //after we get this userAuth object I wanna call that method that generates that userAuth method
      // Handle user registration success here
      // setCurrentUser(user)
      createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.error(`User creation encountered and error: ${error}`);
        // Handle error, e.g., display an error message to the user
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormField({ ...Formfield, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />

        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />

        <Button type="submit">SignUp</Button>
      </form>
    </div>
  );
};

export default Signup;

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
