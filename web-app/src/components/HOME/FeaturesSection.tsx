const FeaturesSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Key Features
        </h2>

        <p className="text-gray-600 mb-12">
          Core functionalities of the Real-Time Complaint Management System
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h3 className="font-semibold text-lg text-primary mb-2">
              Complaint Registration
            </h3>
            <p className="text-gray-600 text-sm">
              Users can submit complaints with detailed descriptions and attachments.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h3 className="font-semibold text-lg text-primary mb-2">
              Real-Time Tracking
            </h3>
            <p className="text-gray-600 text-sm">
              Track complaint status instantly with live updates.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h3 className="font-semibold text-lg text-primary mb-2">
              Secure Access
            </h3>
            <p className="text-gray-600 text-sm">
              Role-based authentication ensures data security.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
