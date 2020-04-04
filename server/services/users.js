import dotenv from "dotenv";
import random from "random-number";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
dotenv.config();

const Users = {
  async hashPassword(password) {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        throw err;
      }
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) throw err;
        return hash;
      });
    });
  },

  async createToken(id) {
    jwt.sign(
      id,
      process.env.SECRET,
      { algorithm: "RS256" },
      { expiresIn: "1hr" },
      (err, token) => {
        if (err) {
          throw err;
        }
        return token;
      }
    );
  },

  async generateAccountNumber() {
    const gen = random.generator({
      min: -1000,
      max: 1000,
      integer: true,
    });
    return gen(10000);
  },
};

export default Users;
