const checkInput = (input, value) => {
  switch (input) {
    case "name":
      if (value.length < 5) return false;
      return true;

    case "description":
      if (value.length < 20) return false;
      return true;

    case "artistId":
      if (!value) return false;
      return true;

    case "stageId":
      if (!value) return false;
      return true;

    case "date":
      if (!value) return false;
      return true;

    case "time":
      if (!value) return false;
      return true;

    case "img":
      if (!value) return false;
      return true;

    case "cat1name":
      if (!value) return false;
      return true;

    case "cat1price":
      if (!value) return false;
      return true;

    case "cat1stock":
      if (!value) return false;
      return true;

    default:
      break;
  }
};

export default checkInput;
