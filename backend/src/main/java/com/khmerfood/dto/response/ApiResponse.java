package com.khmerfood.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class ApiResponse<T> {

    private boolean success;
    private T data;
    private PaginationDto pagination;
    private ErrorDetails error;

    public ApiResponse() {}

    public static <T> ApiResponse<T> ok(T data) {
        ApiResponse<T> resp = new ApiResponse<>();
        resp.success = true;
        resp.data = data;
        return resp;
    }

    public static <T> ApiResponse<T> ok(T data, PaginationDto pagination) {
        ApiResponse<T> resp = new ApiResponse<>();
        resp.success = true;
        resp.data = data;
        resp.pagination = pagination;
        return resp;
    }

    public static <T> ApiResponse<T> error(String code, String message) {
        ApiResponse<T> resp = new ApiResponse<>();
        resp.success = false;
        resp.error = new ErrorDetails(code, message);
        return resp;
    }

    public boolean isSuccess() { return success; }
    public void setSuccess(boolean success) { this.success = success; }

    public T getData() { return data; }
    public void setData(T data) { this.data = data; }

    public PaginationDto getPagination() { return pagination; }
    public void setPagination(PaginationDto pagination) { this.pagination = pagination; }

    public ErrorDetails getError() { return error; }
    public void setError(ErrorDetails error) { this.error = error; }

    public static class ErrorDetails {
        private String code;
        private String message;

        public ErrorDetails() {}
        public ErrorDetails(String code, String message) {
            this.code = code;
            this.message = message;
        }

        public String getCode() { return code; }
        public void setCode(String code) { this.code = code; }

        public String getMessage() { return message; }
        public void setMessage(String message) { this.message = message; }
    }
}
