//This route is protected
import { getSession } from "next-auth/client";

export default async function helloAPI(req, res) {
  const session = await getSession({ req });

  console.log(session);

  if (!session) {
    return res.status(401).send("Unauthorized");
  }

  res.status(200).json({ name: "John Doe" });
}
