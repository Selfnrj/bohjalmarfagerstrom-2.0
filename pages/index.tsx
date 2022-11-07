import { GetStaticProps } from "next"
import Bio from "../components/Bio";
import { Biography } from "../typings";
import { fetchBiography } from "../utils/fetchBiography";
import Form from "../components/Form";

type Props2 = {
  biography: Biography;
}

type Props = {
  biography: Biography;
  name: string
  email: string
  message: string
}

export default function Home({ biography, name, email, message }: Props) {

  return (
    <div className="Container">
      <Bio biography={biography} />
      <Form name={name} email={email} message={message} />
    </div>
  ) 
}

export const getStaticProps: GetStaticProps<Props2> = async () => {
  const biography: Biography = await fetchBiography();

	return {
		props: {
      biography,
		},

		revalidate: 10,
	}
}