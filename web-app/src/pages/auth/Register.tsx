import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 pt-24">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

                {/* Heading */}
                <h2 className="text-3xl font-extrabold text-gray-800 mb-2 text-center">
                    Create Account
                </h2>
                <p className="text-gray-600 text-center mb-8">
                    Register to submit and track complaints
                </p>

                {/* Form */}
                <form className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Create a password"
                            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            placeholder="Confirm password"
                            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
                    >
                        Register
                    </button>
                </form>

                {/* Footer */}
                <p className="text-sm text-gray-600 mt-6 text-center">
                    Already have an account?{" "}
                    <Link to="/login" className="text-primary font-medium hover:underline">
                        Login
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default Register;
