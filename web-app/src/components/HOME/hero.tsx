import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Real-Time Complaint <br />
            <span className="text-primary">Management System</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            A digital platform to register, track, and resolve complaints with
            transparency and real-time updates using modern web and mobile
            technologies.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              to="/login"
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition"
            >
              Get Started
            </Link>

            <Link
              to="/register"
              className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition"
            >
              Register Complaint
            </Link>
          </div>
        </div>

        {/* Right Visual */}
        <div className="flex justify-center">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
            <ul className="space-y-4 text-gray-700">
              <li>✔ Real-Time Complaint Tracking</li>
              <li>✔ Secure User Authentication</li>
              <li>✔ Admin & Staff Dashboard</li>
              <li>✔ Instant Notifications</li>
              <li>✔ Data Transparency</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
