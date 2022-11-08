import { Biography } from "../typings";

export const fetchBiography = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getBiography`);

    const data = await res.json();
    const biography: Biography = data.biography;

    //console.log("fetching biography", biography);

    return biography;
}