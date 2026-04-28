export function WireframePlaceholder() {
  return (
    <div className="w-full h-full bg-gray-900/50 p-4 border border-white/5 rounded-t-xl sm:rounded-tl-none sm:rounded-l-xl flex flex-col gap-3 relative overflow-hidden group">
      {/* Browser/Window Header */}
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
      </div>
      
      {/* Wireframe Layout Lines */}
      <div className="flex gap-4 h-full">
        {/* Sidebar */}
        <div className="w-1/4 h-full flex flex-col gap-3 border-r border-white/5 pr-4">
          <div className="w-full h-4 bg-white/10 rounded-md"></div>
          <div className="w-3/4 h-3 bg-white/5 rounded-md"></div>
          <div className="w-5/6 h-3 bg-white/5 rounded-md"></div>
          <div className="w-4/6 h-3 bg-white/5 rounded-md"></div>
        </div>
        
        {/* Main Content Area */}
        <div className="w-3/4 flex flex-col gap-4">
          {/* Hero Banner */}
          <div className="w-full h-24 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg relative overflow-hidden">
             {/* Animated scanning line effect */}
             <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-primary/50 shadow-[0_0_8px_2px_rgba(59,130,246,0.5)] transform -translate-x-full group-hover:animate-[scan_2s_ease-in-out_infinite]"></div>
          </div>
          
          {/* Content Grid */}
          <div className="flex gap-3 h-full">
            <div className="w-1/2 h-full bg-white/5 rounded-lg"></div>
            <div className="w-1/2 flex flex-col gap-3">
               <div className="w-full h-1/2 bg-white/5 rounded-lg"></div>
               <div className="w-full h-1/2 bg-white/5 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '20px 20px' }}
      ></div>
    </div>
  );
}
