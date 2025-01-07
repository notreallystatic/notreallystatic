export default function Contact() {
	return (
		<div id="contact" className="col-span-12 scroll-offset mt-14 mb-6">
			<h1 className="text-5xl font-bold font-mono">Get in touch</h1>
			<p className="text-lg font-light py-2">
				Thank you for visiting my portfolio! I&apos;d love to hear from you.
				Whether you have a project idea, a job opportunity, or just want to
				connect, feel free to reach out. Use the form below or drop me an email,
				and I’ll get back to you as soon as possible!
			</p>
			<div className="w-full md:w-1/2 mx-auto ">
				<form
					action="https://formspree.io/f/xeoopppj"
					method="POST"
					className="text-center"
				>
					<input
						type="text"
						placeholder="Name"
						name="name"
						className="border-b-2 transition-colors ease-in duration-150 border-foreground-300 focus:border-foreground-500 outline-none w-full p-2 my-2"
					/>
					<input
						type="email"
						placeholder="Email"
						name="email"
						className="border-b-2 transition-colors ease-in duration-150 border-foreground-300 focus:border-foreground-500 outline-none w-full p-2 my-2"
					/>
					<textarea
						placeholder="Message"
						name="message"
						className="border-b-2 transition-colors ease-in duration-150 border-foreground-300 focus:border-foreground-500 outline-none w-full p-2 my-2"
					/>
					<button
						type="submit"
						className="bg-background-300 hover:bg-background-200 active:scale-95 font-medium rounded-md p-2 w-40"
					>
						Submit!
					</button>
				</form>
			</div>
		</div>
	);
}
