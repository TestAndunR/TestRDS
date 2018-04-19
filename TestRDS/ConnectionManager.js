module.exports=function(){

    this.dbConnections = [];

    this.dbConnections["TestRDS"] = {
            host: process.env.EndPoint_rdsTestRDS,
            port: process.env.Port_rdsTestRDS,
            user: process.env.User_rdsTestRDS,
            password: process.env.Password_rdsTestRDS,
            database: "rds",
        };
    };