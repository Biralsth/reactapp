import { Avatar, Card, List, ListItem, ListItemPrefix, Typography } from '@material-tailwind/react';

import MealCategoryLoader from './MealCategoryLoader';
import { useNavigate } from 'react-router';
import { useApi } from '../../hooks/useApi';

export default function MealCategory() {

    const nav = useNavigate();
    const [load, data, err] = useApi('https://www.themealdb.com/api/json/v1/1/categories.php')





    if (load) return <MealCategoryLoader />


    return (
        <div className='p-10 '>
            {data &&
                <Card className='p-5 '>
                    <List>
                        {data && data.categories.map((category) => {
                            return <div
                                onClick={() => nav(`/mealCategory/${category.strCategory}`)} key={category.idCategory} className=' mb-5 items-center gap-8 cursor-pointer'>

                                <div className='mb-4 flex items-center gap-4'>

                                    <Avatar variant="circular" size='xl' alt="candice" src={category.strCategoryThumb} />
                                    <Typography variant="h6" color="blue-gray" className=' mb-2 h-2 w-40 rounded-full round-full' >
                                        {category.strCategory}
                                    </Typography>

                                </div>

                                <div>

                                    <Typography variant="small" color="gray" className="font-normal mb-2 h-fit w-full rounded-full  round-full">
                                        {category.strCategoryDescription}
                                    </Typography>


                                </div>


                            </div>
                        })}


                    </List>
                </Card>}




        </div>
    )
}