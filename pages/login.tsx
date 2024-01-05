import React, { Fragment } from 'react';
import LoginForm from '../src/components/organisms/LoginForm';

const Login: React.FC = () => {
    const [loggingIn, setLoggingIn] = React.useState(false);
    const [signingUp, setSigningUp] = React.useState(false);

    // Should optimize state form
    // Can break down components more if we are happy with how they look rn
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center bg-slate-500">
            <div className='bg-indigo-600 w-1/4 h-3/4 flex flex-col justify-center items-center rounded-2xl'>
                {(!loggingIn && !signingUp) &&
                    <Fragment>
                        <h1 className="text-4xl font-bold text-center text-gray-800">
                            Welcome to your <span className="text-blue-400">NFC</span>
                            <span className="text-red-400">Board</span>
                        </h1>
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex flex-row gap-4">
                                <div className="mt-8 mb-8">
                                    <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setLoggingIn(!loggingIn)}>
                                        Login
                                    </button>
                                </div>
                                <div className="mt-8 mb-8">
                                    <button className="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setSigningUp(!signingUp)}>
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                }
            {(loggingIn || signingUp) && <LoginForm loggingIn={loggingIn} signingUp={signingUp}/>} 
            </div>
        </div>
    );
};

export default Login;
