import axios from "axios";

export const POST_STAGE = "POST_STAGE";

export const postStage = (payload) => {
  return async () => {
    try {
      const stage = await axios.post("/stage", payload);
      return stage;
    } catch (error) {
      console.log(error);
    }
  };
};

export default postStage;
