module.exports = app => {
    function existsOrError(value, msg){
        if(!value) throw msg 
        if(Array.isArray(value) && value.length=== 0) throw msg
        if(typeof value === 'string' && !value.trim() ) throw msg
    }

    function notExistsOrError(value, msg){
        try {
            existsOrError(value, msg)
        } catch (error) {
            return
        }
        throw msg
    }
    function equalsOrError(val01, val02, msg){
        if(!(val01 === val02)){
            throw msg
        }
    }
    return {existsOrError, notExistsOrError, equalsOrError}
}