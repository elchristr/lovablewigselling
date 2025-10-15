import { Button } from "@/components/ui/button";
import { Shield, Lock, Zap } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-gold/10 via-transparent to-transparent opacity-30" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
              ELAS ME ODEIAM POR{" "}
              <span className="text-gold">REVELAR ISSO...</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground">
              Os fornecedores secretos que as{" "}
              <span className="text-gold font-semibold">'rainhas das perucas'</span>{" "}
              escondem.
            </p>

            {/* Price Anchor */}
            <div className="glass-card p-4 sm:p-6 rounded-2xl space-y-2 sm:space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-3">
                <span className="text-xl sm:text-2xl text-muted-foreground line-through">R$ 267,40</span>
                <span className="text-4xl sm:text-5xl font-bold text-gold">R$ 29,90</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Oferta por tempo limitado - 89% OFF
              </p>
            </div>

            {/* CTA Button */}
            <Button 
              variant="hero" 
              size="lg"
              className="w-full md:w-auto"
              onClick={() => window.open('https://pay.hotmart.com/W102110570S?sck=HOTMART_PRODUCT_PAGE&off=454cvw57&hotfeature=32&_gl=1*j144gn*_gcl_au*MTg4MzQzMjUwMS4xNzU4MTcxMTg3*_ga*MTQyMTE2NTc2Ni4xNzU4MTcxMTg3*_ga_GQH2V1F11Q*czE3NTkwMjIxNDckbzUkZzAkdDE3NTkwMjIxNDckajYwJGwwJGgw&bid=1759022152313', '_blank')}
            >
              DESBLOQUEAR ACESSO
            </Button>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4">
              <div className="flex flex-col items-center text-center space-y-1 sm:space-y-2">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-gold" />
                <span className="text-[10px] sm:text-xs text-muted-foreground">Acesso Imediato</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-1 sm:space-y-2">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-gold" />
                <span className="text-[10px] sm:text-xs text-muted-foreground">Compra Segura</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-1 sm:space-y-2">
                <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-gold" />
                <span className="text-[10px] sm:text-xs text-muted-foreground">Privacidade Garantida</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative gold-border rounded-2xl overflow-hidden group">
              <img 
                src="https://i.postimg.cc/zvYFxMmQ/ppp.webp" 
                alt="Fornecedores de Perucas Premium"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
