import { useState, useEffect } from "react";
import { Shield } from "lucide-react";

export const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gold/5 to-transparent">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-card p-8 md:p-12 rounded-2xl space-y-8 text-center">
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold">
              ⚠️ Esta Oferta Expira em:
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-xl mx-auto">
            <div className="glass-card p-3 sm:p-6 rounded-xl space-y-1 sm:space-y-2">
              <div className="text-3xl sm:text-5xl md:text-6xl font-bold text-gold animate-pulse-glow">
                {String(timeLeft.hours).padStart(2, "0")}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">HORAS</div>
            </div>
            <div className="glass-card p-3 sm:p-6 rounded-xl space-y-1 sm:space-y-2">
              <div className="text-3xl sm:text-5xl md:text-6xl font-bold text-gold animate-pulse-glow">
                {String(timeLeft.minutes).padStart(2, "0")}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">MINUTOS</div>
            </div>
            <div className="glass-card p-3 sm:p-6 rounded-xl space-y-1 sm:space-y-2">
              <div className="text-3xl sm:text-5xl md:text-6xl font-bold text-gold animate-pulse-glow">
                {String(timeLeft.seconds).padStart(2, "0")}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">SEGUNDOS</div>
            </div>
          </div>

          <div className="pt-8 space-y-6">
            <div className="inline-flex items-center gap-3 bg-gold/20 px-6 py-3 rounded-full">
              <Shield className="w-6 h-6 text-gold" />
              <span className="font-semibold">Garantia de 30 Dias</span>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Se você não conseguir encontrar fornecedores ou não ficar satisfeita por qualquer motivo, 
              devolvemos <span className="text-gold font-bold">100% do seu dinheiro</span>. Sem perguntas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
