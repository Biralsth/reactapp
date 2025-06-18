import React from 'react'
import { useParams } from 'react-router'

export default function Product() {
    const { id } = useParams();
    console.log(id);
    return (
        <div>

            <h1>This is product detail - {id}</h1>
        </div>
    )
}