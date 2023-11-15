import { Layout } from "antd";
const { Content } = Layout;
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full">
      <Header />

      <Footer />
    </div>
  );
}

export default App;
