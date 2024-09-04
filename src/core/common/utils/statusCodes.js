const statusCodes = {
  INVALID_REQUEST: {
    code: 'INVALID_REQUEST',
    param: null,
    status: false,
    message: 'Invalid request',
    status_code: 400
  },
  UNAUTHORIZED: {
    code: 'UNAUTHORIZED',
    param: null,
    status: false,
    message: 'Unauthorized',
    status_code: 401
  },
  FORBIDDEN: {
    code: 'FORBIDDEN',
    param: null,
    status: false,
    message: 'Forbidden',
    status_code: 403
  },
  NOT_FOUND: {
    code: 'NOT_FOUND',
    param: null,
    status: false,
    message: 'Resource not found',
    status_code: 404
  },
  METHOD_NOT_ALLOWED: {
    code: 'METHOD_NOT_ALLOWED',
    param: null,
    status: false,
    message: 'Method not allowed',
    status_code: 405
  },
  CONFLICT: {
    code: 'CONFLICT',
    param: null,
    status: false,
    message: 'Conflict',
    status_code: 409
  },
  UNPROCESSABLE_ENTITY: {
    code: 'UNPROCESSABLE_ENTITY',
    param: null,
    status: false,
    message: 'Unprocessable entity',
    status_code: 422
  },
  SERVER_ERROR: {
    code: 'SERVER_ERROR',
    param: null,
    status: false,
    message: 'Internal server error',
    status_code: 500
  },
  NOT_IMPLEMENTED: {
    code: 'NOT_IMPLEMENTED',
    param: null,
    status: false,
    message: 'Not implemented',
    status_code: 501
  },
  BAD_GATEWAY: {
    code: 'BAD_GATEWAY',
    param: null,
    status: false,
    message: 'Bad gateway',
    status_code: 502
  },
  SERVICE_UNAVAILABLE: {
    code: 'SERVICE_UNAVAILABLE',
    param: null,
    status: false,
    message: 'Service unavailable',
    status_code: 503
  },
  GATEWAY_TIMEOUT: {
    code: 'GATEWAY_TIMEOUT',
    param: null,
    status: false,
    message: 'Gateway timeout',
    status_code: 504
  },
  CREATED: {
    code: 'CREATED',
    param: null,
    status: true,
    message: 'Resource created successfully',
    status_code: 201
  },
  SUCCESS: {
    code: 'SUCCESS',
    param: null,
    status: true,
    message: 'Request was successful',
    status_code: 200
  }
};

export default statusCodes;
