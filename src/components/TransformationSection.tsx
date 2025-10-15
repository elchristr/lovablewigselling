import { ArrowRight } from "lucide-react";

export const TransformationSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Sua <span className="text-gold">Transformação</span> Começa Hoje
          </h2>
        </div>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 items-center">
          {/* Before */}
          <div className="glass-card p-6 sm:p-8 rounded-2xl space-y-4 sm:space-y-6 opacity-60 hover:opacity-100 transition-opacity">
            <div className="text-center">
              <div className="inline-block bg-destructive/20 px-4 sm:px-6 py-2 rounded-full mb-4">
                <span className="text-destructive font-bold text-sm sm:text-base">ANTES</span>
              </div>
            </div>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-xl sm:text-2xl">😓</span>
                <span className="text-sm sm:text-base">Trabalhando 8h+ por dia no emprego</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl sm:text-2xl">💸</span>
                <span className="text-sm sm:text-base">Ganhando salário fixo limitado</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl sm:text-2xl">⏰</span>
                <span className="text-sm sm:text-base">Sem tempo para família</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl sm:text-2xl">😔</span>
                <span className="text-sm sm:text-base">Dependente de um único patrão</span>
              </li>
            </ul>
          </div>

          <div className="flex justify-center md:block">
            <div className="bg-gold/20 p-3 sm:p-4 rounded-full rotate-90 md:rotate-0">
              <ArrowRight className="w-8 h-8 sm:w-12 sm:h-12 text-gold" />
            </div>
          </div>

          {/* After */}
          <div className="glass-card p-6 sm:p-8 rounded-2xl space-y-4 sm:space-y-6 gold-border animate-pulse-glow">
            <div className="text-center">
              <div className="inline-block bg-gold/20 px-4 sm:px-6 py-2 rounded-full mb-4">
                <span className="text-gold font-bold text-sm sm:text-base">DEPOIS</span>
              </div>
            </div>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-xl sm:text-2xl">😊</span>
                <span className="text-sm sm:text-base font-semibold">Dona do seu próprio negócio</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl sm:text-2xl">💰</span>
                <span className="text-sm sm:text-base font-semibold">Renda ilimitada e crescente</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl sm:text-2xl">🏠</span>
                <span className="text-sm sm:text-base font-semibold">Trabalha de casa ou onde quiser</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl sm:text-2xl">🎯</span>
                <span className="text-sm sm:text-base font-semibold">Liberdade e independência total</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
