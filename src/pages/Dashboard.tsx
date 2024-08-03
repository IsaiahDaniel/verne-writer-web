import Navbar from "../components/navigation/Navbar";
import DashboardComponent from "../components/DashboardComponent";
import Layout from "../common/Layout";
import useGetDashboard from "@/hooks/dashboard/useDashboard";

const Dashboard = () => {

  const { username } = useGetDashboard();

  console.log("username", username);

  return (
    <>
      <Layout>
          <DashboardComponent username={username} />
      </Layout>
    </>
  );
};

export default Dashboard;
