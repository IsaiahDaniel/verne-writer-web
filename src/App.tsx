import { Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import ActivateAccount from "./pages/ActivateAccount";
import Onboarding from "./pages/Onboarding";
import WriteArticle from "./pages/Articles/WriteArticle";
import ArticlesList from "./pages/Articles/ArticlesList";
import PublishArticle from "./pages/Articles/PublishArticle";
import WriteBook from "./pages/Books/WriteBook"
import AnalyticsPublication from "./pages/Analytics/AnalyticsPublication"
import Communities from "./pages/Communities/Communities";
import CommunityDetails from "./pages/Communities/CommunityDetails"
import JoinCommunity from "./pages/Communities/JoinCommunity";
import CreateCommunity from "./pages/Communities/CreateCommunity";
import Messages from "./components/navigation/Messages"
import Notifications from "./components/navigation/Notifications"
import UserProfile from "./pages/UserProfile"
import Support from "./pages/Support"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Signup />} />
				<Route path="/signin" element={<Signin />} />
				<Route path="/onboarding" element={<Onboarding />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/verify" element={<ActivateAccount />} />

				<Route path="/publish-article" element={<PublishArticle />} />
				<Route path="/write-article" element={<WriteArticle />} />
				<Route path="/articles" element={<ArticlesList />} />

				<Route path="/books" element={<WriteBook />} />

				<Route path="/analytics-publication" element={<AnalyticsPublication />} />

				<Route path="/communities" element={<Communities />} />
				<Route path="/communities/join/:id" element={<JoinCommunity />} />
				<Route path="/community-details" element={<CommunityDetails />} />
				<Route path="/communities/create" element={<CreateCommunity />} />

				<Route path="/messages" element={<Messages />} />
				
				<Route path="/notifications" element={<Notifications />} />

				<Route path="/user-profile" element={<UserProfile />} />

				<Route path="/support" element={<Support/>} />
				
				<Route path="*" element={<h2>Page Not Found</h2>} />
			</Routes>
			<ToastContainer />
		</>
	);
}

export default App;
