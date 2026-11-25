import { useEffect, useState } from "react";

const SEEN_KEY = "cs-preloader-seen";

const Preloader = () => {
  const [phase, setPhase] = useState(() => {
    try {
      if (sessionStorage.getItem(SEEN_KEY)) return "done";
    } catch {
      /* storage unavailable: just show it */
    }
    return "show";
  });

  useEffect(() => {
    if (phase === "done") return undefined;
    try {
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {
      /* ignore */
    }
    const quick = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const t1 = setTimeout(() => setPhase("hide"), quick ? 500 : 2300);
    const t2 = setTimeout(() => setPhase("done"), quick ? 800 : 2800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (phase === "done") return null;

  return (
    <div
      role="status"
      aria-label="Loading Circuit Savant"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-navy px-4 text-white transition-opacity duration-500 ${phase === "hide" ? "pointer-events-none opacity-0" : "opacity-100"}`}
    >
      <div className="cs-fade flex flex-col items-center text-center">
        <img src={`${import.meta.env.BASE_URL}logo-mark.png`} alt="" className="h-20 w-auto sm:h-24" />
        <p className="mt-4 text-2xl font-extrabold uppercase tracking-wide sm:text-4xl">
          Circuit <span className="text-brand">Savant</span>
        </p>
        <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:text-xs">Precision Automotive Diagnostics &amp; Repair</p>
      </div>

      <div className="relative mt-12 h-20 w-full max-w-4xl" aria-hidden="true">
        <div className="cs-car absolute bottom-3 left-0 w-36 sm:w-52">
          <svg viewBox="0 0 160 56" className="w-full overflow-visible">
            <defs>
              <linearGradient id="cs-beam" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0" stopColor="#3AAAD8" stopOpacity="0.55" />
                <stop offset="1" stopColor="#3AAAD8" stopOpacity="0" />
              </linearGradient>
            </defs>
            <polygon points="154,35 250,20 250,54 154,40" fill="url(#cs-beam)" />
            <path d="M6 44 L6 36 Q6 31 12 30 L34 27 L52 12 Q55 9 60 9 L100 9 Q106 9 110 13 L126 28 L146 31 Q154 33 154 39 L154 44 Z" fill="#3AAAD8" />
            <path d="M55 15 L74 15 L74 27 L41 27 Z M79 15 L99 15 L114 27 L79 27 Z" fill="#08090B" opacity="0.85" />
            <rect x="146" y="33" width="8" height="4" rx="1.5" fill="#fff" />
            <rect x="6" y="33" width="5" height="4" rx="1.5" fill="#ff5a4d" />
            {[38, 120].map((cx) => (
              <g key={cx}>
                <circle cx={cx} cy="44" r="13" fill="#08090B" />
                <circle cx={cx} cy="44" r="10" fill="#15191d" stroke="#fff" strokeWidth="1.5" />
                <g className="cs-wheel">
                  <circle cx={cx} cy="44" r="3" fill="#fff" />
                  <path d={`M${cx} 35 V53 M${cx - 9} 44 H${cx + 9}`} stroke="#fff" strokeWidth="1.5" />
                </g>
              </g>
            ))}
          </svg>
        </div>
        <div className="absolute inset-x-0 bottom-2 h-px bg-white/25" />
        <div className="cs-road absolute inset-x-0 bottom-0 h-[2px]" />
      </div>
    </div>
  );
};

export default Preloader;
