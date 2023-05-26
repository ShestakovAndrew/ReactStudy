import React from 'react';
import ReactDOM from "react-dom";

function PortalDemo() {
	return ReactDOM.createPortal(
		<h1>Демо портала</h1>,
		document.getElementById('portal-root')
	)
}

export default PortalDemo;