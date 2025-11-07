import { LoaderIcon } from "lucide-react";

export function PendingCard() {
	return (
		<div className="flex min-h-screen w-full items-center justify-center">
			<div className="card flex w-full max-w-md items-center justify-center">
				<LoaderIcon className="h-20 w-20 animate-spin" />
			</div>
		</div>
	);
}
