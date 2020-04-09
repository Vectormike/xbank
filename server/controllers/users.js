// Model
import { User } from "../models/users";

// Services
import Users from "../services/users";
import Status from "../services/statusFunc";

class UserControllers {
  /**
   * Create user
   *
   */
  static async createUser(req, res) {
    try {
      const {
        first_name,
        last_name,
        email,
        password,
        address,
        dateOfBirth,
      } = req.body;
      if (
        !first_name ||
        !last_name ||
        !email ||
        !password ||
        !address ||
        !dob
      ) {
        Status.statusHelper(req, res, 401, "Please, input all fields", data);
      }
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        Status.statusHelper(
          req,
          res,
          401,
          "Sorry, this user is already with us.",
          data
        );
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

      // Hash Password
      const hash = await Users.hashPassword(newUser.password);
      newUser.password = hash;
      newUser.save();
      if (newUser) {
        const token = await Users.createToken(newUser.id);
        newUser.token = token;
        Status.statusHelper(req, res, 201, "Welcome to Xbank.", newUser);
      }
    } catch (error) {
      Status.statusHelper(req, res, 500, error.message, "Error occured");
    }
  }

  /**
   * Login user
   */
  static async loginUser(req, res) {
    try {
      const { email, password } = req.body;
      const userExists = await User.findOne({ email });

      if (!userExists) {
        Status.statusHelper(req, res, 401, `You haven't joined our cult`, data);
      }
      const passwordMatch = await Users.confirmPassword(
        password,
        userExists.password
      );
      if (passwordMatch === false) {
        Status.statusHelper(
          req,
          res,
          401,
          "Incorrect credentials, human",
          data
        );
      }
      const token = await Users.createToken(userExists.id);
      userExists.token = token;
      if (token) {
        Status.statusHelper(
          req,
          res,
          401,
          "Welcome back to Xbank.",
          userExists
        );
      }
    } catch (error) {
      Status.statusHelper(req, res, 500, error.message, data);
    }
  }
}

export default UserControllers;
