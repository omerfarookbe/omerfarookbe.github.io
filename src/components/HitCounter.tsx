import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export const HitCounter = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchHits = async () => {
      try {
        // Using Abacus (https://abacus.jasoncameron.dev/)
        // Namespace: omerfarookbe.github.io
        // Key: visits
        const response = await fetch(
          "https://abacus.jasoncameron.dev/hit/omerfarookbe.github.io/visits"
        );
        const data = await response.json();
        setCount(data.value);
      } catch (error) {
        console.error("Error fetching hit count:", error);
      }
    };

    fetchHits();
  }, []);

  if (count === null) return null;

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/30 border border-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-secondary/50">
      <Eye className="h-3 w-3 text-primary" />
      <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
        {count.toLocaleString()} Views
      </span>
    </div>
  );
};
