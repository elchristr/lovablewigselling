const SHOW_PRODUCTS_GALLERY = false;
export const ProductsGallery = () => {
  if (!SHOW_PRODUCTS_GALLERY) {
  return null;
}
  const products = [{
    id: 1,
    name: "Peruca Lace Front",
    price: "R$ 45"
  }, {
    id: 2,
    name: "Peruca Longa Ondulada",
    price: "R$ 38"
  }, {
    id: 3,
    name: "Peruca Bob Curto",
    price: "R$ 35"
  }, {
    id: 4,
    name: "Peruca Colorida",
    price: "R$ 42"
  }, {
    id: 5,
    name: "Peruca Lisa Longa",
    price: "R$ 40"
  }, {
    id: 6,
    name: "Peruca Cacheada",
    price: "R$ 48"
  }];
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Exemplos de <span className="text-gold">Produtos</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Alguns dos produtos que você pode revender
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {products.map((product) => (
            <div key={product.id} className="glass-card p-4 rounded-xl text-center">
              <div className="aspect-square bg-gold/10 rounded-lg mb-3" />
              <h4 className="font-semibold text-sm sm:text-base mb-1">{product.name}</h4>
              <p className="text-gold font-bold">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
