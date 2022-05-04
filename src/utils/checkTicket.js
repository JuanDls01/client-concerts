const checkTicket = (tickets) => {
  let aprobado = false;
  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  tickets.forEach((ticket) => {
    if (
      ticket.clientName.length > 5 &&
      ticket.clientMail.length > 10 &&
      regex.test(ticket.clientMail) &&
      ticket.clientId.length > 6
    )
      aprobado = true;
  });

  return aprobado;
};

export default checkTicket;
