


export const dateAndTime = (format) => {
  let date = new Date();

  switch (format) {
    case "time": {
      return date.toLocaleTimeString();
    }
    case "date": {
      return date.toLocaleDateString();
    }
  }
};