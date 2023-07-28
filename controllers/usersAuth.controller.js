import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../model/User.js";

export const signupUser = async (req, res) => {
  const { id,username, password,department,designation,type,company_name } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user in the database
    const user = await User.create({
      id: id,
      username: username,
      password: hashedPassword,
      department: department,
      designation: designation,
      type: type
    });
    res.status(201).json({ message: 'User created successfully' });
    if ( type === employee ) {
    
    }else if (type === client) {

    }
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
//   const { employees_id,username, password,department,designation,type } = req.body;

//   try {
//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create the user in the database
//     if ( type === employee ) {
    
//       const user = await User.create({
//         employees_id: employees_id,
//         username: username,
//         password: hashedPassword,
//         department: department,
//         designation: designation,
//         type: type
//       });
//       res.status(201).json({ message: 'User created successfully' });
//     }else if (type === client) {
      
//     }
//   } catch (error) {
//     console.error('Error creating user:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };
export const loginUser = async (req, res) => {
  const { employees_id, password } = req.body;

  try {
    // Retrieve the user from the database
    const user = await User.findOne({ where: { username: username } });

    if (!user) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    // Create a JWT token
    const token = jwt.sign({ username: user.username }, process.env.SECRET_KEY, {
      expiresIn: '1h' // Token will expire in 1 hour
    });

    res.status(200).json({ token: token });
  } catch (error) {
    console.error('Error retrieving user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
