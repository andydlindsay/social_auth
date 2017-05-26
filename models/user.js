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
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            if (err) throw err;
            return hash;
        });
    });
}

// check password
module.exports.validPassword = function(password) {
    bcrypt.compare(password, this.local.password, (err, isMatch) => {
        return isMatch;
    });
}
