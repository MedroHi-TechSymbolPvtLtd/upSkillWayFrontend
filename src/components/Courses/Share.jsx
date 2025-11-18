import React, { useState, useRef, useEffect } from "react";

const ShareMenu = ({ className = "" }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);
  const url = window.location.href;
  const title = document.title;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !btnRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    const handleEscape = (e) => e.key === "Escape" && setOpen(false);

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const shareOn = (platform) => {
    const u = encodeURIComponent(url);
    const t = encodeURIComponent(title);
    let link = "";

    switch (platform) {
      case "x":
        link = `https://twitter.com/intent/tweet?url=${u}&text=${t}`;
        break;
      case "whatsapp":
        link = `https://api.whatsapp.com/send?text=${t}%20${u}`;
        break;
      case "facebook":
        link = `https://www.facebook.com/sharer/sharer.php?u=${u}`;
        break;
      case "linkedin":
        link = `https://www.linkedin.com/shareArticle?mini=true&url=${u}&title=${t}`;
        break;
      case "telegram":
        link = `https://t.me/share/url?url=${u}&text=${t}`;
        break;
      default:
        return;
    }

    window.open(link, "_blank", "noopener,noreferrer");
  };

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    alert("Link copied!");
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <button
        ref={btnRef}
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 rounded-full border border-gray-300/80 bg-white/80 px-4 py-2 text-sm font-medium text-gray-900 shadow-sm backdrop-blur hover:bg-white"
      >
        {/* Share icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M8.59 13.51a5 5 0 1 1 0-3.02l6.82-3.59a5 5 0 1 1 .81 1.47l-6.82 3.59a5.03 5.03 0 0 1 0 1.05l6.82 3.59a5 5 0 1 1-.81 1.47l-6.82-3.59Z"
          />
        </svg>
        Share
      </button>

      {/* Popover */}
      <div
        ref={menuRef}
        className={`absolute right-0 z-50 mt-2 w-72 origin-top-right rounded-2xl border border-gray-200 bg-white p-3 shadow-xl transition-all ${
          open ? "scale-100 opacity-100" : "scale-90 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-2 pb-2 text-sm text-gray-600">Share this page</div>

        <div className="grid grid-cols-5 gap-2">
          {["x", "whatsapp", "facebook", "linkedin", "telegram"].map((platform) => (
            <button
              key={platform}
              onClick={() => shareOn(platform)}
              className="group rounded-xl border border-gray-200 p-3 hover:bg-gray-100"
            >
              <span className="block">{platform.charAt(0).toUpperCase()}</span>
            </button>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between rounded-xl bg-gray-100 p-2">
          <span className="truncate text-xs text-gray-600">{url}</span>
          <button
            onClick={copyLink}
            className="rounded-lg bg-gray-200 px-3 py-1 text-xs hover:bg-gray-300"
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareMenu;