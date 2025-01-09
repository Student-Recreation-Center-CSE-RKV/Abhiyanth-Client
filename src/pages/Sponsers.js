import React from "react";
import Brochure from "../components/sponsers/Broucher";
import GradientBorderComponent from "../components/general/GradientBorderComponet";
import WhatsAbhiyanth from "../components/sponsers/WhatsAbhiyanth";
import WhatsInAbiyanth from "../components/sponsers/WhatsInAbiyanth";

export default function Sponsers() {
	return (
		<div>
			<WhatsAbhiyanth />
			<GradientBorderComponent />

			<Brochure />
			<GradientBorderComponent />
			<WhatsInAbiyanth />
		</div>
	);
}
