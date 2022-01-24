// middleware for authentication

// used w/ web tokens - npm i jsonwebtoken

/*
const jwt = require("jsonwebtoken");
const { UnauthorizedError } = require("../errors");

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  // if token not present
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthorizedError("No token provided");
  }
  // fetching token from headers
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (error) {
    throw new UnauthorizedError("Not authorized to access this route");
  }
};

module.exports = authenticationMiddleware;

*/
