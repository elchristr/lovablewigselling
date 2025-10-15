import { Check, TrendingUp, Package, Truck, Smartphone } from "lucide-react";

export const SolutionSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Margens de 300% ou Mais",
      description: "Compre direto da fonte e revenda com lucro real",
    },
    {
      icon: Package,
      title: "Sem Necessidade de Estoque",
      description: "Trabalhe com dropshipping ou pedidos sob demanda",
    },
    {
      icon: Truck,
      title: "Entrega Rápida Garantida",
      description: "Fornecedores confiáveis com prazos cumpridos",
    },
    {
      icon: Smartphone,
      title: "Gerencie Apenas com o Celular",
      description: "Seu negócio cabe no bolso, trabalhe de onde quiser",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent via-gold/5 to-transparent">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            A <span className="text-gold">Solução</span> Está Aqui
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Imagine ter acesso direto aos mesmos fornecedores que as grandes revendedoras usam...
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="glass-card p-6 sm:p-8 rounded-2xl space-y-3 sm:space-y-4 animate-slide-up hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gold/20 w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center">
                <benefit.icon className="w-6 h-6 sm:w-8 sm:h-8 text-gold" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">{benefit.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground">{benefit.description}</p>
              <div className="flex items-center gap-2 text-gold">
                <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm font-semibold">Incluído no E-book</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
