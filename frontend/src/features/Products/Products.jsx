import React from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from './useProducts';
import DataLoading from '../../UI/DataLoading';
import { useDeleteProducts } from './useDeleteProduct';

const Products = () => {
  const { products, isLoading } = useProducts();
  const { delete: deleteProduct } = useDeleteProducts();
  if (isLoading) return <DataLoading />;
  return (
    <div>
      <Link to='/products/create' className='btn btn-primary mb-5'>
        Create
      </Link>
      <div className='overflow-x-auto'>
        <table className='table table-zebra'>
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Image</th>
              <th>Stock</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <th>{index + 1}</th>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>
                  <img src={product?.image} alt={product.name} />
                </td>
                <td>{product.stock}</td>
                <td>
                  <Link
                    to={`/products/edit-product/${product._id}`}
                    className='btn btn-primary btn-sm'
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => {
                      if (window.confirm('Are you sure?')) {
                        deleteProduct(product._id);
                      }
                    }}
                    className='btn btn-error btn-sm'
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
