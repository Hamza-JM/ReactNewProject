import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Sidebar from "./layouts/SideBar";

import "./App.css";
import BlogList from "./pages/BlogList";
import CreatePost from "./pages/CreatePost";
import PostDetail from "./pages/PostDetail";

function App() {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/:id" element={<PostDetail />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
