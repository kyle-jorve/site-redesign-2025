"use client";

import { useContext } from "react";
import { printClassNames, deriveButtonShadowColor } from "@/utils/utils";
import SiteContext from "@/utils/site-context";
import CircleButton, {
	CircleButtonProps,
} from "@/components/global/circle-button";
import styles from "@/styles/components/gallery/projects.module.css";

export type FavButtonProps = {
	projectID: string;
	projectTitle: string;
	color?: CircleButtonProps["color"];
	shadowColor?: CircleButtonProps["shadowColor"];
} & React.HTMLAttributes<HTMLButtonElement>;

export default function FavButton({
	projectID,
	projectTitle,
	color = "light",
	shadowColor = undefined,
	className = "",
	onClick = () => {},
	...otherProps
}: FavButtonProps) {
	const derivedShadowColor = deriveButtonShadowColor(color, shadowColor);
	const { favedProjects, setFavedProjects } = useContext(SiteContext);
	const isFaved = favedProjects.includes(projectID);
	const classes = printClassNames([styles["fave-button"], className]);

	function updateFaves(
		id: string,
		event: React.MouseEvent<HTMLButtonElement>,
	) {
		setFavedProjects((prev) => {
			if (prev.includes(id)) return prev.filter((item) => item !== id);
			return [...prev, id];
		});

		onClick(event);
	}

	return (
		<CircleButton
			className={classes}
			icon={"heart"}
			weight={isFaved ? "solid" : "regular"}
			color={color}
			shadowColor={derivedShadowColor}
			aria-label={`${isFaved ? "remove" : "add"} ${projectTitle} ${
				isFaved ? "from" : "to"
			} favorites`}
			onClick={(event) => updateFaves(projectID, event)}
			{...otherProps}
		/>
	);
}
