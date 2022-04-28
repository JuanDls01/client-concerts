import axios from "axios";

export const GET_TICKETS = "GET_TICKETS";

const getTickets = (data) => {
    // console.log(data);
    // console.log(Events[0].Stage.name );
    // console.log(Events[0].Stage.address );
    // setTimeout(()=>callback(),5000)
  return async (dispatch) => {
    const stages = await axios.get("/stage");
   
      return dispatch({
        type: GET_TICKETS,
        payload: {...data,...stages}
      });
    
  };
};

export default getTickets;