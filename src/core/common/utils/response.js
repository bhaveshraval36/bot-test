
/**
 * Sends a consistent response structure
 * @param {Response} res - The response object
 * @param {Object} statusCode - The status code object
 * @param {Object} data - The data to be sent in the response
 */
const sendResponse = (res, statusCode, data) => {
  res.status(statusCode.status_code).json({
    code: statusCode.code,
    param: statusCode.param,
    status: statusCode.status,
    message: statusCode.message,
    data
  });
};

export default sendResponse;
