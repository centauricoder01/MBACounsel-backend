
import jwt from "jsonwebtoken";

// Middleware to check if user is an admin
const verifyAdminMiddleware = (req, res, next) => {
  try {
    // Access the token from cookies
    const token = req.cookies.authToken;

    // If no token is found, deny access
    if (!token) {
      return res
        .status(401)
        .json({ message: "Access Denied. No token provided." });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Replace with your JWT secret

    // Check if the token has expired (JWT handles this automatically and throws an error if expired)

    // Check if the user is an admin
    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Access Denied. Admins only." });
    }

    // Attach user information to req for later use in routes
    req.user = decoded;

    // Allow access
    next();
  } catch (error) {
    // Token is invalid or expired
    return res
      .status(401)
      .json({ message: "Invalid or expired token. Please log in again." });
  }
};

export default verifyAdminMiddleware;
