import { useEffect, useState } from "react";

export function useIntersectionObserver(
	ref: React.RefObject<HTMLElement | HTMLDivElement | null>,
) {
	const [intersected, setIntersected] = useState<boolean>(false);

	useEffect(() => {
		const el = ref?.current;
		let io: IntersectionObserver | null = new IntersectionObserver(
			ioCallback,
		);

		function ioCallback(
			entries: IntersectionObserverEntry[],
			observer: IntersectionObserver,
		) {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setIntersected(true);
					observer.disconnect();
				}
			});
		}

		if (el) io.observe(el);

		return () => {
			io?.disconnect();
			io = null;
		};
	}, [ref]);

	return intersected;
}
