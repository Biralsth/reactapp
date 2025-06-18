import React from 'react'
import Product from './Product'

export default function ProductList() {

    const products = [
        { id: 1, name: 'product 1' },
        { id: 2, name: 'product 2' },
        { id: 3, name: 'product 3' },
    ]
    return (
        <div>
            {products.map((product) => {
                return <div key={product.id}>
                    <h1>{product.name}</h1>

                </div>


            }
            )
            }
        </div>

    )
}