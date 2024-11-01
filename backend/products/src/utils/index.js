import jwt from "jsonwebtoken";

const ValidateSignature = async (req) => {
  try {
    const token = req.cookies.session;
    if (!token) {
      return false;
    }

    const payload = await jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    return true;
  } catch (error) {
    return false;
  }
};

export { ValidateSignature };
