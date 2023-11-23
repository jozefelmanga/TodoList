class ResponseModel {
    constructor(success, message, data, error) {
        this.success = success;
        this.message = message;
        this.data = data;
        this.error = error;
    }
    static createSuccessResponse(message, data) {
        return new ResponseModel(true, message, data, null);
      }
    
      static createNotFoundResponse(message) {
        return new ResponseModel(false, message, null, null);
      }
    
      static createErrorResponse(message, error) {
        return new ResponseModel(false, message, null, error);
      }
}

module.exports = ResponseModel;
