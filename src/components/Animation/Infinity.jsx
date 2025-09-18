import { useId } from "react";

export default function InfinityFlow({ className }) {
  const gid = useId().replace(/:/g, "");
  const gradId = `grad-${gid}`;
  const pathId = `path-${gid}`;
  const shineId = `shine-${gid}`;

  // ViewBox adjusted for better spacing
  return (
    <div className={`w-full ${className || ''}`}>
      <svg
        viewBox="0 0 1600 900"
        className="w-full h-auto"
        aria-label="Discover, Define, Deliver animated infinity flow"
      >
        <defs>
          <linearGradient id={gradId} x1="200" x2="1400" y1="0" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F6C23E" />
            <stop offset="18%" stopColor="#F59E0B" />
            <stop offset="40%" stopColor="#F3A58E" />
            <stop offset="55%" stopColor="#F7E8BE" />
            <stop offset="75%" stopColor="#BFAEFF" />
            <stop offset="100%" stopColor="#9D8CFF" />
            <animateTransform attributeName="gradientTransform" type="translate" values="0 0; 140 0; 0 0; -140 0; 0 0" dur="9s" repeatCount="indefinite" />
          </linearGradient>

          {/* Subtle highlight that sweeps along the ribbon */}
          <linearGradient id={shineId} x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* Motion path reused by sparkles - adjusted for better spacing */}
          <path
            id={pathId}
            d="M 200 450 C 200 250 450 230 600 400 C 750 570 950 570 1100 400 C 1250 230 1400 250 1400 450 C 1400 650 1250 670 1100 500 C 950 330 750 330 600 500 C 450 670 200 650 200 450"
            fill="none"
          />
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* Background panel */}
        <rect x="40" y="60" width="full" height="780" rx="36" fill="#F6F7FB" />

        {/* Ribbon base */}
        <use href={`#${pathId}`} stroke="#E6E8F0" strokeWidth="64" opacity="0.5" />
        <use
          href={`#${pathId}`}
          stroke={`url(#${gradId})`}
          strokeWidth="64"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#softShadow)"
        />

        {/* Sweeping shine effect - this creates the animated highlight */}
        <use
          href={`#${pathId}`}
          stroke={`url(#${shineId})`}
          strokeWidth="68"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.4"
        >
          <animate
            attributeName="stroke-dasharray"
            values="120 1800; 360 1560; 120 1800"
            dur="9s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-dashoffset"
            values="0; -900; 0"
            dur="9s"
            repeatCount="indefinite"
          />
        </use>

        {/* Sparkles moving along the path - these create the moving star effects */}
        {Array.from({ length: 6 }).map((_, i) => (
          <g key={i} opacity="0.9">
            <path
              d="M0 -6 L1.6 -1.6 L6 0 L1.6 1.6 L0 6 L-1.6 1.6 L-6 0 L-1.6 -1.6 Z"
              fill={i % 2 === 0 ? "#FFE08A" : "#B7A5FF"}
            >
              <animate
                attributeName="opacity"
                values="0;1;0"
                dur="2.2s"
                begin={`${i * 0.7}s`}
                repeatCount="indefinite"
              />
            </path>
            <animateMotion
              dur={`${7 + i * 0.4}s`}
              begin={`${i * 0.6}s`}
              rotate="auto"
              repeatCount="indefinite"
            >
              <mpath xlinkHref={`#${pathId}`} />
            </animateMotion>
          </g>
        ))}

        {/* Top pins and labels - better spaced */}
        {[
          { x: 350, y: 200, text: ["Goal setting and", "management"] },
          { x: 800, y: 180, text: ["Org design and", "strategy"] },
          { x: 1250, y: 200, text: ["Customer journey", "mapping"] },
        ].map((item, idx) => (
          <g key={`top-${idx}`}>
            <circle cx={item.x} cy={280} r="8" fill="#F6F7FB" stroke="#C9CFDE" strokeWidth="4" />
            <line x1={item.x} y1={280} x2={item.x} y2={320} stroke="#C9CFDE" strokeWidth="3" />
            <text
              x={item.x}
              y={item.y}
              textAnchor="middle"
              fontFamily="Inter, ui-sans-serif"
              fontSize="22"
              fill="#4B5563"
            >
              {item.text.map((line, i) => (
                <tspan key={i} x={item.x} dy={i === 0 ? 0 : 26}>
                  {line}
                </tspan>
              ))}
            </text>
          </g>
        ))}

        {/* Bottom pins and labels - properly spaced to avoid overlap */}
        {[
          { x: 280, y: 720, text: ["Customer insights", "and feedback"] },
          { x: 480, y: 720, text: ["Product planning", "and roadmapping"] },
          { x: 680, y: 720, text: ["Technical", "design"] },
          { x: 850, y: 720, text: ["Prototyping"] },
          { x: 1020, y: 720, text: ["Sprint", "planning"] },
          { x: 1220, y: 720, text: ["Project", "execution"] },
        ].map((item, idx) => (
          <g key={`bottom-${idx}`}>
            <circle cx={item.x} cy={620} r="8" fill="#F6F7FB" stroke="#C9CFDE" strokeWidth="4" />
            <line x1={item.x} y1={580} x2={item.x} y2={620} stroke="#C9CFDE" strokeWidth="3" />
            <text
              x={item.x}
              y={item.y}
              textAnchor="middle"
              fontFamily="Inter, ui-sans-serif"
              fontSize="20"
              fill="#6B7280"
            >
              {Array.isArray(item.text) ? (
                item.text.map((line, i) => (
                  <tspan key={i} x={item.x} dy={i === 0 ? 0 : 22}>
                    {line}
                  </tspan>
                ))
              ) : (
                item.text
              )}
            </text>
          </g>
        ))}

        {/* Section titles - corrected order: Discover -> Define -> Deliver */}
        <text x="400" y="450" textAnchor="middle" fontFamily="Inter, ui-sans-serif" fontSize="52" fontWeight="600" fill="#374151">
          Discover
        </text>
        <text x="850" y="455" textAnchor="middle" fontFamily="Inter, ui-sans-serif" fontSize="52" fontWeight="600" fill="#374151">
          Define
        </text>
        <text x="1250" y="450" textAnchor="middle" fontFamily="Inter, ui-sans-serif" fontSize="52" fontWeight="600" fill="#374151">
          Deliver
        </text>
      </svg>
    </div>
  );
}