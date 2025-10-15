import { X } from "lucide-react";

export const ProblemSection = () => {
  const problems = [
    "Salário mal dá para pagar as contas no fim do mês",
    "Perucas caríssimas nas lojas tradicionais",
    "Sem capital para investir em estoque grande",
    "Presa num emprego que não te valoriza",
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Reconhece Algum Destes <span className="text-gold">Problemas</span>?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Você não está sozinha...
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="glass-card p-4 sm:p-6 rounded-xl flex items-start gap-3 sm:gap-4 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-destructive/20 p-2 rounded-full shrink-0">
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-destructive" />
              </div>
              <p className="text-sm sm:text-base md:text-lg">{problem}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
