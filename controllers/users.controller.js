import {Users} from "../model/users.model.js";


export const getUsers = async (req, res) => {
    try {
      const Datas = await Users.findAll();
  
      return res.status(200).json({
        success: true,
        message: 'successfully',
        data: Datas,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
};
// Correct getUsersById
export const getUsersById = async (req, res) => {
  const { id } = req.params; // Assuming the employee_id is passed in the URL parameters
  try {
      const Datas = await Users.findOne({ where: { employee_id: id } });

      if (!Datas) {
          return res.status(404).json({
              success: false,
              message: 'Employee not found',
              data: null,
          });
      }

      return res.status(200).json({
          success: true,
          message: 'Successfully fetched employee data',
          data: Datas,
      });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
  }
};
// export const addUsers = async (req, res) => {
//     const { employee_id, name, designation, img } = req.body;
//     try {
//       const newDatas = await Users.create({ employee_id: employee_id, name: name, designation: designation, img: img });
//       res.status(201).json({
//         newDatas
//       });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Server Error' });
//     }
// };
// Update Users
export const updateUsers = async (req, res) => {
  const { employee_id, name, designation, img } = req.body;
  try {
      const existingData = await Users.findOne({ where: { employee_id } });

      if (!existingData) {
          return res.status(404).json({
              success: false,
              message: 'Employee not found',
              data: null,
          });
      }

      const updatedData = await Users.update(
          { name, designation, img },
          { where: { employee_id } }
      );

      res.status(200).json({
          success: true,
          message: 'Successfully updated employee data',
          data: updatedData,
      });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
  }
};
//delete Users
export const deleteUsers = async (req, res) => {
  const { id } = req.params; // Assuming the employee_id is passed in the URL parameters
  try {
    const existingData = await Users.findOne({ where: { employee_id: id } });

    if (!existingData) {
      return res.status(404).json({
        success: false,
        message: 'Employee not found',
        data: null,
      });
    }

    await Users.destroy({ where: { employee_id: id } });

    return res.status(200).json({
      success: true,
      message: 'Employee data deleted successfully',
      data: existingData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
export const getAllClients = async (req, res) => {
  try {
    const Datas = await Users.findAll({where:{type:'client'}});

    return res.status(200).json({
      success: true,
      message: 'successfully',
      data: Datas,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
export const getAllEmployees = async (req, res) => {
  try {
    const Datas = await Users.findAll({where:{type:'employee'}});

    return res.status(200).json({
      success: true,
      message: 'successfully',
      data: Datas,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
export const getAllAdmins = async (req, res) => {
  try {
    const Datas = await Users.findAll({where:{type:'admin'}});

    return res.status(200).json({
      success: true,
      message: 'successfully',
      data: Datas,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
export const getClientById = async (req, res) => {
  const { client_id } = req.params; // Assuming the employee_id is passed in the URL parameters
  try {
      const Datas = await Users.findOne({ where: { id: client_id, type: 'client'} });

      if (!Datas) {
          return res.status(404).json({
              success: false,
              message: 'client not found',
              data: null,
          });
      }

      return res.status(200).json({
          success: true,
          message: 'Successfully fetched client data',
          data: Datas,
      });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
  }
};
export const getEmployeeById = async (req, res) => {
  const { employee_id } = req.params; // Assuming the employee_id is passed in the URL parameters
  try {
      const Datas = await Users.findOne({ where: { id: employee_id, type: 'employee'} });

      if (!Datas) {
          return res.status(404).json({
              success: false,
              message: 'employee not found',
              data: null,
          });
      }

      return res.status(200).json({
          success: true,
          message: 'Successfully fetched employee data',
          data: Datas,
      });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
  }
};
export const getAdminById = async (req, res) => {
  const { admin_id } = req.params; // Assuming the employee_id is passed in the URL parameters
  try {
      const Datas = await Users.findOne({ where: { id: admin_id, type: 'admin'} });

      if (!Datas) {
          return res.status(404).json({
              success: false,
              message: 'admin not found',
              data: null,
          });
      }

      return res.status(200).json({
          success: true,
          message: 'Successfully fetched admin data',
          data: Datas,
      });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
  }
};
export const addUsers = async (req, res) => {
  const { employee_id, name, designation, img } = req.body;
  try {
    const newDatas = await Users.create({ employee_id: employee_id, name: name, designation: designation, img: img });
    res.status(201).json({
      newDatas
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};