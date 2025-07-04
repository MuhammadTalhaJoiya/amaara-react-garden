import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import productAshwagandha from '@/assets/product-ashwagandha.jpg';
import productTurmeric from '@/assets/product-turmeric.jpg';
import productGreenTea from '@/assets/product-green-tea.jpg';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  variants: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Organic Ashwagandha Powder",
    price: "$24.99",
    image: productAshwagandha,
    description: "Premium quality ashwagandha root powder for stress relief and vitality",
    variants: ["100g", "250g", "500g"]
  },
  {
    id: 2,
    name: "Turmeric Capsules",
    price: "$19.99",
    image: productTurmeric,
    description: "High-potency turmeric with black pepper for maximum absorption",
    variants: ["60 capsules", "120 capsules", "180 capsules"]
  },
  {
    id: 3,
    name: "Organic Green Tea",
    price: "$16.99",
    image: productGreenTea,
    description: "Loose leaf organic green tea rich in antioxidants",
    variants: ["50g", "100g", "200g"]
  }
];

const FeaturedProducts = () => {
  const [selectedVariants, setSelectedVariants] = useState<{[key: number]: string}>({
    1: "100g",
    2: "60 capsules", 
    3: "50g"
  });

  const handleVariantChange = (productId: number, variant: string) => {
    setSelectedVariants(prev => ({
      ...prev,
      [productId]: variant
    }));
  };

  return (
    <section id="shop" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-earth-brown mb-6">
            Featured Products
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Discover our most popular organic wellness solutions, 
            carefully crafted for your health journey
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-organic transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-display font-semibold text-xl text-earth-brown mb-2">
                  {product.name}
                </h3>
                
                <p className="text-foreground/70 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-organic-green">
                    {product.price}
                  </span>
                  
                  {/* Variant Selector */}
                  <select 
                    value={selectedVariants[product.id]}
                    onChange={(e) => handleVariantChange(product.id, e.target.value)}
                    className="bg-earth-cream border border-organic-green/20 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-organic-green"
                  >
                    {product.variants.map(variant => (
                      <option key={variant} value={variant}>
                        {variant}
                      </option>
                    ))}
                  </select>
                </div>
                
                <Button 
                  variant="default" 
                  className="w-full"
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Products CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;