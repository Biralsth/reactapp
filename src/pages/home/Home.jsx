import { Button, List, ListItem } from "@material-tailwind/react";
import { useState } from "react"
import { faker, Faker } from "@faker-js/faker";

export default function Home() {


    const [color, setColor] = useState(true);
    const handleChange = () => {
        setColor(prev => !prev);

    }


    const [count, setCount] = useState(0);
    const handleCount = () => {
        setCount((prev) => prev + 1);
    }
    const handleCount2 = () => {
        setCount((prev) => prev - 1);
    }

    const [numbers, setNumber] = useState([]);

    const handleCount3 = () => {

        setNumber((prev) => [...prev, count]);
    }
    console.log(numbers);



    const [fakeImage, setFakeImage] = useState([])
    const handleImage = () => {
        setFakeImage((prev) => [...prev, faker.image.personPortrait(), faker.person.fullName()])


    }
    const [fakeEmail, setFakeEmail] = useState([])
    const handleEmail = () => {
        setFakeEmail((prev) => [...prev, faker.internet.email()])
    }

    return (
        <div className="p-10 flex flex-col w-sm">

            <Button color="red" onClick={handleChange} className={`${color ? 'bg-red-800' : 'bg-black'}`} >Change</Button>



            <div className='flex my-10 '>


                <Button onClick={handleCount} className='p-5'>Increment</Button> <h1 className='p-5 mx-5'>{count}</h1>
                <Button onClick={handleCount2} className='p-5'>Decrement</Button>


            </div>
            <div className="mb-15">

                <Button onClick={handleCount3}>Count THe Value</Button>

                <List className="">
                    {numbers.map((num, index) => (
                        <ListItem key={index}>{num}</ListItem>
                    ))}
                </List>

            </div>

            <div className="flex">
                <div>
                    <Button onClick={handleImage}>Get Img</Button>
                    <List>
                        {fakeImage.map((img, index) => (
                            <ListItem >

                                <img key={index} src={img} alt="" />

                            </ListItem>

                        )

                        )}


                    </List>
                </div>

                <div>
                    <Button onClick={handleEmail}>Get Email</Button>
                    <List>
                        {fakeEmail.map((ema, index) => (
                            <ListItem>
                                <p key={index} >{ema}</p>
                            </ListItem>
                        ))}

                    </List>
                </div>
            </div>

        </div>
    )
}