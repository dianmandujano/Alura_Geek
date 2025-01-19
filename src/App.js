import React, { useState, useEffect } from 'react';
import { AppWrapper, ButtonWrapper } from './App.styled';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import CustomInput from './components/CustomInput/CustomInput';
import Button from './components/Button/Button';
import Footer from './components/Footer/Footer';
import {
  ProductSideWrapper,
  ProductFormSideWrapper,
  BodyWrapper,
  HeaderWrapper,
  ProductSideStore,
  FooterWrapper,
} from './App.styled';

const App = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/dianmandujano/Alura_Geek/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  const handleProducts = () => {
    fetch('https://my-json-server.typicode.com/dianmandujano/Alura_Geek/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, price, image }),
    })
      .then((response) => response.json())
      .then((data) => setProducts([...products, data]))
      .catch((error) => console.error(error));

    clearFields();
  };

  const handleDelete = (id) => {
    fetch(`https://my-json-server.typicode.com/dianmandujano/Alura_Geek/products${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) =>
        setProducts(products.filter((product) => product.id !== id))
      )
      .catch((error) => console.error(error));
  };

  const clearFields = () => {
    setName('');
    setPrice('');
    setImage('');
  };

  return (
    <AppWrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <BodyWrapper>
        <ProductSideWrapper>
          <p>MIS PRODUCTOS:</p>
          <ProductSideStore>
            {products.length > 0 ? (
              products.map((product) => (
                <Card
                  key={product.id}
                  product={product}
                  handleDelete={handleDelete}
                />
              ))
            ) : (
              <p>No hay productos</p>
            )}
          </ProductSideStore>
        </ProductSideWrapper>
        <ProductFormSideWrapper>
          <p>AGREGAR PRODUCTO:</p>
          <CustomInput
            placeholder="Nombre..."
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <CustomInput
            placeholder="Precio..."
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
          <CustomInput
            placeholder="Imagen..."
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
          <ButtonWrapper>
            <Button placeholder="Agregar" onClick={handleProducts}>
              Agregar
            </Button>
            <Button placeholder="Limpiar" onClick={clearFields}>
              Limpiar
            </Button>
          </ButtonWrapper>
        </ProductFormSideWrapper>
      </BodyWrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </AppWrapper>
  );
};

export default App;
