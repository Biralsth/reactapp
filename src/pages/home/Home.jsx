import React from 'react'
import { useState } from 'react'
import { Button, List, Card, ListItem, ListItemSuffix, Chip } from '@material-tailwind/react';
import { faker } from '@faker-js/faker';




export default function Home() {
    const [count, setCount] = useState(0);
    const handleCount = () => (
        setCount((prev) => prev + 1)
    )
    const handleCount2 = () => (
        setCount((prev) => 0)
    )

    const [color, setColor] = useState(null);
    const handleColor = () => {
        setColor((prev) => !prev)
    }

    const [chemi, setChemi] = useState([])
    const handleChemi = () => {
        setChemi((prev) => [...prev, faker.science.chemicalElement()])
    }


    const handleDelete = (symbol) => {
        setChemi((prev) => prev.filter((pre) => pre.symbol != symbol))
    }



    return (
        <div>
            <div className='p-5 flex flex-col gap-3 w-sm'>
                <h1 className={`${color ? 'border-blue-800' : 'border-green-800'} border-10 text-center`}>{count}</h1>
                <Button onClick={handleCount}>Smash</Button>
                <Button onClick={handleCount2}>Smash 0</Button>
                <Button onClick={handleColor} className={`${color ? "bg-black" : "bg-red-800"}`}>Color Smash</Button>

                <Button onClick={handleChemi} className='mt-10'>Chemi Smash</Button>

            </div>


            <Card className="w-xl mt-2">
                <List>
                    {chemi.map((xiao, index) => (


                        <ListItem key={index}>
                            {xiao.name}

                            <ListItemSuffix className='flex gap-2'>
                                <Chip
                                    value={xiao.symbol}

                                    variant="ghost"
                                    size="sm"
                                    className="rounded-full"
                                />
                                <Chip

                                    value={xiao.atomicNumber}
                                    variant="ghost"
                                    size="sm"
                                    className="rounded-full"
                                />
                                <Button onClick={() => handleDelete(xiao.symbol)}>Del</Button>
                            </ListItemSuffix>
                        </ListItem>

                    ))}
                </List>
            </Card>








        </div>
    )

}
