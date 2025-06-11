import React, { useState } from 'react';
import { X, Phone } from 'lucide-react';

const medicalEquipment = [
  {
    id: 1,
    name: "Ultrasound Scanner",
    price: "25,000,000 so'm",
    description: "Professional ultrasound scanner with advanced imaging capabilities for comprehensive diagnostics.",
    category: "Diagnostika",
    stock: "Omborda mavjud",
    details: "High-resolution imaging, multiple probes included, portable design",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop"
  },
  {
    id: 2,
    name: "ECG Machine",
    price: "8,500,000 so'm",
    description: "12-lead ECG machine for cardiac monitoring and diagnosis.",
    category: "Kardiologiya",
    stock: "Buyurtma asosida",
    details: "Digital display, automatic interpretation, thermal printer",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop"
  },
  {
    id: 3,
    name: "X-Ray Machine",
    price: "45,000,000 so'm",
    description: "Digital X-ray system with high-quality imaging capabilities.",
    category: "Radiologiya",
    stock: "Omborda mavjud",
    details: "Digital imaging, low radiation dose, fast processing",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop"
  },
  {
    id: 4,
    name: "Defibrillator",
    price: "12,000,000 so'm",
    description: "Emergency defibrillator for cardiac resuscitation.",
    category: "Reanimatologiya",
    stock: "Omborda mavjud",
    details: "Automatic mode, voice prompts, portable design",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=300&h=200&fit=crop"
  },
  {
    id: 5,
    name: "Ventilator",
    price: "35,000,000 so'm",
    description: "Advanced mechanical ventilator for respiratory support.",
    category: "Reanimatologiya",
    stock: "Buyurtma asosida",
    details: "Multiple ventilation modes, touch screen, battery backup",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=300&h=200&fit=crop"
  },
  {
    id: 6,
    name: "Patient Monitor",
    price: "15,000,000 so'm",
    description: "Multi-parameter patient monitoring system.",
    category: "Monitoring",
    stock: "Omborda mavjud",
    details: "ECG, SpO2, NIBP, temperature monitoring",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&h=200&fit=crop"
  },
  {
    id: 7,
    name: "Surgical Table",
    price: "18,000,000 so'm",
    description: "Electric surgical table with multiple positioning options.",
    category: "Jarrohlik",
    stock: "Omborda mavjud",
    details: "Electric positioning, memory settings, radiolucent",
    image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=300&h=200&fit=crop"
  },
  {
    id: 8,
    name: "Anesthesia Machine",
    price: "28,000,000 so'm",
    description: "Advanced anesthesia workstation with monitoring.",
    category: "Anesteziologiya",
    stock: "Buyurtma asosida",
    details: "Integrated monitoring, vaporizers, ventilator",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=200&fit=crop"
  }
];

const ProductCard = ({ product, onViewDetails, isActive }) => (
  <div className={`bg-card border border-border rounded p-1.5 transition-all duration-300 hover:shadow-md hover:border-primary/50 cursor-pointer ${isActive ? 'border-primary shadow-sm' : ''}`}>
    <img 
      src={product.image} 
      alt={product.name}
      className="w-full h-12 object-cover rounded mb-1"
    />
    <h3 className="font-medium text-xs text-card-foreground mb-0.5 line-clamp-1">{product.name}</h3>
    <p className="text-primary font-semibold text-xs mb-1">{product.price}</p>
    <button 
      onClick={() => onViewDetails(product)}
      className="w-full bg-primary text-primary-foreground text-xs py-1 px-2 rounded hover:bg-primary/90 transition-colors"
    >
      Batafsil
    </button>
  </div>
);

const ProductDetails = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="bg-card border border-border rounded-lg p-6 h-full overflow-y-auto">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl font-bold text-card-foreground">{product.name}</h2>
        <button 
          onClick={onClose}
          className="p-1 hover:bg-muted rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>
      
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      
      <div className="space-y-3">
        <div>
          <span className="text-2xl font-bold text-primary">{product.price}</span>
        </div>
        
        <div>
          <h4 className="font-semibold text-card-foreground mb-1">Tavsif:</h4>
          <p className="text-muted-foreground text-sm">{product.description}</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-card-foreground mb-1">Kategoriya:</h4>
            <p className="text-muted-foreground text-sm">{product.category}</p>
          </div>
          <div>
            <h4 className="font-semibold text-card-foreground mb-1">Holati:</h4>
            <p className="text-muted-foreground text-sm">{product.stock}</p>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-card-foreground mb-1">Texnik xususiyatlar:</h4>
          <p className="text-muted-foreground text-sm">{product.details}</p>
        </div>
        
        <a 
          href="tel:+998911116014"
          className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors mt-4"
        >
          <Phone className="w-4 h-4" />
          Biz bilan bog'lanish
        </a>
      </div>
    </div>
  );
};

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-foreground text-center mb-6">
          Tibbiy Uskunalar Katalogi
        </h1>
        
        <div className="flex gap-4 h-[calc(100vh-8rem)]">
          {/* Product Grid - Single Column */}
          <div className="w-56 flex-shrink-0">
            <div className="grid grid-cols-1 gap-1.5 h-full">
              {medicalEquipment.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onViewDetails={setSelectedProduct}
                  isActive={selectedProduct?.id === product.id}
                />
              ))}
            </div>
          </div>
          
          {/* Product Details */}
          <div className="flex-1">
            {selectedProduct ? (
              <ProductDetails 
                product={selectedProduct} 
                onClose={() => setSelectedProduct(null)} 
              />
            ) : (
              <div className="bg-card border border-border rounded-lg h-full flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                    Mahsulotni tanlang
                  </h3>
                  <p className="text-muted-foreground">
                    Batafsil ma'lumot olish uchun chap tomondagi mahsulotlardan birini tanlang
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;