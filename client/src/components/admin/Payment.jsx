import React, { useEffect, useState } from 'react'
import { GetAllPayment } from '../../function/Payment';

export const Payment = () => {
    const [payment, setPayments] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
      const fetchPayment = async () => {
        try {
            const res = await GetAllPayment();
            console.log('cart data:', res);
          setPayments(res);
        } catch (error) {
          console.error('Error fetching cart:', error);
        }
      };
  
      fetchPayment();
    }, []); 
    const openItemDetails = (item) => {
      setSelectedItem(item);
    };
  
    const closeItemDetails = () => {
      setSelectedItem(null);
    };
    
  return (
    <>
              <div className='product order'>
              <table className='admin-laptop'> 
                  <tr>
                      <th>S.N</th>
                      <th>Email</th>
                      <th>Item</th>
                  </tr>
                  {payment && payment.map((paymentItem, index) => (
                        <tr key={index}>
                         <td>{index + 1}</td>
                          <td>{ paymentItem.email}</td>  
                          <td> {paymentItem.items.map((item, i) => (
                              <div key={i} onClick={() => openItemDetails(item)}>{item.title}<br></br>Price:${item.price}<br></br>Quantity:{item.quantity}</div>
                          ))}
                          </td>
                        </tr>
                      ))}
              </table>
          </div>
    </>
  )
}
