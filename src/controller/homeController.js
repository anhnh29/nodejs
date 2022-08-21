import pool from '../configs/connectDB';
let getHomePage = async (req, res) => {
  //phan biet các route để render
  const [rows, fields] = await pool.execute('SELECT * FROM `users`');
  return res.render('index.ejs', { users: rows });
};

let getDetailPage = async (req, res) => {
  const { userId } = req.params;
  const [rows, fields] = await pool.execute(
    `select * from users where id = ?`,
    [userId]
  );
  res.render('detail', { userDetail: rows });
};

module.exports = {
  getHomePage,
  getDetailPage,
};
