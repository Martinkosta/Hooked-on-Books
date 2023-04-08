export function createFormValidtion(name, value) {
  let error = "";

  if (name === "title") {
    if (!value) {
      error = "Title is required!";
    } else if (value.length < 4) {
      error = "Title must be at least 4 characters long!";
    }
  }

  if (name === "author") {
    if (!value) {
      error = "Author is required!";
    } else if (value.length < 2) {
      error = "Author name  must be at least 2 characters long!";
    }
  }
  if (name === "genre") {
    if (!value) {
      error = "Genre is required!";
    }
  }
  if (name === "stars") {
    if (!value) {
      error = "Stars are required!";
    } else if (Number(value) < 0 || Number(value) > 5) {
      error = "Reating can be only from 0 stars to 5 stars!";
    }
  }
  if (name === "image") {
    if (!value) {
      error = "Image is required!";
    }
  }

  if (name === "description") {
    if (!value) {
      error = "Description  is required!";
    }
  }

  return error;
}

export function onSubmitCreatFormValidation(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Title is required";
  }
  if (!values.author) {
    errors.author = "Author name is required";
  }
  if (!values.genre) {
    errors.genre = "Genre is required";
  }
  if (!values.stars) {
    errors.stars = "Reating  is required";
  }
  if (!values.image) {
    errors.image = "Image  is required";
  }
  if (!values.description) {
    errors.description = "Description is required";
  }

  return errors;
}
