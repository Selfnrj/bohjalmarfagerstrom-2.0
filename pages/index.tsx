import { GetStaticProps } from "next"
import Bio from "../components/Bio";
import { Biography } from "../typings";
import { fetchBiography } from "../utils/fetchBiography";
import Navbar from "../components/Navbar"

type Props = {
  biography: Biography
}

interface IndexProps extends Props {
  name: string
  email: string
  message: string
}

export default function Home({ biography, name, email, message }: IndexProps) {

  return (
    <>
      <Navbar name={biography.title} />
      <Bio biography={biography} name={name} email={email} message={message} />
    </>
  ) 
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const biography: Biography = await fetchBiography();

	return {
		props: {
      biography,
		},

		//revalidate: 60,
	}
}