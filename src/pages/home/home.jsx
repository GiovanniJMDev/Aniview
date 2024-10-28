// src/Home.js
import Navbar from "../../components/Navbar/Navbar";

function Home() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1 p-8">
        <header className="bg-white shadow p-4 rounded mb-4">
          <h2 className="text-xl font-semibold">Dashboard</h2>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-lg font-bold">Statistics</h3>
            <p className="text-gray-600">Data about your performance</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-lg font-bold">Tasks</h3>
            <p className="text-gray-600">Tasks for today</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-lg font-bold">Messages</h3>
            <p className="text-gray-600">Recent notifications</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
