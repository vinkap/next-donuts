import Link from 'next/link';
import React from 'react'
import { Donut, DonutsApiResponse } from '../models/Donut';

const getDonuts = async (): Promise<DonutsApiResponse> => {
    const res = await fetch(
        "https://grandcircusco.github.io/demo-apis/donuts.json"
    );
    return res.json();
};

export default async function Donuts() {
    const donuts = (await getDonuts())?.results;
    // console.log(">>>>", res)

    return (
        <>
            <br />
            <h3>Donuts</h3>
            <ul>
                {donuts?.map(item =>
                    <li>
                        <Link href={`donuts/${item.id}`} style={{ display: 'flex', alignItems: 'center'}}>
                            <img src={item.photo} width={'40px'} height={'40px'} />
                            &nbsp;
                            <h5>{item.name}</h5>
                        </Link>
                    </li>)}
            </ul>
        </>
    )
}
