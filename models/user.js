const mongoose = require('mongoose'),
      bcrypt = require('bcryptjs');

// User schema
const userSchema = mongoose.Schema({

    local: {
        email: {
            type: String
        },
        password: {
            type: String
        }
    },
    facebook: {
        id: {
            type: String
        },
        token: {
            type: String
        },
        email: {
            type: String
        },
        name: {
            type: String
        }
    },
    twitter: {
        id: {
            type: String
        },
        token: {
            type: String
        },
        displayName: {
            type: String
        },
        username: {
            type: String
        }
    },
    google: {
        id: {
            type: String
        },
        token: {
            type: String
        },
        email: {
            type: String
        },
        name: {
            type: String
        }
    }

});

// export User
const User = module.exports = mongoose.model("User", userSchema, "users");

// User methods
// generate hash
module.exports.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
}

// check password
module.exports.validPassword = function(password, comparePassword) {
    return bcrypt.compareSync(password, comparePassword);
}
