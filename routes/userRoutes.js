import express from 'express';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const router = express.Router();
import config from '../config/config.js';


// Create a new user
router.post('/', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      role: req.body.role
    });
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single user by ID
router.get('/:id', getUser, (req, res) => {
  res.json(res.user);
});

// Update a user by ID
router.patch('/:id', getUser, async (req, res) => {
  if (req.body.name != null) {
    res.user.name = req.body.name;
  }
  if (req.body.email != null) {
    res.user.email = req.body.email;
  }
  // Do not update password directly, implement a password update functionality with proper security checks
  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a user by ID
router.delete('/:id', getUser, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: 'Deleted User' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

async function getUser(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: 'Cannot find user' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.user = user;
  next();
}

// Login user
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if the user with the provided email exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // If the email and password are valid, generate a JWT token
    const token = jwt.sign({ userId: user._id }, config.jwtSecret, {
      expiresIn: '1h' // Token expires in 1 hour
    });

    // Send the token back to the client
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;




// import express from 'express';
// import User from '../models/User.js';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';

// const router = express.Router();

// // Create a new user
// router.post('/', async (req, res) => {
//   try {
//     const hashedPassword = await bcrypt.hash(req.body.password, 10);
//     const user = new User({
//       name: req.body.name,
//       email: req.body.email,
//       password: hashedPassword,
//       role: req.body.role
//     });
//     const newUser = await user.save();
//     res.status(201).json(newUser);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Get all users
// router.get('/', async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Get a single user by ID
// router.get('/:id', getUser, (req, res) => {
//   res.json(res.user);
// });

// // Update a user by ID
// router.patch('/:id', getUser, async (req, res) => {
//   if (req.body.name != null) {
//     res.user.name = req.body.name;
//   }
//   if (req.body.email != null) {
//     res.user.email = req.body.email;
//   }
//   // Do not update password directly, implement a password update functionality with proper security checks
//   try {
//     const updatedUser = await res.user.save();
//     res.json(updatedUser);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Delete a user by ID
// router.delete('/:id', getUser, async (req, res) => {
//   try {
//     await res.user.remove();
//     res.json({ message: 'Deleted User' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// async function getUser(req, res, next) {
//   let user;
//   try {
//     user = await User.findById(req.params.id);
//     if (user == null) {
//       return res.status(404).json({ message: 'Cannot find user' });
//     }
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }

//   res.user = user;
//   next();
// }

// // Login user
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     // Check if the user with the provided email exists
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(401).json({ message: 'Invalid email or password' });
//     }

//     // Compare the provided password with the hashed password in the database
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ message: 'Invalid email or password' });
//     }

//     // If the email and password are valid, generate a JWT token
//     const token = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET, {
//       expiresIn: '1h' // Token expires in 1 hour
//     });

//     // Send the token back to the client
//     res.json({ token });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// export default router;
