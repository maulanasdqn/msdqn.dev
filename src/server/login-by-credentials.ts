import type { NextApiRequest, NextApiResponse } from "next";

const ERROR_CODE = 200;

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method == "POST") {
    res.status(ERROR_CODE).json({
      message: "OK",
      data: {
        user: {
          email: "test@user.com",
          phone: "098098908088",
          role: "USER",
        },
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjNzFlMmUyNi04ZTFjLTRiZjctODM2Mi1iZWVhNDgyYTMwNTgiLCJpYXQiOjE2ODAwNjcyOTMsImV4cCI6MTY4MDE1MzY5M30.qGRjV_aHxFj1Idk0KPvIepZanUOKZvMW7PeBP7Q9qKM",
        expires_at: "2023-03-30T05:21:33.803Z",
      },
    });
  }
}
