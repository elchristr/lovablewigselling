import { FileText, MapPin, Users, MessageSquare } from "lucide-react";

export const SupplierPreview = () => {
  const contents = [
    "Lista completa com 15+ fornecedores verificados",
    "Contatos diretos de WhatsApp e telefone",
    "Localização e forma de pagamento de cada um",
    "Guia de negociação para conseguir os melhores preços",
    "Templates de mensagens prontas para enviar",
    "Comparativo de preços entre fornecedores",
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            O Que Você Vai <span className="text-gold">Descobrir</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Conteúdo exclusivo que vai transformar seu negócio
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Preview Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card p-4 rounded-xl space-y-3">
              <MapPin className="w-8 h-8 text-gold" />
              <h4 className="font-semibold">Fornecedores por Região</h4>
              <p className="text-sm text-muted-foreground">
                Encontre os mais próximos de você
              </p>
            </div>
            <div className="glass-card p-4 rounded-xl space-y-3">
              <Users className="w-8 h-8 text-gold" />
              <h4 className="font-semibold">Contatos Diretos</h4>
              <p className="text-sm text-muted-foreground">
                Fale direto com os donos
              </p>
            </div>
            <div className="glass-card p-4 rounded-xl space-y-3">
              <MessageSquare className="w-8 h-8 text-gold" />
              <h4 className="font-semibold">Templates Prontos</h4>
              <p className="text-sm text-muted-foreground">
                Copie e cole para negociar
              </p>
            </div>
            <div className="glass-card p-4 rounded-xl space-y-3">
              <FileText className="w-8 h-8 text-gold" />
              <h4 className="font-semibold">Guias Práticos</h4>
              <p className="text-sm text-muted-foreground">
                Passo a passo completo
              </p>
            </div>
          </div>

          {/* Content List */}
          <div className="space-y-4">
            {contents.map((content, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 glass-card rounded-lg animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gold/20 p-1 rounded-full shrink-0 mt-1">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                </div>
                <p className="text-lg">{content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
