import Image from "next/image";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#08090b]">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
        {/* Left - Brand */}
        <div className="flex items-center gap-3">
          {/* Logo Icon */}
        
          {/* Brand */}
          <div className=" flex text-lg font-black tracking-tight text-white">
            <Image src={logo} alt="FITLOG Logo" width={40} height={40} />
            <h2>FILOG</h2>
          </div>
          
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

