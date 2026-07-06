import { ReactNode } from 'react';

type GlassCardProps={children:ReactNode;className?:string};

export default function GlassCard({children,className=''}:GlassCardProps){
 return (
  <div className={`rounded-[28px] border border-white/10 bg-white/70 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] ${className}`}>
    {children}
  </div>
 );
}
