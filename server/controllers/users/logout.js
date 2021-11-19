module.exports = (req, res) => {
    res.clearCookie('access_token');
    res.status(205).send('Logged out successfully');
  };