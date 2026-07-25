'use client';

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="px-5 py-2.5 bg-navy-700 text-white text-sm font-body rounded-xl hover:bg-navy-800"
    >
      Print / Save as PDF
    </button>
  );
}
