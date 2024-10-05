const jwt = require("jsonwebtoken");

const checkAuth = async (req, res, next) => {
  const authHeader = req?.headers?.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer"))
    return res.status(401).json({
      message: "No authorization headers were provided",
      success: false,
    });
  const token = authHeader.split(" ")[1];
  try {
    const verifyToken = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = { id: verifyToken.id };
    next();
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message, success: false });
  }
};

module.exports = checkAuth;
