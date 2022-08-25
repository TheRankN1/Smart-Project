const usersCollection = require("./user.schema");
const {StatusCodes} = require("http-status-codes");

module.exports = {

    getUsers(request , response){
        getUsersFn()
            .then(users => {
            response.write(JSON.stringify(users));
            response.end();
        })

        .catch(error => response.status(StatusCodes.BAD_REQUEST).send({message: error.message}));
        },

    deleteUsers(request , response){
        const id = request.params.id
        deleteUsersFn(id)
            .then(()=> {
                response.write(JSON.stringify({}));
                response.end();
            })

            .catch(error => response.status(StatusCodes.BAD_REQUEST).send({message: error.message}));
    },
    getUserById(request , response){
        const id = request.params.id
       getUserByIdFn(id)
            .then((user)=> {
                response.write(JSON.stringify(user));
                response.end();
            })

            .catch(error => response.status(StatusCodes.BAD_REQUEST).send({message: error.message}));
    },
     }
async function getUsersFn(){
    return usersCollection.find();
}
async function deleteUsersFn(id){
    return usersCollection.findByIdAndDelete(id);
}
async function getUserByIdFn(id){
    return usersCollection.findById(id);
}

