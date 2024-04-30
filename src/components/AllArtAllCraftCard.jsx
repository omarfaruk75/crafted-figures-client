import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const AllArtAllCraftCard = ({ craftItem }) => {
    const { _id, itemName, stockStatus, subCategory, shortDescription, price, rating, image } = craftItem;




    return (
        <div>
            <div className="my-12">

                <div>

                    <div className="card card-compact bg-base-100 shadow-xl flex-grow">
                        <figure><img src={image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <p className="card-title">Craft Item:<b>{itemName}</b></p>

                            <p>Short Description:  {shortDescription?.slice(0, 120)}<Link to={`/details/${_id}`} className="text-primary">View Details</Link></p>
                            <div className="flex flex-row justify-between">
                                <p><b>Sub Category</b>:{subCategory} </p>
                                <p><b>Price</b>: ${price}</p>
                            </div>
                            <div className="flex flex-row justify-between">
                                <p><b>Stock Status</b>:{stockStatus}</p>
                                <p><b>Rating</b>:{rating}</p>
                            </div>
                            <div className="card-actions ">
                                <div className="btn-group btn-group-horizontal space-x-4">
                                    <Link to={{ pathname: `/details/${_id}`, state: { from: "/allartallcraft" } }} className="text-primary">View Details</Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};
AllArtAllCraftCard.propTypes = {
    craftItem: PropTypes.object
}
export default AllArtAllCraftCard;