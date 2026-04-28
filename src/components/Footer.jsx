export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:row justify-between items-center gap-6">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Sabbella Laharika. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
