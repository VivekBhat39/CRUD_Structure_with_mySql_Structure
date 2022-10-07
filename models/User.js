let Database = require("./Database");

class User {
    constructor() {
        this.query = "";
        this.id = 0;
        this.name = "";
        this.email = "";
        this.db = new Database.Database();
    }
    save = () => {
        if (this.id == 0) {
            this.query = "INSERT INTO users (name,email) VALUES ('" + this.name + "', '" + this.email + "')";
        }
        else {
            this.query = "UPDATE users SET name='" + this.name + "', email='" + this.email + "' WHERE id = " + this.id;
        }
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                this.db.close();
                if (err) {
                    return reject(err);
                }
                return resolve(result)
            });
        })
    }


    delete = () => {
        this.query = "DELETE FROM users WHERE id = " + this.id;
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                this.db.close();
                if (err) {
                    return reject(err);
                }
                return resolve(result)
            });
        });
    };

    list = () => {
        this.query = "SELECT * FROM users ORDER BY name";
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                this.db.close();
                if (err) {
                    return reject(err);
                }
                return resolve(result)
            });
        });
    };

    get = () => {
        this.query = "SELECT * FROM users WHERE id =" + this.id;
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                this.db.close();
                if (err) {
                    return reject(err);
                }
                return resolve(result)
            });
        });
    };
};



module.exports = {
    User: User
}