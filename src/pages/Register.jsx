
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";



const Register = () => {

    const { createUser, setUser } = useAuth();
    const { register, handleSubmit, formState: { errors }, } = useForm();

    //navigate page
    const navigate = useNavigate();


    //form submit
    const onSubmit = data => {
        const { email, password } = data;
        createUser(email, password)
            .then(result => {
                setUser(result.user);
                Swal.fire({
                    title: 'Success',
                    text: 'You Sccessfully Registered',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                navigate('/');

            })
            .catch(error => console.log(error))
    }

    return (
        <div className="my-12">
            <form onSubmit={handleSubmit(onSubmit)} className="form w-2/5 mx-auto space-y-6 border-2 border-blue-200 p-8 rounded-xl">

                <h2 className="text-3xl text-[#00aeef] text-center font-bold ">Register Please</h2>
                <div>
                    <p className=" text-[#302f2f] ">Name:*</p>
                    <input type="text" name="displayName" placeholder="write your name" className="input input-bordered input-success w-full" {...register("displayName", { required: true })} />
                    {errors.name && <span className="text-red-500">Name is required</span>}
                </div>
                <div>
                    <p className=" text-[#302f2f]">Email:*</p>
                    <input type="email" name="email" placeholder="write your email address" className="input input-bordered input-success w-full" {...register("email", { required: "Email Address is required" })}
                        aria-invalid={errors.email ? "true" : "false"} />
                    {errors.email && <span className="text-red-500">Email is required</span>}

                </div>
                <div>
                    <p className=" text-[#302f2f]">Photo URL</p>
                    <input type="text" name="photo" placeholder="photo url" className="input input-bordered input-success w-full" {...register("photo", { required: true })} />

                </div>

                <div>
                    <p className=" text-[#302f2f]" >Password:*</p>
                    <input type="password" name="password" placeholder="write your password" className="input input-bordered input-success w-full"  {...register("password", {
                        required: true,
                        minLength: 6,
                        pattern: /^(?=.*[a-z])(?=.*[A-Z])/
                    })} />
                    {errors.password && errors.password.type === "required" && (
                        <p className="text-red-500">Password is required</p>
                    )}
                    {errors.password && errors.password.type === "minLength" && (
                        <p className="text-red-500">Password must be at least 6 characters</p>
                    )}
                    {errors.password && errors.password.type === "pattern" && (
                        <p className="text-red-500">Password must contain at least one uppercase and one lowercase letter</p>
                    )}
                </div>

                <button type="submit" className="btn bg-[#00aeef]  text-white w-full text-xl font-bold">Register</button>

            </form>


            <p className="text-center m-6">Do not have an account please <Link className=" text-[#00aeef]  font-bold" to={'/Login'}>Login</Link ></p>
        </div>
    );
};

export default Register;