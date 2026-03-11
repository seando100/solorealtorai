export default function SoloRealtorLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden="true">
        <circle cx="5.5" cy="5.5" r="4.5" fill="#0F2745"/>
        <circle cx="16" cy="5.5" r="4.5" fill="#0F2745"/>
        <circle cx="26.5" cy="5.5" r="4.5" fill="#0F2745"/>
        <circle cx="5.5" cy="16" r="4.5" fill="#0F2745"/>
        <circle cx="16" cy="16" r="4.5" fill="#3B82F6"/>
        <circle cx="26.5" cy="16" r="4.5" fill="#0F2745"/>
        <circle cx="5.5" cy="26.5" r="4.5" fill="#0F2745"/>
        <circle cx="16" cy="26.5" r="4.5" fill="#0F2745"/>
        <circle cx="26.5" cy="26.5" r="4.5" fill="#0F2745"/>
      </svg>
      <span className="text-xl font-semibold tracking-tight text-[#0F2745]">
        Solo<span className="text-[#3B82F6]">Realtor</span>AI
      </span>
    </div>
  );
}
