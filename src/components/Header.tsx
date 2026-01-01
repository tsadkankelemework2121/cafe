import { ChevronLeft } from 'lucide-react';

interface HeaderProps {
  onBack?: () => void;
  title?: string;
  showBackButton?: boolean;
}

export default function Header({ onBack, title, showBackButton = false }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-[#3D2817] to-[#4A3426] text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-5 md:py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {showBackButton && (
              <button
                onClick={onBack}
                className="p-2.5 hover:bg-white/10 rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
                aria-label="Go back"
              >
                <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
              </button>
            )}
            <div>
              {title ? (
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h1>
              ) : (
                <>
                  <h1 className="text-3xl md:text-4xl font-bold tracking-wide">La Maison</h1>
                  <p className="text-sm md:text-base text-amber-100/90 mt-1">Fine Dining Experience</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
