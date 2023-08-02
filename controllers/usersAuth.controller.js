import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {Users} from "../model/users.model.js";

export const signupUser = async (req, res) => {
  const { user_id,name,password,department,designation,type,company_name } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user in the database
    if ( type === 'employee' ) {
      if (!user_id||!name||!password||!department||!designation||!type) {
        res.status(500).json({error:'required field information not found'})
      }else{
        const user = await Users.create({
          user_id: user_id,
          name: name,
          password: hashedPassword,
          department: department,
          designation: designation,
          type: type
        });
        res.status(201).json({ message: type+' created successfully' });

      }
    
    }else if (type === 'client') {
      if (!user_id||!name||!password||!department||!designation||!type||!company_name) {
        res.status(500).json({error:'required field information not found'})
      }else{
        const user = await Users.create({
          user_id: user_id,
          name: name,
          password: hashedPassword,
          department: department,
          designation: designation,
          type: type,
          company_name: company_name
        });
        res.status(201).json({ message: 'client created successfully' });

      }
    }
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
//   const { employees_id,name, password,department,designation,type } = req.body;

//   try {
//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create the user in the database
//     if ( type === employee ) {
    
//       const user = await User.create({
//         employees_id: employees_id,
//         name: name,
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
  const { employee_id, password } = req.body;

  try {
    // Retrieve the user from the database
    const user = await Users.findOne({ where: { employee_id: employee_id } });

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
    const token = jwt.sign({ name: user.name }, process.env.SECRET_KEY, {
      expiresIn: '1h' // Token will expire in 1 hour
    });

    res.status(200).json({ 
      token: token,
      user: user
    });
  } catch (error) {
    console.error('Error retrieving user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
