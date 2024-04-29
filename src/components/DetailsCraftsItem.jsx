import { Link, useLoaderData } from "react-router-dom";


const DetailsCraftsItem = () => {
    const detailsItem = useLoaderData();
    const { itemName, stockStatus, subCategory, shortDescription, price, rating, processingTime, image, customizeAnswer } = detailsItem;

    return (


        <div className="my-12">

            <div className="bg-[#f8f7fc]">
                <div className="flex flex-row justify-between items-center gap-x-8 ">
                    <div className="flex-1"><img src={image} alt="craft item" /></div>
                    <div className="flex-1  flex flex-col gap-y-4">
                        <p className="text-3xl font-medium">{itemName}</p>
                        <p><p className="text-xl font-medium">Short Description:</p> <p className="text-[#1c1a1a]">{shortDescription}</p></p>
                        <div className="flex flex-row flex-wrap gap-x-6">
                            <p><b>Sub Category</b>:{subCategory} </p>
                            <p><b>Customization</b> :{customizeAnswer} </p>
                            <p><b>Stock Status</b>:{stockStatus}</p>
                            <p><b>Price</b>: ${price}</p>
                            <p><b>Processing Time</b>: {processingTime}</p>
                            <p><b>Rating</b>:{rating}</p>
                        </div>

                        <Link to={'/'}>
                            <button className="btn bg-[#00aeef] text-white" >Back Page</button>
                        </Link>



                    </div>
                </div>

                <div>



                </div>
            </div>
        </div>

    );
};

export default DetailsCraftsItem;