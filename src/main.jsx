import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Homepage from "./routes/homepage/homepage.jsx";
import CreatePage from "./routes/createPage/createPage.jsx";
import PostPage from "./routes/postPage/postPage.jsx";
import ProfilePage from "./routes/profilePage/profilePage.jsx";
import SearchPage from "./routes/searchPage/searchPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/pin:id" element={<PostPage />} />
        <Route path="/auth" element={<App />} />
        <Route path="/:username" element={<ProfilePage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
