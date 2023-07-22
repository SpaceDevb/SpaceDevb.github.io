// Header
gsap.from(".header", { duration: 1.5, y: "-100%", opacity: 0, ease: "slow" });

// Hero
gsap.from(".hero", {
	duration: 2,
	x: "-100%",
	opacity: 0,
	ease: "back",
	delay: 0.5,
});

// Footer
gsap.from(".footer", { duration: 1.5, y: "100%", opacity: 0, ease: "slow" });

// About
gsap.from(".hero__about", {
	duration: 2,
	x: "100",
	opacity: 0,
	ease: "expo",
	delay: 1,
});

// Projects
gsap.from(".projects", { duration: 1.5, y: "100", opacity: 0, ease: "circ" });
gsap.from(".project", {
	stagger: 1,
	duration: 1,
	y: "100",
	opacity: 0,
	ease: "expo",
});
