import { Layout } from "antd";
const { Content } = Layout;
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index";
import Courses from "./pages/Courses/index";
function App() {
  return (
    <div className="w-full">
      <Layout>
        <Header />
        <Content className="wrapper">
          <Home />
          {/* <Courses /> */}
          {/* <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/courses" element={<Courses />}></Route>
          </Routes> */}
        </Content>
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
