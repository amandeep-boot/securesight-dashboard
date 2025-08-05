import Navbar from './components/Navbar';
import IncidentPlayer from './components/IncidentPlayer';
import IncidentList from './components/IncidentList';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black-100 text-white flex flex-col relative overflow-hidden">
      {/* Subtle half oval yellow shade background */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 z-0 pointer-events-none"
        style={{
          width: '520px',
          height: '110px',
          background: 'radial-gradient(ellipse 60% 100% at 50% 0%, #FFCC00 10%, transparent 80%)',
          opacity: 0.12,
          filter: 'blur(4px)',
        }}
      />
      <Navbar />
      <div className="flex flex-1 overflow-hidden relative z-10">
        <div className="w-2/3 p-6 flex flex-col">
          <IncidentPlayer />
          {/* Timeline component can go here */}
        </div>
        <div className="w-1/3 p-6 overflow-y-auto">
          <IncidentList />
        </div>
      </div>
    </div>
  );
}
