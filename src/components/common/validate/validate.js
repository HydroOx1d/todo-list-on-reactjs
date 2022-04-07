export const emailValidation = () => {
  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  return (value) => {
    return regex.test(value) ? undefined : "Invalid Email";
  };
};

export const required = (value) => value ? undefined : "Required Field"

export const minValue = (min) => {
  return (value) => {
    if (value === undefined) {
      return "Min value " + min;
    }
    if (value.length == 0) {
      return `Min value ` + min;
    } else if (value.length < min) {
      return `Min value ` + min;
    } else {
      return undefined;
    }
  };
};
