import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
} from "@material-tailwind/react";
import { useNavigate } from "react-router";

export default function MealItemCard({ meal }) {
    const nav = useNavigate();
    return (
        <Card
            onClick={() => nav(`/meal/${meal.idMeal}`)}
            className=" overflow-hidden w-sm cursor-pointer">

            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
            >
                <img
                    className="w-sm"
                    src={meal.strMealThumb}
                    alt="ui/ux review check"
                />
            </CardHeader>
            <CardBody>
                <Typography className="pt-1" variant="h4" color="blue-gray">
                    {meal.strMeal}
                </Typography>

            </CardBody>

        </Card>
    );
}