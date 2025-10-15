import { TrendingUp, Users, Calendar } from "lucide-react";

export const SuccessStats = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "R$ 8.450",
      label: "Lucro Médio no 1º Mês",
    },
    {
      icon: Users,
      value: "94%",
      label: "Taxa de Sucesso",
    },
    {
      icon: Calendar,
      value: "7 dias",
      label: "Média para 1ª Venda",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Resultados <span className="text-gold">Comprovados</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Números reais de quem seguiu o método
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="glass-card p-6 sm:p-8 rounded-2xl text-center space-y-3 sm:space-y-4 animate-slide-up hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex bg-gold/20 p-3 sm:p-4 rounded-full">
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-gold" />
              </div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold">{stat.value}</div>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center glass-card p-6 sm:p-8 rounded-2xl max-w-3xl mx-auto">
          <p className="text-lg sm:text-xl">
            <span className="text-gold font-bold">Mais de 2.000 mulheres</span> já transformaram suas vidas com este e-book
          </p>
        </div>
      </div>
    </section>
  );
};
