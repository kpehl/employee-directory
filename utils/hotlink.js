const hotlink = (req, res, next) => {
    if (
      req.headers['sec-fetch-site'] === 'cross-site'  &&
      req.headers['sec-fetch-dest'] === 'image'
    ) {
      res.status(403).send('Access Forbidden');
    } else {
      next();
    }
  };
  
  module.exports = hotlink;