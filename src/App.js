import './App.css';
import { Layout} from 'antd';
import 'antd/dist/antd.min.css';
import {Route, Routes} from "react-router";
import Home from "./pages/Home";
import Page from "./pages/Page";
import PageNotFound from "./pages/404";
const { Header, Footer } = Layout;

function App() {
  return (
      <Layout className="layout">
        <Header style={{color:"#fff"}}>
            Announcements
        </Header>
          <Routes>
              <Route path="/" element={ <Home />} />
              <Route path="page" element={<Page />}>
                  <Route path=":postID" element={<Page />} />
              </Route>
              <Route path="*" element={ <PageNotFound/> }/>
          </Routes>
        <Footer style={{ textAlign: 'center' }}>for NerdySoft</Footer>
      </Layout>
  );
}

export default App;
