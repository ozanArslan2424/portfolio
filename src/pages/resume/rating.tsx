export function Rating({ value }: { value: number }) {
	return (
		<div className="flex items-center gap-0.5">
			{Array.from({ length: value }, (_, i) => (
				<svg
					key={i}
					width="14"
					height="14"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="border-accent rounded-full border"
				>
					<circle cx="12" cy="12" r="8" stroke="var(--accent)" strokeWidth="10" fill="white" />
					<circle cx="12" cy="12" r="7" fill="var(--accent)" />
				</svg>
			))}

			{Array.from({ length: 5 - value }, (_, i) => (
				<svg
					key={i}
					width="14"
					height="14"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="border-accent rounded-full border"
				/>
			))}
		</div>
	);
}
