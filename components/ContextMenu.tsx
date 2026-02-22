
import React, { useEffect, useRef } from 'react';

export type MenuType = 'text' | 'image' | 'video' | 'none';

interface Action {
  label: string;
  icon: string;
  onClick: () => void;
  danger?: boolean;
}

interface ContextMenuProps {
  x: number;
  y: number;
  type: MenuType;
  content: string;
  onClose: () => void;
  actions: Action[];
}

const ContextMenu: React.FC<ContextMenuProps> = ({ x, y, type, onClose, actions }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  // Adjust menu position if it goes off screen
  const adjustedX = Math.min(x, window.innerWidth - 220);
  const adjustedY = Math.min(y, window.innerHeight - (actions.length * 50 + 20));

  return (
    <div
      ref={menuRef}
      className="fixed z-[300] w-52 bg-slate-950/90 backdrop-blur-2xl border border-slate-800 rounded-2xl shadow-3xl overflow-hidden animate-in fade-in zoom-in-95 duration-100"
      style={{ left: adjustedX, top: adjustedY }}
    >
      <div className="py-2">
        <div className="px-4 py-1.5 mb-1 border-b border-slate-900 flex items-center justify-between">
          <span className="text-[9px] font-black font-mono text-slate-600 uppercase tracking-widest">
            {type}_Control
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></div>
        </div>
        {actions.map((action, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              action.onClick();
              onClose();
            }}
            className={`w-full px-4 py-3 flex items-center gap-3 text-left transition-all hover:bg-cyan-500/10 group ${
              action.danger ? 'text-red-400 hover:bg-red-500/10' : 'text-slate-300'
            }`}
          >
            <i className={`fa-solid ${action.icon} w-4 text-[12px] ${action.danger ? 'text-red-500' : 'text-cyan-500/60 group-hover:text-cyan-400'}`}></i>
            <span className="text-xs font-bold uppercase tracking-wider">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ContextMenu;
