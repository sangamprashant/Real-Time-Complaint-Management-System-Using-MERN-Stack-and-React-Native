const Benefits = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Benefits of the System
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="p-6 bg-white rounded-xl shadow">
            ✔ Faster complaint resolution
          </div>

          <div className="p-6 bg-white rounded-xl shadow">
            ✔ Complete transparency
          </div>

          <div className="p-6 bg-white rounded-xl shadow">
            ✔ Reduced paperwork
          </div>

          <div className="p-6 bg-white rounded-xl shadow">
            ✔ Secure data handling
          </div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;
