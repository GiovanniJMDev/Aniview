// src/Home.js
import CardTitle from "../../components/title/cardTitle";
function Home() {
  const cards = [
    { title: "Sample News Headline 1" },
    { title: "Another Interesting Headline 2" },
    { title: "Breaking News: Something Big Happened" },
    { title: "More Updates in the Tech World" },
    { title: "Latest Sports News and Highlights" },
    { title: "Sample News Headline 1" },
    { title: "Another Interesting Headline 2" },
    { title: "Breaking News: Something Big Happened" },
    { title: "More Updates in the Tech World" },
    { title: "Latest Sports News and Highlights" },
    { title: "Sample News Headline 1" },
    { title: "Another Interesting Headline 2" },
    { title: "Breaking News: Something Big Happened" },
    { title: "More Updates in the Tech World" },
    { title: "Latest Sports News and Highlights" },
    // Agrega más cartas según sea necesario
  ];

  return (
    <div className="flex h-full bg-gray-100">
      <main className="flex-1 p-8">
        <header className="text-center p-4 rounded mb-4">
          <h1 className="pb-3">Aniview</h1>
          <input
            type="text"
            name="input"
            id="home_input"
            className="border-2 border-onix rounded-xl w-3/5"
          />
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded shadow"></div>
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
