import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import QueryProvider from "./provider/QueryProvider.js";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</QueryProvider>
	</React.StrictMode>
);
