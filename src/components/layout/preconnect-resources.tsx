"use client";

import ReactDOM from "react-dom";

export default function PreconnectResources() {
	ReactDOM.preconnect("https://fonts.googleapis.com");
	ReactDOM.preconnect("https://fonts.gstatic.com", { crossOrigin: "" });

	return null;
}
