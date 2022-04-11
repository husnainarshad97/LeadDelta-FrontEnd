import Tags from "./pages/Tags";
import Inbox from "./pages/Inbox";
import Template from "./pages/Template";
import Navbar from "./components/Navbar";
import ErrorPage from "./pages/ErrorPage";
import Connections from "./pages/Connections";
import ActivityLog from "./pages/ActivityLog";
import Integrations from "./pages/Integrations";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/tags" element={<Tags />} />
        <Route path="/Inbox" element={<Inbox />} />
        <Route path="/" element={<Connections />} />
        <Route path="/Template" element={<Template />} />
        <Route path="/ActivityLog" element={<ActivityLog />} />
        <Route path="/Integrations" element={<Integrations />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
