
"use client";

interface ToastProps {
  message: string;
  onClose: () => void;
}

const Toast = ({ message, onClose }: ToastProps) => {
  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <div className="flex items-center gap-4 rounded-xl border border-[#ccff00]/40 bg-[#111318] px-5 py-4 shadow-[0_0_30px_rgba(204,255,0,0.12)]">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ccff00] text-sm font-black text-black">
          ✓
        </div>

        <p className="text-sm font-semibold text-white">
          {message}
        </p>

        <button
          onClick={onClose}
          className="text-gray-500 transition-colors hover:text-white"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Toast;

