class ApiResponse {
    constructor(data, is_err = false, message=null) {
        this.data = data;
        this.is_err = is_err;
        this.message = message;
    }
}

exports.ApiResponse = ApiResponse;