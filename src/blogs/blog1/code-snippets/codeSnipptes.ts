export const CodeSnippet1: string = `
//app.js file

const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/database.js');
const cookieParser = require('cookie-parser');

//importing routes from route
const userRoutes = require('./routes/userRoutes.js');
const blogRoutes = require('./routes/blogRoutes.js');
const app = express();

//database connection
connectDB();

//middleware
app.use(express.json());
app.use(cookieParser());

//routes
app.use('/api/users', userRoutes);
app.use('/api/blogs', blogRoutes);

module.exports = app;`;

export const CodeSnippetIndexjs = `
//index.js file

const app = require('./app.js');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(\`Listening on port \${port}\`);
});
`;

export const CodeSnippetDatabasejs = `
//database.js file

const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};
module.exports = connectDB;`;

export const CodeSnippetUserRoute = `
//userRoutes.js file

const express = require('express');
const router = express.Router();

const {
  test,
  createUser,
  loginUser,
  updateUser,
  deleteUser,
} = require('../controller/userController.js');

const checkAuth = require('../middleware/authMiddleware.js');

// http://localhost:3000/api/users/test
router.route('/test').get(test);

// http://localhost:3000/api/users/createuser
router.route('/createuser').post(createUser);

// http://localhost:3000/api/users/login
router.route('/login').post(loginUser);

// http://localhost:3000/api/users/updateuser/:id
router.route('/updateuser/:id').put(checkAuth, updateUser);

// http://localhost:3000/api/users/deleteuser/:id
router.route('/deleteuser/:id').delete(checkAuth, deleteUser);

module.exports = router;`;

export const CodeSnippetUserController = `
//userController.js file

const User = require('../models/User.js');
const {
  hashPassword,
  createToken,
  comparePassword,
} = require('../helpers/userHelper.js');
const validator = require('validator');
const { request } = require('express');
const jwt = require('jsonwebtoken');
const Blog = require('../models/Blog.js');

//endpoint for testing
const test = (req, res) => {
  return res.status(200).json({ message: 'testing the end point' });
};

//endpoint for create user
const createUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ message: 'Please fill all the required fields' });
  }
  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: 'Please enter a valid email' });
  }
  if (!validator.isStrongPassword(password)) {
    return res.status(400).json({ message: 'Please enter a strong password' });
  }

  //encrypting the password
  const hashedPassword = await hashPassword(password);

  try {
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    return res
      .status(200)
      .json({ message: 'User saved successfully', savedUser });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

//log in user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: 'Please fill all the required fields' });
  }
  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: 'Please enter a valid email' });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User does not exist' });
    }

    //comparing the passsword
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    //creating the token
    const token = await createToken(user);
    res.cookie('jwt', token, { httponly: true, maxAge: 360000 });
    return res.status(200).json({
      message: 'User logged in successfully',
      token: token,
      username: user.username,
      email: user.email,
      blogs: user.blogs,
      profilepicture: user.profilepicture,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//updating the user
const updateUser = async (req, res) => {
  try {
    const _id = req.params.id;
    const updates = req.body;

    if (!updates || Object.keys(updates).length === 0) {
      return res.status(404).json({ message: 'Invalid update data entered' });
    }

    const user = await User.findByIdAndUpdate(_id, updates, { new: true });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res
      .status(200)
      .json({ message: 'User updated successfully', user: user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//deleting the user
const deleteUser = async (req, res) => {
  try {
    const _id = req.params.id;
    //console.log(_id);
    //decode the token from cookie
    const decodedToken = jwt.verify(req.cookies.jwt, process.env.SECRET);
    //console.log(decodedToken);

    //compare the id send with cookie and params
    if (_id !== decodedToken._id) {
      return res.status(401).json({ message: 'User not authorized' });
    }

    //when removing the users remove user blogs as well
    await Blog.deleteMany({ author: _id });
    //delete the user
    const user = await User.findByIdAndDelete(_id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    //delete the cookies
    res.clearCookie('jwt');

    return res
      .status(200)
      .json({ message: 'User deleted', username: user.username });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
module.exports = { test, createUser, loginUser, updateUser, deleteUser };`;

export const CodeSnippetAuthMiddleware = `
//authMiddleware.js file

const jwt = require('jsonwebtoken');
const User = require('../models/User.js');

const checkAuth = async (req, res, next) => {
  try {
    const cookie = req.cookies;
    if (!cookie) {
      return res.status(401).json({ message: 'User not logged in' });
    }

    const token = cookie.jwt;
    if (!token) {
      return res.status(401).json({ message: 'User not logged in' });
    }

    const decodedToken = jwt.verify(token, process.env.SECRET);
    //console.log(decodedToken);
    next();
  } catch (error) {
    return res.status(403).json({ message: error.message });
  }
};

module.exports = checkAuth;`;

export const CodeSnippetAuthHelper = `
//authHelper.js file

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
//hashing the password
const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    throw new Error(error);
  }
};

//creating the token
const createToken = async (user) => {
  const { _id, email } = user;
  try {
    const token = jwt.sign({ _id, email }, process.env.SECRET, {
      expiresIn: '1h',
    });
    return token;
  } catch (error) {
    throw new Error(error);
  }
};

//comparing the password
const comparePassword = async (password, hashpassword) => {
  try {
    const match = await bcrypt.compare(password, hashpassword);
    return match;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { hashPassword, createToken, comparePassword };`;

export const CodeSnippetUserModel = `
//User.js file

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    blogs: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Blog',
      },
    ],
    profilepicture: String,
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model('User', UserSchema);
module.exports = User;`;
