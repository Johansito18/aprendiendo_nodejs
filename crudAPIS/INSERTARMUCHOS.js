var axios = require('axios'); //Instalar libreria axios, la variable es cualquiera
var data = JSON.stringify({   //Convertir string a json
    "collection": "Aprendices",
    "database": "FakeStore",
    "dataSource": "ClusterADSI2364481",
    "documents":[ // es el parametro del que quiero traer la informacion
    
        { "cedula": 123456789, "nombre": "felipe","edad":30 },
        { "cedula": 123456789, "text": "mariana", "edad":30}
    ]
  
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-gowxd/endpoint/data/v1/action/insertMany', //url de la api
    headers: {
      'Content-Type': 'application/json',   //
      'Access-Control-Request-Headers': '*', //permisos 
      'api-key': 'ze4OSQDWCWcxA1DScQQfMJKU1TyTcWMVaUWdMBH4wxXh23IfukrVOaT6SeEKwjS8',
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });


    