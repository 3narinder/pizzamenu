import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="flex flex-col items-center my-0 mx-auto max-w-screen-lg gap-20">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
