import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CraftItemSection = ({ craftItem }) => {
    const { _id, itemName, stockStatus, subCategory, shortDescription, price, rating, processingTime, image, customizeAnswer } = craftItem;
    const handleDeleteItem = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                console.log('one item deleted')
                fetch(`http://localhost:5000/additem/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })


            }
        });

    }


    return (
        <div className="my-12">

            <div>

                <div className="card card-compact bg-base-100 shadow-xl flex-grow">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className="card-title">Craft Item:<b>{itemName}</b></p>

                        <p>Short Description:  {shortDescription?.slice(1, 100)}<Link to={`/details/${_id}`} className="text-primary">View Details</Link></p>
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
                                <Link to={`updateItem/${_id}`}>
                                    <button className="btn">Edit</button>
                                </Link>
                                <button
                                    onClick={() => handleDeleteItem(_id)} className="btn text-red-800">X</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
CraftItemSection.propTypes = {
    craftItem: PropTypes.object
}

export default CraftItemSection;