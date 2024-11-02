import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";
import './App.css'
import AccountOverview from "./pages/AccountOverview";
import InviteTracking from "./pages/InviteTracking";
import UserModeration from "./pages/UserModeration";
// import SystemNotifications from "./pages/systemNotifications";
import Financials from "./pages/Financials";
import Post from "./pages/Post";
import Analytics from "./pages/Analytics";
// import Dashboard from "./pages/dashboard";
import Calendar from "./pages/Calendar";
import MediaLibrary from "./pages/MediaLibrary";
import Team from "./pages/Team";
import Dashboard from "./pages/Dashboard";
import SystemNotifications from "./pages/SystemNotifications";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/account-overview" element={<AccountOverview />} />
          <Route path="/invite-tracking" element={<InviteTracking />} />
          <Route path="/user-moderation" element={<UserModeration />} />
          <Route path="/system-notifications" element={<SystemNotifications />} />
          <Route path="/financial-reports" element={<Financials />} />
          <Route path="/posts" element={<Post />} />
          <Route path="/team" element={<Team />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/media-library" element={<MediaLibrary />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;


