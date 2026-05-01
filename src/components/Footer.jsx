export default function Footer() {
  return (
    <footer className="py-12 border-t border-black/5 dark:border-white/5 bg-gray-50/50 dark:bg-gray-950/50">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-gray-900 dark:text-white font-bold text-lg tracking-tighter">
            SL<span className="text-primary">.</span>
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-xs">
            © {new Date().getFullYear()} Sabbella Laharika. Built for scalability.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex space-x-6">
            <a href={process.env.NEXT_PUBLIC_PERSONAL_GITHUB} target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm font-medium">GitHub</a>
            <a href={process.env.NEXT_PUBLIC_PERSONAL_LINKEDIN} target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm font-medium">LinkedIn</a>
          </div>
          <p className="text-gray-400 dark:text-gray-600 text-[10px] uppercase tracking-widest font-bold">
            Next.js • Tailwind • Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
