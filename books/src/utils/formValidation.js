const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;

export function validate(name, value, pass) {
  let error = "";

  if (name === "username") {
    if (!value) {
      error = "Username is required!";
    } else if (value.length < 2) {
      error = "Username must be at least 2 characters long!";
    }
  }

  if (name === "email") {
    if (!value) {
      error = "Email is required!";
    } else if (!regex.test(value)) {
      error = "Not a valid email address!";
    }
  }

  if (name === "password") {
    if (!value) {
      error = "Password is required!";
    }else if(value.length<3){
      error="Password must be at least 3 symbols long!";
    }
  }

  if (name === "repass") {
    if (value !== pass || !value) {
      error = "Passwords don't match!";
    }
  }

  return error;
}

export function onSubmitValidation(values) {
  const errors = {};

  if (!values.username) {
    errors.username = "Username is required!";
  } else if (values.username.length < 2) {
    errors.username = "Username must be at least 2 characters long!";
  }

  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!regex.test(values.email)) {
    errors.email = "Not a valid email address!";
  }

  if (!values.password) {
    errors.password = "Password is required!";
  } else if (values.password.length < 3) {
    errors.password = "Password must be at least 3 symbols long!";
  }

  if (!values.repass || values.repass !==values.password) {
    errors.repass = "Passwords don't match!";
  } 

  return errors;
}

export function validateFormSubmition(errors){
      let isValid=true;

      for (const error in errors) {
           if(errors[error]!==''){
            isValid=false;
            return isValid;
           }
      }

      return isValid;
}

export function validateLogin(name,value){
  let error=''

  if (name === "email") {
    if (!value) {
      error = "Email is required!";
    } else if (!regex.test(value)) {
      error = "Not a valid email address!";
    }
  }

  if (name === "password") {
    if (!value) {
      error = "Password is required!";
    }
  }


  return error;
}

export function onSubmitLoginValidation(values){
  const errors={}

  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!regex.test(values.email)) {
    errors.email = "Not a valid email address!";
  }

  if (!values.password) {
    errors.password = "Password is required!";
  }

  return errors;
}
