import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../santity";
import { Post } from "../../typings";

const query = groq`
    *[_type == "post"]
`

type Data = {
    posts: Post[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const posts: Post[] = await sanityClient.fetch(query);
    res.status(200).json({ posts })
  }


