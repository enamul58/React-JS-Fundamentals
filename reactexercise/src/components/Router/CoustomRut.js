import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Hello from "./Hello";
import Post from "./Post";
import Posts from "./Posts";

function CoustomRut() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/hello" />} />

        <Route path="/hello" element={<Hello />} />

        <Route path="/posts" element={<Posts />} />

        <Route path="/posts/:postId" element={<Post />} />
      </Routes>
    </div>
  );
}

export default CoustomRut;
