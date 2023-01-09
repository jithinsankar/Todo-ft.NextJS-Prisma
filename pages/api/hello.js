// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { authOptions } from '../api/auth/[...nextauth]'
import { unstable_getServerSession } from "next-auth/next"

export default async function handler(req, res) {

  const session = await unstable_getServerSession(req, res, authOptions)

  if (!session) {
    res.status(401).json({ message: "You must be logged in." });
    return;
  }

  res.status(200).json({ name: 'John Doe' })
}
