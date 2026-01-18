export function CertificateFrame({ id }: { id: string }) {
	return (
		<div className="h-120 overflow-x-hidden">
			<iframe
				id={id}
				src={`/certificates/${id}.pdf#toolbar=0`}
				width="100%"
				height="700px"
				className="border-0"
			></iframe>
		</div>
	);
}
