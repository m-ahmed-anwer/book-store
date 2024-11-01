export const errorHandler = (err, req, res, next) => {
  let errors = [];

  if (err instanceof Error && err.errors) {
    errors = err.errors.map((error) => ({
      message: error.msg,
      field: error.param,
    }));
    return res.status(400).send({ errors });
  }

  errors.push({ message: err.message || "Something went wrong" });

  const statusCode = err.status || 500;

  res.status(statusCode).send({ errors });
};
