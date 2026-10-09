class ApiError extends Error{
    constructor(
        statuscode,
        massage= "Something went wrong",
        errors = [],
        statck = ""

    ){
        super(massage)
        this.statuscode = statuscode
        this.data = null
        this.massage = massage
        this.success = false;
        this.errors = errors

        if(statck){
            this.stack = statck
        } else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}


export {ApiError}