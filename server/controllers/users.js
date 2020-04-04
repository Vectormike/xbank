// Model
import { User } from "../models/usersModel";

import Users from "../services/users";

class UserControllers {
  /**
   * Create user
   *
   */
  static async createUser(req, res) {
    try {
      const { first_name, last_name, email, password, address, dob } = req.body;
      if (
        !first_name ||
        !last_name ||
        !email ||
        !password ||
        !address ||
        !dob
      ) {
        res.status(400).json({
          message: "Please, input all fields",
        });
        return;
      }
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        res.status(400).json({
          message: "Sorry, this user is already with us.",
        });
        return;
      }
      const newUser = new User({
        first_name,
        last_name,
        email,
        password,
        address,
        dateOfBirth,
      });

      // Account Number
      const number = await Users.generateAccountNumber();
      newUser.accountNumber = number;

      // Hashh Password
      const hash = await Users.hashPassword(newUser.password);
      newUser.password = hash;
      newUser.save();
      if (newUser) {
        const token = await Users.createToken(newUser.id);
        res.status(200).json({
          token,
          user: {
            id: newUser.id,
            name: newUser.email,
            accountNumber: newUser.accountNumber,
          },
          message: "Welcome to XBank",
        });
      }
    } catch (error) {
      res.status(500).json({
        error: error.message,
        message: "Error occured",
      });
    }
  }
}

export default UserControllers;
