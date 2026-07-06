export default function ScrollCinematicBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-zyrvox-dark">
      {/* Clean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zyrvox-dark via-zyrvox-dark-2 to-zyrvox-dark" />
      
      {/* Subtle radial glows for depth */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zyrvox-electric/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zyrvox-gold/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />
    </div>
  )
}
