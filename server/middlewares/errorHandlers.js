//дефолтний обробник

module.exports.errorHandlers = (err, req, res, next) => {
    console.error('ERROR:', err);
  if (res.headersSent) {
    return;
  }

  const status = err.status ?? 500;
  const message = err.message ?? 'Server Error';

  res.status(status).send({ errors: [{ status, title: message }] });
};