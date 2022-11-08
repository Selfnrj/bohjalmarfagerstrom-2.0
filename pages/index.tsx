import { GetStaticProps } from "next"
import Bio from "../components/Bio";
import { Biography } from "../typings";
import { fetchBiography } from "../utils/fetchBiography";

type Props = {
  biography: Biography
  name: string
  email: string
  message: string
}

type BioProps = {
  biography: Biography;
}

export default function Home({ biography, name, email, message }: Props) {

  return (
    <div className="Container">
      <Bio biography={biography} name={name} email={email} message={message} />
    </div>
  ) 
}

export const getStaticProps: GetStaticProps<BioProps> = async () => {
  const biography: Biography = await fetchBiography();

	return {
		props: {
      biography,
		},

		revalidate: 10,
	}
}