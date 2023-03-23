export const success = function ({ result = {}, code = 200, message = "" }) {
  return res.json({
    result,
    code,
    message,
  });
};

/**
 * Custom error response
 */
export const error = function ({
  errors = {},
  code = 400,
  message = "",
  result = {},
}) {
  return res.json({
    errors,
    code,
    message,
    result,
  });
};

/**
 * (status 403)
 * Bad request response
 */
export const badreq = function ({
  errors = {},
  code = 400,
  message = "",
  result = {},
}) {
  return res.status(400).error({ errors, code, message, result });
};

/**
 * (status 403)
 * Forbidden request response
 */
export const forbidden = function ({
  errors = {},
  code = 403,
  message = "",
  result = {},
}) {
  return res.status(403).error({ errors, code, message, result });
};

/**
 * (status 401)
 * Unauthorize request response
 */
export const unauth = function ({
  errors = {},
  code = 401,
  message = "",
  result = {},
}) {
  return res.status(403).error({ errors, code, message, result });
};

/**
 * (status 500)
 * Internal request response
 */
export const internal = function ({
  errors = {},
  code = 500,
  message = "",
  result = {},
}) {
  return res.status(500).error({ errors, code, message, result });
};
