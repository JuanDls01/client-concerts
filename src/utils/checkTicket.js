const checkTicket = (tickets) => {
  let aprobado = false;
  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  /*tickets.forEach((ticket) => {
    if (
      ticket.clientName.length > 5 &&
      ticket.clientMail.length > 10 &&
      regex.test(ticket.clientMail) &&
      ticket.clientId.length > 6
    )
      aprobado = true;
  });*/
  for (let i = 0; i < tickets.length; i++) {
    if (
      tickets[i].clientName.length > 5 &&
      tickets[i].clientMail.length > 10 &&
      regex.test(tickets[i].clientMail) &&
      tickets[i].clientId.length > 6
    ) {
      aprobado = true;
    } else {
      aprobado = false;
      break;
    }
  }

  return aprobado;
};

export default checkTicket;
