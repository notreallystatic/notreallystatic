import { socialMediaHandles } from "@/constants";

const EMAIL = "sachin.arbeit@gmail.com";

export default function Footer() {
	return (
		<footer className="w-full">
			<div className="flex flex-row md:flex-col items-center justify-around static md:fixed md:top-16 left-0 md:h-[90vh] z-0 md:z-10">
				{socialMediaHandles.map((socialMedia) => (
					<a
						key={socialMedia.name}
						href={socialMedia.url}
						target="_blank"
						rel="noreferrer"
						className="text-foreground-700 hover:cursor-pointer hover:text-background-400 p-2 mx-4 inline-block"
					>
						<i className={`fab ${socialMedia.icon} fa-2x`} />
					</a>
				))}
				<a
					href={`mailto:` + EMAIL + `?subject=Hello!`}
					className="text-foreground-700 hover:cursor-pointer hover:text-background-400 p-2 inline-block"
				>
					<i className="fas fa-envelope fa-2x" />
				</a>
			</div>
			<div className="text-center font-mono font-thin text-foreground-700 p-2 my-4">
				<p>© 2025 Sachin Kumar</p>
			</div>
		</footer>
	);
}
