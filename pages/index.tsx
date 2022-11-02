import { GetStaticProps } from "next"
import Bio from "../components/Bio";
import { Biography } from "../typings";
import { fetchBiography } from "../utils/fetchBiography";

type Props = {
  biography: Biography;
}

export default function Home({ biography }: Props) {
  return (
    <div>
      <Bio biography={biography} />
    </div>
  ) 
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const biography: Biography = await fetchBiography();

	return {
		props: {
      biography
		},

		revalidate: 10,
	}
}