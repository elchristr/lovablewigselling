import { Check } from "lucide-react";

export const ValueStack = () => {
  const items = [
    { name: "E-book Completo com Fornecedores", value: "R$ 197" },
    { name: "Guia de Negociação", value: "R$ 97" },
    { name: "Templates de Mensagens", value: "R$ 67" },
    { name: "Comparativo de Preços", value: "R$ 67" },
    { name: "Suporte por 30 dias", value: "R$ 97" },
  ];

  const totalValue = 525;
  const offerPrice = 29.90;

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent via-gold/5 to-transparent">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Valor <span className="text-gold">Total do Pacote</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Tudo que você vai receber hoje
          </p>
        </div>

        <div className="glass-card p-6 sm:p-8 md:p-12 rounded-2xl space-y-4 sm:space-y-6">
          {items.map((item, index) => (
            <div 
              key={index}
              className="flex items-center justify-between pb-3 sm:pb-4 border-b border-border/50 animate-slide-up gap-3"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="bg-gold/20 p-1 rounded-full shrink-0">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
                </div>
                <span className="text-sm sm:text-base md:text-lg">{item.name}</span>
              </div>
              <span className="text-gold font-semibold text-sm sm:text-base shrink-0">{item.value}</span>
            </div>
          ))}

          <div className="pt-4 sm:pt-6 space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between text-lg sm:text-xl md:text-2xl gap-3">
              <span className="font-semibold">Valor Total:</span>
              <span className="text-muted-foreground line-through">R$ {totalValue}</span>
            </div>
            <div className="flex items-center justify-between text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gap-3">
              <span>Hoje Apenas:</span>
              <span className="text-gold">R$ {offerPrice.toFixed(2)}</span>
            </div>
            <div className="text-center pt-2 sm:pt-4">
              <div className="inline-block bg-gold/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full">
                <span className="text-gold font-bold text-base sm:text-lg md:text-xl">
                  ECONOMIA DE {Math.round((1 - offerPrice / totalValue) * 100)}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
