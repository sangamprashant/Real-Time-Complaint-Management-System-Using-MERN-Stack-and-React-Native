const HowItWorks = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          <div className="p-5 bg-white rounded-xl shadow">
            <span className="text-primary text-xl font-bold">1</span>
            <p className="mt-3 text-gray-600">User registers and logs in</p>
          </div>

          <div className="p-5 bg-white rounded-xl shadow">
            <span className="text-primary text-xl font-bold">2</span>
            <p className="mt-3 text-gray-600">Complaint is submitted</p>
          </div>

          <div className="p-5 bg-white rounded-xl shadow">
            <span className="text-primary text-xl font-bold">3</span>
            <p className="mt-3 text-gray-600">Admin assigns complaint</p>
          </div>

          <div className="p-5 bg-white rounded-xl shadow">
            <span className="text-primary text-xl font-bold">4</span>
            <p className="mt-3 text-gray-600">Complaint resolved with update</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
