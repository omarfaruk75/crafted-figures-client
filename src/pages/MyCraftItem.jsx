
import { useLoaderData } from "react-router-dom";
import MyCraftItemSection from "../components/MyCraftItemSection";


const MyCraftItem = () => {
    const craftItems = useLoaderData();

    return (
        <div>
            <h1 className="text-5xl text-center font-medium">All Art All Crafted Paper </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {
                    craftItems.map(craftItem => <MyCraftItemSection key={craftItem._id} craftItem={craftItem}></MyCraftItemSection>)
                }
            </div>




        </div>
    );
};



export default MyCraftItem;