import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const useApiReq = (url, state, setState) => {
  const token = useSelector((state) => state.token);

  useEffect(() => {
    grabUserHandler();
    return () => {
      setState({});
    };
  }, []);

  useEffect(() => {
    grabUserHandler();
  }, [token]);

  const grabUserHandler = async () => {
    if (Object.keys(state).length === 0 && token !== "") {
      try {
        const response = await axios.get("/users/roles", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setState(response.data);
      } catch (error) {
        setState({ error: error.response.data.message });
      }
    }
  };
};
export default useApiReq;
