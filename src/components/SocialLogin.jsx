import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import Swal from "sweetalert2";



const SocialLogin = () => {
    const { googleSingIn, githubSignIn, twitterSignIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state || "/";

    const handleSocialLogin = (socialProvider) => {
        socialProvider().then((result) => {
            if (result.user) {
                Swal.fire({
                    title: 'Successfylly Login',
                    text: 'Welcome to Blue Gallery',
                    icon: 'Success',
                    confirmButtonText: 'Cool'
                })
                navigate(from);
            }
        });
    };
    return (
        <div className='flex flex-row gap-2'>
            <button onClick={() => handleSocialLogin(googleSingIn)} className='btn bg-[#00aeef] text-white'>< FaGoogle />Google</button>
            <button onClick={() => handleSocialLogin(githubSignIn)} className='btn bg-[#00aeef] text-white'><FaGithub />Github</button>
            <button onClick={() => handleSocialLogin(twitterSignIn)} className='btn bg-[#00aeef] text-white'><FaTwitter />Twitter</button>

        </div>
    );
}


export default SocialLogin;