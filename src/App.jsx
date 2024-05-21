import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import AppRoutes from "./Routes/AppRoutes";

function App() {
  return (
    <>
      <div className="page-container">
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>
    </>
  );
}

export default App;
