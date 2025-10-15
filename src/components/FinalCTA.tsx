import { Button } from "@/components/ui/button";
import { Lock, Download, Zap } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-t from-gold/10 to-transparent">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-card p-6 sm:p-8 md:p-12 rounded-2xl space-y-6 sm:space-y-8 text-center gold-border">
          <div className="space-y-3 sm:space-y-4 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Está Pronta para <span className="text-gold">Mudar de Vida</span>?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Por apenas <span className="text-gold font-bold">R$ 29,90</span>, você terá acesso 
              imediato aos fornecedores que podem transformar sua realidade financeira
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 sm:gap-4">
            <Button 
              variant="hero" 
              size="lg"
              className="text-base sm:text-lg md:text-xl px-8 sm:px-12 py-5 sm:py-6 w-full sm:w-auto"
              onClick={() => window.open('https://pay.hotmart.com/W102110570S?sck=HOTMART_PRODUCT_PAGE&off=454cvw57&hotfeature=32&_gl=1*j144gn*_gcl_au*MTg4MzQzMjUwMS4xNzU4MTcxMTg3*_ga*MTQyMTE2NTc2Ni4xNzU4MTcxMTg3*_ga_GQH2V1F11Q*czE3NTkwMjIxNDckbzUkZzAkdDE3NTkwMjIxNDckajYwJGwwJGgw&bid=1759022152313', '_blank')}
            >
              QUERO MEU ACESSO AGORA
            </Button>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Pagamento único • Acesso vitalício • Garantia de 30 dias
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-8">
            <div className="flex flex-col items-center space-y-1 sm:space-y-2">
              <Download className="w-6 h-6 sm:w-8 sm:h-8 text-gold" />
              <span className="text-xs sm:text-sm">Download Imediato</span>
            </div>
            <div className="flex flex-col items-center space-y-1 sm:space-y-2">
              <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-gold" />
              <span className="text-xs sm:text-sm">Pagamento 100% Seguro</span>
            </div>
            <div className="flex flex-col items-center space-y-1 sm:space-y-2">
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-gold" />
              <span className="text-xs sm:text-sm">Comece Hoje Mesmo</span>
            </div>
          </div>

          <div className="pt-6 sm:pt-8 border-t border-border/50">
            <p className="text-sm sm:text-base md:text-lg">
              <span className="text-gold font-bold">Última chance:</span> O preço volta para R$ 267,40 em breve
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
