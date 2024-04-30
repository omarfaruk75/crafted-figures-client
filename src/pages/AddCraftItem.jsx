import { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";



const AddCraftItem = () => {
    const { user } = useAuth() || {};
    const displayName = user ? user.displayName : '';
    const email = user ? user.email : '';

    //console.log(user.email, user.displayName);
    const [formData, setFormData] = useState({

        itemName: "",
        subCategory: "",
        shortDescription: "",
        price: "",
        rating: "",
        processingTime: "",
        image: "",
        customizeAnswer: "",
        stockStatus: "",
        user: displayName,
        userEmail: email
    });


    const handleAddCraftItem = event => {

        event.preventDefault();
        const form = event.target;
        // const user = user.displayName;
        // const email = user.email;
        const itemName = form.item_name.value;
        const subCategory = form.subcategory_name.value;
        const shortDescription = form.short_description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const processingTime = form.processing_time.value;
        const image = form.image.value;
        const customizeAnswer = form.customize_answer.value;
        const stockStatus = form.stockStatus.value;

        const craftItem = { itemName, stockStatus, subCategory, shortDescription, price, rating, processingTime, image, customizeAnswer, user: displayName, email };
        // console.log(craftItem);
        fetch("https://crafted-figures.vercel.app/additem", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(craftItem)
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'user added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    setFormData({
                        itemName: "",
                        subCategory: "",
                        shortDescription: "",
                        price: "",
                        rating: "",
                        processingTime: "",
                        image: "",
                        customizeAnswer: "",
                        stockStatus: ""
                    });

                }
            })

    }

    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold text-center mb-4 text-[#00aeef] ">Add Crafted Item</h2>
            <form onSubmit={handleAddCraftItem}>
                {/* form name and quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Crafted Item Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="item_name" placeholder="Crafted Item Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Sub Category Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="subcategory_name" placeholder="sub category name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <textarea name="short_description" placeholder=" Short Description" className="w-full " id="" cols="10" rows="2"></textarea>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Processing Time</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="processing_time" placeholder="Processing Time" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>

                {/* form Photo url row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Customization is possible?</span>
                        </label>
                        <select className="select select-bordered" name="customize_answer">
                            <option value="" disabled defaultValue>Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>

                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Image" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Stock Status?</span>
                        </label>
                        <select className="select select-bordered" name="stockStatus">
                            <option value="" disabled defaultValue>Select</option>
                            <option value="Yes">Instock</option>
                            <option value="No">Made to Order</option>
                        </select>
                    </div>
                </div>
                <input type="submit" value="Add Item" className="btn btn-block bg-[#00aeef] text-white " />

            </form>
        </div>
    );
};


export default AddCraftItem;

