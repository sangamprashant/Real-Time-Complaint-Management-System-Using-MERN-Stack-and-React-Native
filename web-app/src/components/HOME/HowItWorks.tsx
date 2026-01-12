import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

const HowItWorks = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 text-lg">
            Simple and transparent process for complaint resolution
          </p>
        </div>

        {/* Timeline */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Step 1 */}
          <div className="relative bg-white rounded-2xl shadow-md p-8 text-center">
            <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-blue-100">
              <PersonAddAltOutlinedIcon className="text-primary" fontSize="large" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              User Login
            </h3>
            <p className="text-gray-600 text-sm">
              User registers and securely logs into the system.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative bg-white rounded-2xl shadow-md p-8 text-center">
            <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-green-100">
              <AssignmentOutlinedIcon className="text-green-600" fontSize="large" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Submit Complaint
            </h3>
            <p className="text-gray-600 text-sm">
              User submits complaint with details and attachments.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative bg-white rounded-2xl shadow-md p-8 text-center">
            <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-purple-100">
              <AdminPanelSettingsOutlinedIcon className="text-purple-600" fontSize="large" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Admin Processing
            </h3>
            <p className="text-gray-600 text-sm">
              Admin reviews and assigns complaint to staff.
            </p>
          </div>

          {/* Step 4 */}
          <div className="relative bg-white rounded-2xl shadow-md p-8 text-center">
            <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-indigo-100">
              <CheckCircleOutlineOutlinedIcon className="text-indigo-600" fontSize="large" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Resolution & Update
            </h3>
            <p className="text-gray-600 text-sm">
              Complaint is resolved and user receives notification.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
