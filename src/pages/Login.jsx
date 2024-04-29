import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../components/SocialLogin";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import Swal from 'sweetalert2'



const Login = () => {
    const { signInUser, setUser, } = useAuth();

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        const { email, password } = data;
        signInUser(email, password)
            .then(result => {
                setUser(result.user);
                Swal.fire({
                    title: 'Successfylly Login',
                    text: 'Welcome to Blue Gallery',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                navigate('/')



            })
            .catch(error => console.log(error))
    }

    return (
        <div className="my-8">
            <form onSubmit={handleSubmit(onSubmit)} className="form w-2/5 mx-auto space-y-6 border-2 border-blue-200 p-8 rounded-xl">

                <h2 className="text-3xl text-center font-bold text-[#00aeef]">Login Please</h2>

                <div>
                    <p className="font-medium text-[#302f2f]">Email:*</p>
                    <input type="email" name="email" placeholder="write your email address" className="input input-bordered input-success w-full" {...register("email", { required: true })} />
                    {errors.email && <span className="text-red-500">Email is required</span>}

                </div>

                <div>
                    <p className="font-medium text-[#302f2f] " >Password:*</p>
                    <input type="password" name="password" placeholder="write your password" className="input input-bordered input-success w-full" {...register("password", { required: true })} />
                    {errors.email && <span className="text-red-500">Email is required</span>}

                </div>

                <button type="submit" className="btn  text-white w-full text-xl font-bold bg-[#00aeef]">Login</button>

            </form>

            <div className="flex flex-col justify-center items-center space-y-3">
                <p className="text-center ">Do not have an account please <Link className=" font-bold text-[#00aeef]" to={'/register'}>Register</Link ></p>



                <SocialLogin></SocialLogin>


            </div>

        </div>
    );
};

export default Login;