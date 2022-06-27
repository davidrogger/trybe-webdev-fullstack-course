const status = {
  HTTP_OK: 200,
  HTTP_CREATED: 201,
  HTTP_BAD_REQUEST: 400,
  HTTP_NOT_FOUND: 404,
  INTERNAL_ERROR: 500,
};

const message = {
  updatedSucess: 'sucessfully updated',
  removedSucess: 'sucessfully removed',
}

module.exports = {
  status,
  message,
}