import React from "react";
import {Formik, useFormik} from "formik";

function App() {
  const formik= useFormik({
    initialValues: {
      email: " ",
      password: " "
    },
    onSubmit: values=>{
        console.log("form:", values);
    },
    validate: values=>{
      let errors = {};
      if(!values.email) errors.email = "Field Required";
      if(!values.password) errors.password = "Field Required";
      if(values.email && values.password) errors.alert="Login Successful";
      return errors;
    }
  });
    

  return (
    <div>
      <form onSubmit= {Formik.handleSubmit}>
        <div>Email</div>
        <input> id= "emailField" type= "text" onChange= {formik.handleChange} value={formik.values.email}</input>
        {formik.errors.values ? <div id= "emailError" style={{color: "red"}}>{formik.errors.email} </div>: null}
        <div> Password</div>
        <input> id= "passwordField" type= "text" onChange= {formik.handleChange} value={formik.values.password}</input>
        {formik.errors.password ? <div id= "pswError" style={{color: "red"}}>{formik.errors.password} </div>: null}
        {formik.errors.alert ? <div id= "loginSuccessful" style={{color: "red"}}>{formik.errors.alert} </div>: null}
        <button> type= "submit" id= "submitBtn"</button>
      </form>
    </div>
  );
}

export default App;
