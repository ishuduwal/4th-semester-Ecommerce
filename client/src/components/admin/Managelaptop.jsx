import React from 'react'
import './Admin.css'
export const Managelaptop = () => {
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
          <td colSpan="10">
            <button><i class="fa-solid fa-plus"></i></button>
          </td>
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
            <button>Edit<i class="fa-solid fa-pen-to-square"></i></button>
            <button>Delete<i class="fa-solid fa-trash"></i></button>
          </td>
        </tr>
      </table>
    </div>
  )
}

