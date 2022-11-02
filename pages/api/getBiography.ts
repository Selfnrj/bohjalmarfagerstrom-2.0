import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../santity";
import { Biography } from "../../typings";

const query = groq`
  *[_type == "biography"][0] {
    ...,
    body[0] { 
      children[0] {
        text
      }
    }
  }
`

type Data = {
  biography: Biography;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const biography: Biography = await sanityClient.fetch(query);
  res.status(200).json({ biography })
}


