import { ValidateSignature } from "../utils/index.js";

const UserAuth = async (req, res, next) => {
  const isAuthorized = await ValidateSignature(req);

  if (isAuthorized) {
    return next();
  }

  return res.status(403).json({ message: "Not Authorized" });
};

export { UserAuth };
