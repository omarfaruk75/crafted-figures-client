import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const SocialLogin = () => {
    const { googleSingIn, githubSignIn, twitterSignIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state || "/";

    const handleSocialLogin = (socialProvider) => {
        socialProvider().then((result) => {
            if (result.user) {
                navigate(from);
            }
        });
    };
    return (
        <div className='flex flex-row gap-2'>
            <button onClick={() => handleSocialLogin(googleSingIn)} className='btn btn-primary'>Google</button>
            <button onClick={() => handleSocialLogin(githubSignIn)} className='btn btn-primary'>Github</button>
            <button onClick={() => handleSocialLogin(twitterSignIn)} className='btn btn-primary'>Twitter</button>

        </div>
    );
}


export default SocialLogin;