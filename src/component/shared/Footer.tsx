
const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#08090b]">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
        {/* Left - Brand */}
        <div className="flex items-center gap-3">
          {/* Logo Icon */}
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ccff00]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-black"
            >
              <path
                d="M13.5 2L5 13H11L10.5 22L19 11H13L13.5 2Z"
                fill="currentColor"
              />
            </svg>
          </div>

          {/* Brand */}
          <span className="text-lg font-black tracking-tight text-white">
            FIT<span className="text-[#ccff00]">LOG</span>
          </span>
        </div>

        {/* Right - Copyright */}
        <p className="text-center text-xs text-gray-500 sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

