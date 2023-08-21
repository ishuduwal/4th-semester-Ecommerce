import React from 'react'
import './Admin.css'
export const Product = () => {
  return (
    <div className='product'>
      <table className='admin-laptop'>
        <tr>
          <th>S.N.</th>
          <th>Title</th>
          <th>Brand</th>
          <th>CPU</th>
          <th>Grpahics</th>
          <th>Ram</th>
          <th>Storage</th>
          <th>Weight</th>
          <th>Display</th>
          <th>Price</th>
          <th className='opt-btn'>Option</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Dell inspiron 15 5001</td>
          <td>Laptop</td>
          <td>amd ryzen</td>
          <td>Nvidia 3050</td>
          <td>8gb</td>
          <td>1Tb ssd</td>
          <td>1.5kg</td>
          <td>ips 15.5inch</td>
          <td>95,000</td>
          <td>
            <button className='laptop-btn btn-edit'>Edit</button>
            <button className='laptop-btn'>Delete</button>
          </td>
        </tr>
      </table>
    </div>
  )
}

