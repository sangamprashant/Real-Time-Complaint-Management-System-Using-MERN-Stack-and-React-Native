import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

type Benefit = {
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    title: "Faster Complaint Resolution",
    description:
      "Automated workflows and real-time updates help resolve complaints quickly.",
  },
  {
    title: "Complete Transparency",
    description:
      "Users can track the complaint status at every stage of the resolution process.",
  },
  {
    title: "Reduced Paperwork",
    description:
      "Digital complaint handling eliminates manual paperwork and redundancy.",
  },
  {
    title: "Secure Data Handling",
    description:
      "Complaint data is securely stored and accessed using role-based security.",
  },
];

const Benefits = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Benefits of the System
          </h2>
          <p className="text-gray-600 text-lg">
            Advantages of using the Real-Time Complaint Management System
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex gap-4 bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="shrink-0">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100">
                  <CheckCircleOutlineOutlinedIcon className="text-green-600" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Benefits;
