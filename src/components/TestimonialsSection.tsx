import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Mariana Silva",
      role: "Ex-vendedora",
      avatar: "https://i.postimg.cc/W1PwLSyW/96512892-10158556354441289-5848622576607166464-n.jpg",
      text: "Em 2 meses já tinha feito mais de R$ 15 mil em vendas. Os fornecedores são reais e respondem rápido!",
      rating: 5,
    },
    {
      name: "Juliana Costa",
      role: "Empreendedora",
      avatar: "https://i.postimg.cc/4NPGC2LP/Whats-App-Image-2025-10-10-at-23-14-53-1cb5c544.jpg",
      text: "Consegui sair do meu emprego e hoje trabalho de casa vendendo perucas. Melhor investimento que já fiz!",
      rating: 5,
    },
    {
      name: "Camila Rodrigues",
      role: "Revendedora",
      avatar: "https://i.postimg.cc/NFGXdPPw/Gjc-Lobr-XEAA2-IYd.jpg",
      text: "Os fornecedores que conheci através do e-book me dão preços incríveis. Minha margem de lucro triplicou!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gold/5 to-transparent">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Quem Já Está <span className="text-gold">Lucrando</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Histórias reais de transformação
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-card p-5 sm:p-6 rounded-2xl space-y-3 sm:space-y-4 animate-slide-up hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gold/20"
                />
                <div>
                  <h4 className="font-bold text-sm sm:text-base">{testimonial.name}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-gold text-gold" />
                ))}
              </div>

              <p className="text-sm sm:text-base text-muted-foreground italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
