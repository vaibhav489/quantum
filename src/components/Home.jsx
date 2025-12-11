import React from "react";

function Home() {
  const users = [
    {
      name: "Vera Carpenter",
      role: "Admin",
      date: "Jan 21, 2020",
      status: "Active",
      statusColor: "green",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
    },
    {
      name: "Blake Bowman",
      role: "Editor",
      date: "Jan 01, 2020",
      status: "Active",
      statusColor: "green",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
    },
    {
      name: "Dana Moore",
      role: "Editor",
      date: "Jan 10, 2020",
      status: "Suspended",
      statusColor: "orange",
      img: "https://images.unsplash.com/photo-1540845511934-7721dd7adec3?auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
    },
    {
      name: "Alonzo Cox",
      role: "Admin",
      date: "Jan 18, 2020",
      status: "Inactive",
      statusColor: "red",
      img: "https://images.unsplash.com/photo-1522609925277-66fea332c575?auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
    },
    {
      name: "Vera Carpenter",
      role: "Admin",
      date: "Jan 21, 2020",
      status: "Active",
      statusColor: "green",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
    },
    {
      name: "Blake Bowman",
      role: "Editor",
      date: "Jan 01, 2020",
      status: "Active",
      statusColor: "green",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
    }
  ];

  return (
   <div className="px-4 sm:px-8 py-8 bg-white dark:bg-gray-800 min-h-screen transition-all duration-300">

      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
        User Management
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Overview of all users, their roles, account creation dates, and current status.
      </p>

      <div className="-mx-4 sm:-mx-8 overflow-x-auto">
        <div className="inline-block min-w-full shadow dark:shadow-gray-700 rounded-lg overflow-hidden">
          
          <table className="min-w-full leading-normal">
            
            <thead>
              <tr>
                {["User", "Role", "Created At", "Status"].map((head) => (
                  <th
                    key={head}
                    className="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-700 
                               bg-gray-100 dark:bg-gray-800 text-left 
                               text-xs font-semibold text-gray-600 dark:text-gray-300 
                               uppercase tracking-wider"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="transition-colors">
                  
                  <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 
                                 bg-white dark:bg-gray-800 text-sm">
                    <div className="flex items-center">
                      <img
                        className="w-10 h-10 rounded-full"
                        src={user.img}
                        alt={user.name}
                      />
                      <p className="ml-3 text-gray-900 dark:text-gray-200 whitespace-nowrap">
                        {user.name}
                      </p>
                    </div>
                  </td>

                  <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 
                                 bg-white dark:bg-gray-800 text-sm">
                    <p className="text-gray-900 dark:text-gray-200 whitespace-nowrap">
                      {user.role}
                    </p>
                  </td>

                  <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 
                                 bg-white dark:bg-gray-800 text-sm">
                    <p className="text-gray-900 dark:text-gray-200 whitespace-nowrap">
                      {user.date}
                    </p>
                  </td>

                  <td className="px-5 py-5 border-b border-gray-200 dark:border-gray-700 
                                 bg-white dark:bg-gray-800 text-sm">
                    <span
                      className={`relative inline-block px-3 py-1 font-semibold 
                                  text-${user.statusColor}-900 dark:text-${user.statusColor}-300 leading-tight`}
                    >
                      <span
                        className={`absolute inset-0 bg-${user.statusColor}-200 dark:bg-${user.statusColor}-600 
                                    opacity-50 rounded-full`}
                        aria-hidden
                      ></span>
                      <span className="relative">{user.status}</span>
                    </span>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
