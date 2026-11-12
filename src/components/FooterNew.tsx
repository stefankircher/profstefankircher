import React from "react";

export const FooterNew: React.FC = () => {
  return (
    <footer className="bg-[#111827] text-[#9CA3AF] py-8 text-center text-xs">
      <div className="max-w-3xl mx-auto px-4 space-y-2">
        <p>
          Prof. Stefan Kircher © {new Date().getFullYear()} – Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
