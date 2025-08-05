
export default function Navbar() {
  return (
    <nav className="w-full h-12 bg-[#18181B] flex items-center justify-between px-8 border-b border-zinc-800">
      {/* Left: Logo */}
      <div className="flex items-center gap-3">
        <span className="font-bold text-lg tracking-wide">SecureSight</span>
      </div>
      {/* Center: Navigation Links */}
      <div className="flex gap-4">
        <NavItem label="Dashboard" active icon="/dashboard.svg" />
        <NavItem label="Camera" icon="/camera.svg" />
        <NavItem label="Screen" icon="/screen.svg" />
        <NavItem label="Incidents" icon="/incidents.svg" />
        <NavItem label="Users" icon="/users.svg" />
      </div>
      {/* Right: User Info */}
      <div className="flex items-center gap-3">
        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="h-8 w-8 rounded-full" />
        <div className="flex flex-col text-right">
          <span className="text-sm font-semibold">Mohammed Aflyn</span>
          <span className="text-xs text-zinc-400">mohammed.aflyn@gmail.com</span>
        </div>
      </div>
    </nav>
  );
}

function NavItem({ label, active, icon }: { label: string; active?: boolean; icon?: string }) {
  return (
    <span
      className={`flex items-center gap-0 text-sm font-medium px-2 py-1 rounded transition-colors ${
        active ? 'text-yellow-400' : 'text-zinc-300 hover:text-yellow-400'
      }`}
      style={{ minWidth: 110 }}
    >
      {icon && (
        <img
          src={icon}
          alt={label}
          className="h-4 w-4 align-middle inline-block"
          style={{ objectFit: 'contain', display: 'inline-block' }}
        />
      )}
      <span className="align-middle">{label}</span>
    </span>
  );
}
