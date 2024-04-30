import { useLoaderData } from "react-router-dom";
import AllArtAllCraftCard from "../components/AllArtAllCraftCard";



const AllArtAllCraft = () => {

    const craftItems = useLoaderData();

    return (
        <div>
            <div className="my-12"  >
                <h1 className="text-5xl text-center font-medium">All Art All Crafted Paper </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {
                        craftItems.map(craftItem => <AllArtAllCraftCard key={craftItem._id} craftItem={craftItem}></AllArtAllCraftCard>)
                    }
                </div>
            </div>





        </div>
    );
};

export default AllArtAllCraft;