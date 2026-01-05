const UserRoles = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          System Users
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h3 className="font-semibold text-primary mb-2">User</h3>
            <p className="text-gray-600 text-sm">
              Registers complaints and tracks status updates.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h3 className="font-semibold text-primary mb-2">Admin</h3>
            <p className="text-gray-600 text-sm">
              Manages, assigns, and monitors complaints.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h3 className="font-semibold text-primary mb-2">Staff</h3>
            <p className="text-gray-600 text-sm">
              Resolves assigned complaints efficiently.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default UserRoles;
