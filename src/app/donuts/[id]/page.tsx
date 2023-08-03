import { Donut } from '@/app/models/Donut';
import React from 'react'

const getDonut = async (id: string) => {
    const res = await fetch(
        `https://grandcircusco.github.io/demo-apis/donuts/${encodeURIComponent(
            id
        )}.json`
    );
    return res.json();
};

export default async function DonutById({ params }: { params: { id: string } }) {

    const donut: Donut = await getDonut(params.id);
    console.log("donut>>>", donut);

    return (<>
        <br />
        <h3>Donut Details</h3>
        <p>Name: {donut?.name}</p>
        <p>Pic: <img src={donut.photo} width={'80px'} height={'80px'} /></p>
        <p>Calories: {donut?.calories}</p>
        <p>Possible Extra Toppings:</p>
        <ul>{donut?.extras?.map(extra => <li>{extra}</li>)}</ul>
    </>
    )
}
