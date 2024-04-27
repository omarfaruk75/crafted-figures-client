import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../components/SocialLogin";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";


const Login = () => {
    const { signInUser, setUser, } = useAuth();

    const { register, handleSubmit, formState: { errors }, } = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        const { email, password } = data;
        signInUser(email, password)
            .then(result => {
                setUser(result.user);
                navigate('/')



            })
            .catch(error => console.log(error))
    }

    return (
        <div className="my-12">
            <form onSubmit={handleSubmit(onSubmit)} className="form w-2/5 mx-auto space-y-6 border-2 border-blue-200 p-8 rounded-xl">

                <h2 className="text-3xl text-center font-bold ">Login Please</h2>

                <div>
                    <p className="font-bold ">Email:*</p>
                    <input type="email" name="email" placeholder="write your email address" className="input input-bordered input-success w-full" {...register("email", { required: true })} />
                    {errors.email && <span className="text-red-500">Email is required</span>}

                </div>

                <div>
                    <p className="font-bold " >Password:*</p>
                    <input type="password" name="password" placeholder="write your password" className="input input-bordered input-success w-full" {...register("password", { required: true })} />
                    {errors.email && <span className="text-red-500">Email is required</span>}

                </div>

                <button type="submit" className="btn btn-primary text-white w-full text-xl font-bold">Login</button>

            </form>

            <div className="flex flex-col justify-center items-center space-y-2">
                <p className="text-center ">Do not have an account please <Link className=" text-primary font-bold" to={'/register'}>Register</Link ></p>

                {/* <b className=" text-xl border-b-2 border-red-300 ">Login From </b> */}

                <SocialLogin></SocialLogin>


            </div>

        </div>
    );
};

export default Login;