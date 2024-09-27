import bcrypt from "bcrypt";
import User, { IUser } from "../models/user";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const signup = async (req: Request, res: Response) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 12);
  const user: IUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: hashedPassword,
  });

  await user.save();
  res.status(201).send('User created successfully');
}

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  // Validate user input
  if (!(email && password)) {
    res.status(400).send("All input is required");
    return;
  }

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    // Create token
    const token: string = jwt.sign(
      { user_id: user.id, email },
      process.env.TOKEN_KEY!,
      {
        expiresIn: "2h",
      }
    );

    // Return user and token
    res.status(200).json({firstname: user.firstname, lastname: user.lastname, token});
  } else {
    res.status(400).send("Invalid Credentials");
  }
};