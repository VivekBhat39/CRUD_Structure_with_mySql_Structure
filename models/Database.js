var mysql = require("mysql");

class Database {
    constructor() {
        // connection to node and mysql
        this.con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "igapdb"
        })
    }
    query = (sql, args) => {
        return new Promise((resolve, reject) => {
            this.con.query(sql, args, (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            });
        });
    }

    close = () => {
        return new Promise((resolve, reject) => {
            this.con.end((err) => {
                if (err) {
                    return reject(false)
                }
                return resolve(true)
            });
        });
    }

}

module.exports = {
    Database: Database
}