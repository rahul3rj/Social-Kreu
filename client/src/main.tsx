import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import Lenis from "@studio-freight/lenis";

createRoot(document.getElementById("root")!).render(<App />);

const lenis = new Lenis({
	duration: 1.2,
	smooth: true,
	smoothWheel: true,
	smoothTouch: true,
});

function raf(time: number) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Smooth-scroll for same-page anchor links
document.addEventListener("click", (e) => {
	const target = (e.target as HTMLElement)?.closest?.("a[href^=\"#\"]") as HTMLAnchorElement | null;
	if (!target) return;
	const href = target.getAttribute("href");
	if (!href || href === "#") return;
	const el = document.querySelector(href);
	if (el) {
		e.preventDefault();
		// lenis.scrollTo accepts an element or a numeric position
		// @ts-ignore -- Lenis types may vary across versions
		lenis.scrollTo(el as Element);
	}
});
