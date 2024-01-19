const User=require("../../models/user");
const bcrypt=require("bcryptjs");

const postRegister=async(req,res)=>{
    try {
        const { username, mail, password } = req.body;

        // check if user exists
        const userExists=await User.exists({ mail: mail.toLowerCase() })

        if(userExists) {
            return res.status(409).send("E-mail already in use.");
        }

        // encrypt password
        const encryptPassword=await bcrypt.hash(password,10)


        // create user document and save in database
        const user=await User.create({
            username,
            mail: mail.toLowerCase(),
            password: encryptPassword
        });

        // create JWT token
        const token = jwt.sign(
            {
              userId: user._id,
              mail,
            },
            process.env.TOKEN_KEY,
            {
              expiresIn: "24h",
            }
          );

        res.status(201).json({
            userDetails: {
                mail: user.mail,
                token: token,
                username: user.username,
            }
        })

    } catch(err) {
      return res.status(500).send("Error occured. Please try again");
    }
};
module.exports=postRegister;