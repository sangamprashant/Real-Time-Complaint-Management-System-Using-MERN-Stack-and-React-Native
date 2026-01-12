import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import TrackChangesOutlinedIcon from "@mui/icons-material/TrackChangesOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";

const FeaturesSection = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Key Features
          </h2>
          <p className="text-gray-600 text-lg">
            Powerful capabilities that make complaint handling faster,
            transparent, and secure.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Feature Card */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 mb-6">
              <ReportProblemOutlinedIcon className="text-primary" fontSize="large" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Complaint Registration
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Users can easily submit complaints with detailed descriptions and
              attachments.
            </p>
          </div>

          {/* Feature Card */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-green-100 mb-6">
              <TrackChangesOutlinedIcon className="text-green-600" fontSize="large" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Real-Time Tracking
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Track complaint status instantly with live updates and
              notifications.
            </p>
          </div>

          {/* Feature Card */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-purple-100 mb-6">
              <SecurityOutlinedIcon className="text-purple-600" fontSize="large" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Secure Authentication
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Role-based access control ensures only authorized users can
              access data.
            </p>
          </div>

          {/* Feature Card */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-yellow-100 mb-6">
              <AnalyticsOutlinedIcon className="text-yellow-600" fontSize="large" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Analytics & Reports
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Generate insightful reports to analyze complaint trends and
              system performance.
            </p>
          </div>

          {/* Feature Card */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-red-100 mb-6">
              <NotificationsActiveOutlinedIcon className="text-red-600" fontSize="large" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Instant Notifications
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Users receive instant alerts on complaint status updates.
            </p>
          </div>

          {/* Feature Card */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-indigo-100 mb-6">
              <ShieldOutlinedIcon className="text-indigo-600" fontSize="large" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Data Security
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Ensures secure storage and handling of complaint data using
              modern security standards.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
