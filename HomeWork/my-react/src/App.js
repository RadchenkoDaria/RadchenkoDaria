import "./App.css";
import Header from "./project_/Header";
import Section from "./project_/Section";
import Navbar from "./project_/NavBar";
import "../src/project_/StyleAll.css";

const App = () => {
  return (
    <div className="MainClases">
      <Header />
      <Navbar />
      <Section />
    </div>
  );
};

export default App;
