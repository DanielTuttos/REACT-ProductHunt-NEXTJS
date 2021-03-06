import Layout from '../components/layout/Layout';
import React from 'react';

import useProductos from '../hooks/useProductos';

import DetalleProducto from '../components/layout/DetallerProducto';


const Home = () => {

  const { productos } = useProductos('creado');

  return (
    <div className="container">
      <Layout>

        <div className="listado-productos">
          <div className="contenedor">
            <ul className="bg-white">
              {productos.map(producto => (
                <DetalleProducto
                  key={producto.id}
                  producto={producto}
                />
              ))}
            </ul>
          </div>
        </div>
      </Layout>

    </div>
  )
}

export default Home
