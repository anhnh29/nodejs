let getHomePage = (req, res) => {
  //logic get data from DB
  return res.render('index.ejs');
};

module.exports = {
  getHomePage,
};
