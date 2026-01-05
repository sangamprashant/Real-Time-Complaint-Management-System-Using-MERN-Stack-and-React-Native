import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="bg-primary py-16 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-4">
          Ready to Register Your Complaint?
        </h2>

        <p className="mb-6">
          Get started today and experience transparent complaint management.
        </p>

        <Link
          to="/register"
          className="inline-block bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100"
        >
          Register Now
        </Link>

      </div>
    </section>
  );
};

export default CTASection;
