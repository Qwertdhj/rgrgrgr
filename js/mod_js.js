    function modal(e) {
	let modal = document.createElement("div"), block = e.cloneNode(true);

	Object.assign(modal.style, {
		position: "fixed",
		left: "0px",
		top: "0px",
		width: "100%",
        zindex: "3",
		height: "100%",
		backgroundColor: "rgba(0,0,0,.5)"
	});

	Object.assign(block.style, {
		display: "initial",
		transform: "translate(-50%, calc(-50% + 100px))",
		transition: ".6s opacity, .6s transform"
	});

	modal.appendChild(block);

	document.body.appendChild(modal);

	setTimeout(()=>Object.assign(block.style, {
		opacity: 1,
		transform: "translate(-50%,-50%)"
	}),15);

	modal.addEventListener("click", e => e.target === modal ? document.body.removeChild(modal) : "");
}

showModal.addEventListener("click", ()=>modal(modalBlock));