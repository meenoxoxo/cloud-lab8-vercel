export default function Home() {
	return (
		<main
			style={{
				minHeight: "100vh",
				padding: "48px 24px",
				fontFamily: "Arial, sans-serif",
				background: "linear-gradient(180deg, #f8fbff 0%, #eef4ff 100%)",
				color: "#10203a",
			}}
		>
			<section
				style={{
					maxWidth: "760px",
					margin: "0 auto",
					background: "white",
					border: "1px solid #d7e0ef",
					borderRadius: "16px",
					padding: "32px",
					boxShadow: "0 12px 30px rgba(16, 32, 58, 0.08)",
				}}
			>
				<h1 style={{ margin: 0, fontSize: "2rem" }}>Lab 8 - Vercel Deployment</h1>
				<p style={{ marginTop: "12px", marginBottom: "24px", color: "#4b5d79" }}>
					Preview Deployments & Git Branching
				</p>

				<div style={{ marginBottom: "24px" }}>
					<h2 style={{ marginBottom: "12px", fontSize: "1.2rem" }}>Student</h2>
					<p style={{ margin: 0 }}>GitHub username: meenoxoxo</p>
				</div>

				<div>
					<h2 style={{ marginBottom: "12px", fontSize: "1.2rem" }}>Completed Labs</h2>
					<ul style={{ margin: 0, paddingLeft: "20px", lineHeight: 1.8 }}>
						<li>✅ Docker</li>
						<li>✅ LocalStack</li>
						<li>✅ Terraform</li>
						<li>✅ Vercel</li>
					</ul>
				</div>
			</section>
		</main>
	);
}