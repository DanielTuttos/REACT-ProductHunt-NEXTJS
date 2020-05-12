import Layout from '../components/layout/Layout';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import useProductos from '../hooks/useProductos';

import DetalleProducto from '../components/layout/DetallerProducto';

const Buscar = () => {

  const router = useRouter();
  const { query: { q } } = router;
  console.log(q);

  // todos los productos
  const { productos } = useProductos('creado');
  const [resultado, guardarResultado] = useState([]);

  useEffect(() => {
    const busqueda = q.toLowerCase();
    const filtro = productos.filter(producto => {
      return (
        producto.nombre.toLowerCase().includes(busqueda) || producto.descripcion.toLowerCase().includes(busqueda)
      )
    });
    guardarResultado(filtro);
  }, [q, productos]);


  return (
    <div >
      <Layout>

        <div className="listado-productos">
          <div className="contenedor">
            <ul className="bg-white">
              {resultado.map(producto => (
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

export default Buscar
