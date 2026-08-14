export default function Footer() {
	return (
		<footer className="border-t border-slate-800 mt-12 py-8">
			<div className="max-w-7xl mx-auto px-4 text-center space-y-3">
				<div className="text-sm text-slate-400">S&L COMMERCIAL WRAPS</div>
				<div className="flex flex-wrap justify-center items-center gap-3">
					<a href="https://www.instagram.com/slcommercialwraps" target="_blank" rel="noreferrer" className="text-pink-400">Instagram</a>
					<a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="text-blue-400">Facebook</a>
					<a href="mailto:slcommercialwraps@gmail.com" className="text-slate-200">slcommercialwraps@gmail.com</a>
				</div>
				<div className="text-xs text-slate-500">© {new Date().getFullYear()} S&L Commercial Wraps</div>
			</div>
		</footer>
	);
}
