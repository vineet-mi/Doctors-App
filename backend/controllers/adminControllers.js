import Admin from "../models/adminSchema.js";

const registerAdmin = async (req, res) => {
  const {
    fullName,
    email,
    phone,
    address,
    username,
    password,
  } = req.body;
  try {
    const admin = await Admin.register(
      fullName,
      email,
      phone,
      address,
      username,
      password,
    );
    // const token = createToken(user._id);

    // res.status(200).json({ message: "User created successfully" });
    res.status(200).json({ admin });
    // console.log({ admin });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const loginAdmin = async (req, res) => {
  // console.log("called");
  const { username, password } = req.body;
  try {
    const admin = await Admin.login(username, password);
    // const token = createToken(user._id);
    // Exclude the password field from the response
    console.log(admin);
    res.status(200).json({ admin });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// const getAdmin = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const admin = await Admin.login(email, password);
//     if (!admin) {
//       return res.status(404).json({ error: "Admin not found" });
//     }
//     res.status(200).json(admin);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };


export {
  registerAdmin,
  loginAdmin,
//   getAdmin,
};
