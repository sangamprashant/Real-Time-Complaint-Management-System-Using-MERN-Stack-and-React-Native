import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-linear-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">

      {/* Decorative background shapes */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* IMAGE – TOP on mobile, RIGHT on lg */}
        <div className="relative flex justify-center order-1 lg:order-2">
          <img
            src="/complaint.svg"
            alt="Complaint Management Illustration"
            className="w-full max-w-md drop-shadow-lg"
            loading="lazy"
          />
        </div>

        {/* TEXT – BELOW image on mobile, LEFT on lg */}
        <div className="order-2 lg:order-1">
          <span className="inline-block mb-5 px-4 py-1 text-sm font-medium text-primary bg-blue-100 rounded-full">
            MCA Final Year Project
          </span>

          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-gray-800 leading-tight">
            Real-Time <br />
            <span className="text-primary">Complaint Management</span> System
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-xl leading-relaxed">
            A secure and transparent digital platform to register, monitor,
            and resolve complaints with instant updates using modern web
            and mobile technologies.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              to="/login"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-blue-700 transition shadow-md"
            >
              Get Started
            </Link>

            <Link
              to="/register"
              className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition"
            >
              Register Complaint
            </Link>
          </div>

          {/* STATS */}
          <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
            <div>
              <p className="lg:text-2xl text-md font-bold text-gray-800">24/7</p>
              <p className="text-sm text-gray-500">Availability</p>
            </div>
            <div>
              <p className="lg:text-2xl text-md font-bold text-gray-800">Real-Time</p>
              <p className="text-sm text-gray-500">Status Updates</p>
            </div>
            <div>
              <p className="lg:text-2xl text-md font-bold text-gray-800">Secure</p>
              <p className="text-sm text-gray-500">Data Handling</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
