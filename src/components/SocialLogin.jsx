import useAuth from "../hooks/useAuth";


const SocialLogin = () => {
    const { googleSingIn, githubSignIn, twitterSignIn } = useAuth();
    return (
        <div className='flex flex-row gap-2'>
            <button onClick={() => googleSingIn()} className='btn btn-primary'>Google</button>
            <button onClick={() => githubSignIn()} className='btn btn-primary'>Github</button>
            <button onClick={() => twitterSignIn()} className='btn btn-primary'>Twitter</button>

        </div>
    );
}

export default SocialLogin;