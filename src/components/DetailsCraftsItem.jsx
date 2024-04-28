import { Link, useLoaderData } from "react-router-dom";


const DetailsCraftsItem = () => {
    const detailsItem = useLoaderData();
    const { itemName, stockStatus, subCategory, shortDescription, price, rating, processingTime, image, customizeAnswer } = detailsItem;

    return (
        <div className="my-12">

            <div>

                <div className="card card-compact bg-base-100 shadow-xl flex-grow">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className="card-title">Craft Item:<b>{itemName}</b></p>

                        <p>Short Description:  {shortDescription}</p>
                        <div className="flex flex-row justify-between">
                            <p><b>Sub Category</b>:{subCategory} </p>
                            <p><b>Customization</b> :{customizeAnswer} </p>
                        </div>
                        <div className="flex flex-row justify-between">
                            <p><b>Stock Status</b>:{stockStatus}</p>
                            <p><b>Price</b>: ${price}</p>
                        </div>
                        <div className="flex flex-row justify-start">

                            <p><b>Processing Time</b>: {processingTime}</p>
                            <p><b>Rating</b>:{rating}</p>
                        </div>
                        <div className="card-actions ">
                            <div className="btn-group btn-group-horizontal space-x-4">

                                <Link to={'/'}>
                                    <button className="btn">Back Page</button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsCraftsItem;