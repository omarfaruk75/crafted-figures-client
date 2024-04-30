
import { useLoaderData } from "react-router-dom";
import Slider from "../../slider/Slider";
import CraftItemSection from "../../components/CraftItemSection";




const Home = () => {
    const craftItems = useLoaderData();


    return (
        <div >
            <Slider></Slider>
            <div className="my-12"  >
                <h1 className="text-5xl text-center font-medium">Discover Our Featured Crafted Paper Collections</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {
                        craftItems.map(craftItem => <CraftItemSection key={craftItem._id} craftItem={craftItem}></CraftItemSection>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;