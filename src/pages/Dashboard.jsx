import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <div class="bg-[#f6f6f8] dark:bg-[#101522] text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      <Header />
      <main class="flex-1 px-6 lg:px-10 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Dashboard;
