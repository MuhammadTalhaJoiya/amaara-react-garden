import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  variants: string[];
  badge?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Organic Matcha Powder",
    price: "$32.99",
    image: "https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Premium ceremonial grade matcha powder for sustained energy and mental clarity",
    variants: ["50g", "100g", "200g"],
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Virgin Coconut Oil",
    price: "$18.99",
    image: "https://images.pexels.com/photos/4198017/pexels-photo-4198017.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Cold-pressed virgin coconut oil for cooking, skincare, and wellness",
    variants: ["250ml", "500ml", "1L"]
  },
  {
    id: 3,
    name: "Turmeric Capsules",
    price: "$24.99",
    image: "https://images.pexels.com/photos/4198020/pexels-photo-4198020.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "High-potency turmeric with black pepper for maximum absorption and anti-inflammatory benefits",
    variants: ["60 capsules", "120 capsules", "180 capsules"]
  },
  {
    id: 4,
    name: "Ashwagandha Root",
    price: "$29.99",
    image: "https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Premium ashwagandha root powder for stress relief and adaptogenic support",
    variants: ["100g", "250g", "500g"],
    badge: "New"
  }
];

const FeaturedProducts = () => {
  const [selectedVariants, setSelectedVariants] = useState<{[key: number]: string}>({
    1: "50g",
    2: "250ml", 
    3: "60 capsules",
    4: "100g"
  });

  const handleVariantChange = (productId: number, variant: string) => {
    setSelectedVariants(prev => ({
      ...prev,
      [productId]: variant
    }));
  };

  return (
    <section id="shop" className="section-padding bg-earth-cream">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-earth-brown mb-8">
            Featured <span className="text-organic-green">Products</span>
          </h2>
          <p className="text-xl md:text-2xl text-earth-brown/70 max-w-3xl mx-auto leading-relaxed">
            Discover our most popular organic wellness solutions, 
            carefully crafted for your health journey
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-8xl mx-auto">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-organic transition-all duration-500 hover:-translate-y-3 bg-white border-0 overflow-hidden rounded-3xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-square overflow-hidden">
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10 bg-organic-green text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.badge}
                  </div>
                )}
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6 lg:p-8">
                <h3 className="font-semibold text-xl lg:text-2xl text-earth-brown mb-3">
                  {product.name}
                </h3>
                
                <p className="text-earth-brown/70 mb-6 text-sm lg:text-base leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl lg:text-3xl font-bold text-organic-green">
                    {product.price}
                  </span>
                  
                  {/* Variant Selector */}
                  <select 
                    value={selectedVariants[product.id]}
                    onChange={(e) => handleVariantChange(product.id, e.target.value)}
                    className="bg-earth-cream border-2 border-organic-green/30 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-organic-green focus:border-organic-green transition-all"
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
                  className="w-full text-base"
                  size="lg"
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Products CTA */}
        <div className="text-center mt-16">
          <Button variant="outline" size="xl" className="px-12">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;