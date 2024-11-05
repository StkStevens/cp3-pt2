import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Carrossel from './components/Carrossel';
import ProductCard from './components/ProductCard';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Banner />
      <Carrossel />
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProductCard name="Tênis de Corrida" price="R$ 949,99" image="/tenis.png" />
        <ProductCard name="Camiseta Esportiva" price="R$ 99,99" image="/camiseta.jpg" />
        <ProductCard name="Mochila para esportes" price="R$ 712,99" image="/mochila.jpg" />
      </div>
      <div className="p-8">
        <h2 className="text-xl font-bold mb-4">Envie suas dúvidas e sugestões</h2>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;