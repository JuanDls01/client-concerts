const finalCheck = (form, checkbox, capacity) => {
  const { name, description, artistId, stageId, date, time, img, stock } = form;
  const {
    cat1name,
    cat1price,
    cat1stock,
    cat2name,
    cat2price,
    cat2stock,
    cat3name,
    cat3price,
    cat3stock,
  } = stock;
  const { category2, category3 } = checkbox;
  let error = [];

  if (!name || name.length < 5)
    error.push("Invalid name: must enter a name with at least 5 characters");

  if (!description || description.length < 15)
    error.push(
      "Invalid description: must enter a description with at least 15 characters"
    );

  if (!artistId) error.push("Must select an artist");
  if (!stageId) error.push("Must select a stage");
  if (!date) error.push("Must select a date");
  if (!time) error.push("Must select the event time");
  if (!img) error.push("Must select an event poster");

  if (!cat1name || !cat1price || !cat1stock)
    error.push("The ticket 'Category 1' data must be completed");

  if (category2) {
    if (!cat2name || !cat2price || !cat2stock)
      error.push("Ticket 'Category 2' is selected but data is missing ");
  }

  if (category3) {
    if (!cat3name || !cat3price || !cat3stock)
      error.push("Ticket 'Category 3' is selected but data is missing ");
  }

  return error;
};

export default finalCheck;
