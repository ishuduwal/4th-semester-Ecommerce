import React, { useEffect, useState } from 'react'
import { GetAllCart } from '../../function/Cart';

export const Order = () => {
    const [carts, setCarts] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
      const fetchCart = async () => {
        try {
            const res = await GetAllCart();
            console.log('cart data:', res);
          setCarts(res);
        } catch (error) {
          console.error('Error fetching cart:', error);
        }
      };
  
      fetchCart();
    }, []); 
    const openItemDetails = (item) => {
      setSelectedItem(item);
    };
  
    const closeItemDetails = () => {
      setSelectedItem(null);
    };
    
    const formatTimestamp = (timestamp) => {
      const date = new Date(timestamp);
      return date.toLocaleString(); 
      
    };
  return (
      <>
          <div className='product order'>
              <table className='admin-laptop'> 
                  <tr>
                      <th>S.N</th>
                      <th>User</th>
                      <th>Email</th>
                      <th>Item</th>
                      <th>Added Date</th>
                      <th>Updated Date</th>
                  </tr>
                  {carts && carts.map((cartItem, index) => (
                        <tr key={index}>
                         <td>{index + 1}</td>
                          <td>{ cartItem.email}</td>
                          <td>{cartItem.name}</td>  
                          <td> {cartItem.items.map((item, i) => (
                             <div key={i}  onClick={() => openItemDetails(item)}>{item.title}</div>))}
                          </td>
                          <td>{formatTimestamp(cartItem.createdAt)}</td>
                          <td>{formatTimestamp(cartItem.updatedAt)}</td>
                        </tr>
                      ))}
              </table>
          </div>
          {selectedItem && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeItemDetails}>&times;</span>
            <h2>Item Details</h2>
            <p>Title: {selectedItem.title}</p>
          </div>
        </div>
      )}
      </>
  )
}
