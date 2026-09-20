import type { Band } from "../type/bands";

// เติม Type สำหรับรับ Props เพิ่มเติมจาก Parent (BandExplorer)
type BandCardProps = {
  band: Band;
  isFollowing?: boolean;
  likes?: number;
  onToggleFollow?: (id: number) => void;
  onLike?: (id: number) => void;
};

export default function BandCard({
  band,
  isFollowing = false,
  likes = 0,
  onToggleFollow,
  onLike,
}: BandCardProps) {
  if (!band) return null;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 p-6 flex flex-col justify-between transition-all hover:shadow-lg mb-6 band-card">
      <div>
        <img 
          src={band.image} 
          alt={band.name} 
          className="w-full h-80 object-cover object-top rounded-lg mb-4 bg-gray-100 block" 
        />

        <div className="flex justify-between items-start mb-2 gap-2">
          <h3 className="text-2xl font-bold text-gray-800">{band.name}</h3>
          <span className="band-badge shrink-0">{band.genre}</span>
        </div>
        
        <p className="text-sm text-gray-500 mb-5">{band.description}</p>
        
        <div>
          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
            สมาชิกในวง ({band.members ? band.members.length : 0} คน)
          </h4>
          <div className="grid grid-cols-1 gap-2">
            {band.members && band.members.map((member) => (
              <div 
                key={member.id} 
                className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded text-sm border border-gray-100 w-full"
              >
                <div className="flex items-center gap-3 visual-anchor" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {member.avatar && (
                    <img 
                      src={member.avatar} 
                      alt={member.name} 
                      style={{ width: '36px', height: '36px', minWidth: '36px' }}
                      className="rounded-full object-cover border border-gray-200 shrink-0 member-avatar"
                    />
                  )}
                  
                  <span className="font-medium text-gray-700 whitespace-nowrap">{member.name}</span>
                </div>

                <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded shrink-0">
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

     
      <div className="flex gap-3 mt-6 pt-4 border-t border-gray-100">
        <button
          type="button"
          aria-pressed={isFollowing}
          onClick={() => onToggleFollow?.(band.id)}
          className={`flex-1 py-2 px-4 rounded-lg font-medium text-sm transition-colors ${
            isFollowing
              ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
              : "bg-emerald-600 text-white hover:bg-emerald-700"
          }`}
        >
          {isFollowing ? "💚 กำลังติดตาม" : "➕ ติดตาม"}
        </button>

        <button
          type="button"
          onClick={() => onLike?.(band.id)}
          className="flex items-center gap-1.5 py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium text-sm transition-colors"
        >
          <span>👍 Like</span>
          <span className="bg-white px-2 py-0.5 rounded-full text-xs font-bold text-gray-600">
            {likes}
          </span>
        </button>
      </div>
    </div>
  );
}