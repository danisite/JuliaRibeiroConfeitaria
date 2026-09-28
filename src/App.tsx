import React, { useState, useEffect } from 'react';
import { Product, CartItem } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Catalog } from './components/Catalog';
import { ProductModal } from './components/ProductModal';
import { OrderDrawer } from './components/OrderDrawer';
import { AboutSection } from './components/AboutSection';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Check } from 'lucide-react';

const CART_STORAGE_KEY = 'julia_ribeiro_cart_items_v1';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleAddToCart = (item: CartItem) => {
    setCartItems((prev) => {
      // Check if identical item with same portion, flavor, sponge, filling and notes exists
      const existingIdx = prev.findIndex(
        (i) =>
          i.product.id === item.product.id &&
          i.selectedPortion === item.selectedPortion &&
          i.selectedFlavor === item.selectedFlavor &&
          i.selectedSponge === item.selectedSponge &&
          i.selectedFilling === item.selectedFilling &&
          i.selectedCandle === item.selectedCandle &&
          i.cakeInscription === item.cakeInscription &&
          i.customNotes === item.customNotes
      );

      if (existingIdx >= 0) {
        const copy = [...prev];
        copy[existingIdx].quantity += item.quantity;
        return copy;
      }
      return [...prev, item];
    });

    showToast(`"${item.product.name}" adicionado à sua encomenda!`);
  };

  const handleQuickAdd = (product: Product) => {
    // If product has portion choices, flavors, or cake options, open modal
    if (
      (product.portionOptions && product.portionOptions.length > 0) ||
      (product.flavors && product.flavors.length > 0) ||
      (product.spongeOptions && product.spongeOptions.length > 0) ||
      (product.fillingOptions && product.fillingOptions.length > 0)
    ) {
      setSelectedProduct(product);
      return;
    }

    handleAddToCart({
      product,
      quantity: 1,
      finalPrice: product.price,
    });
  };

  const handleUpdateQuantity = (index: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(index);
      return;
    }
    setCartItems((prev) => {
      const copy = [...prev];
      copy[index].quantity = newQty;
      return copy;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
    showToast('Item removido da encomenda.');
  };

  const handleClearCart = () => {
    setCartItems([]);
    showToast('Encomenda esvaziada.');
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.finalPrice * item.quantity,
    0
  );

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FCFAF8] flex flex-col selection:bg-[#F2D8D0] selection:text-[#3D3130]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-5 z-50 bg-[#382B29] text-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2.5 text-xs font-medium animate-in fade-in slide-in-from-top-2 border border-[#63504C]">
          <div className="p-1 rounded-full bg-[#2E6B4F]">
            <Check className="w-3 h-3 text-white" />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation Header */}
      <Header
        cartCount={cartCount}
        cartTotal={cartTotal}
        onOpenCart={() => setIsOrderDrawerOpen(true)}
        onNavigate={scrollToSection}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        <Hero
          onExploreCatalog={() => scrollToSection('catalogo')}
          onOpenOrder={() => setIsOrderDrawerOpen(true)}
        />

        <Catalog
          onSelectProduct={(product) => setSelectedProduct(product)}
          onQuickAdd={handleQuickAdd}
        />

        <AboutSection />

        <HowItWorks onOpenOrder={() => setIsOrderDrawerOpen(true)} />

        <Testimonials />

        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Floating Action Button */}
      <FloatingWhatsApp
        cartCount={cartCount}
        cartTotal={cartTotal}
        onOpenCart={() => setIsOrderDrawerOpen(true)}
      />

      {/* Product Detail & Customization Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* WhatsApp Order Drawer */}
      <OrderDrawer
        isOpen={isOrderDrawerOpen}
        onClose={() => setIsOrderDrawerOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
