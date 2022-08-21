const servicesCollection = require('./services.schema');

module.exports = {
    createServices(request, response)
    {
        createServicesFn(request.body)
            .then((services) => {
                response.write(JSON.stringify(services));
                response.end();
            })
            .catch((e) => {
                console.log(e);
            });
    },

    readServices(request, response)
    {
        readServicesFn()
            .then((services) => {
                response.write(JSON.stringify(services));
                response.end();
            })
            .catch((e) => {
                console.log(e);
            });
    },
    updateServices(request, response)
    {   const id = request.params.id;
        updateServicesFn(id,request.body)
            .then((services) => {
                response.write(JSON.stringify(services));
                response.end();
            })
            .catch((e) => {
                console.log(e);
            });
    },
    deleteServices(request, response)
    {   const id = request.params.id;
        deleteServicesFn(id)
            .then(() => {
                response.write(JSON.stringify({}));
                response.end();
            })
            .catch((e) => {
                console.log(e);
            });
    },
}

async function createServicesFn(servicesProps){
    return new servicesCollection(servicesProps).save();
}

async function readServicesFn(){
    return servicesCollection.find();
}

async function updateServicesFn(id , servicesProps){
    return servicesCollection.findByIdAndUpdate(id , servicesProps , {new:true});
}

async function deleteServicesFn(id){
    return servicesCollection.findByIdAndDelete(id);
}