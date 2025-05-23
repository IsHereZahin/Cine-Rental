import Content from "./components/sections/Content";
import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";
import Sidebar from "./components/sections/Sidebar";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <Content />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
