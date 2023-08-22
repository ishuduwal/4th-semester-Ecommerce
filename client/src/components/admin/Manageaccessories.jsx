import React from 'react'

export const Manageaccessories = () => {
  return (
    <div className='product'>
      <table className='admin-laptop'>
        <tr>
          <th>S.N.</th>
          <th>Title</th>
          <th>Brand</th>
          <th>Length</th>
          <th>Storage</th>
          <th>Width</th>
          <th>Connection</th>
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
          <td>Corsair k-20</td>
          <td>Corsair</td>
          <td>400mm</td>
          <td></td>
          <td>200mm</td>
          <td>USB</td>
          <td>500gm</td>
          <td></td>
          <td>5,000</td>
          <td>
            <button>Edit<i class="fa-solid fa-pen-to-square"></i></button>
            <button>Delete<i class="fa-solid fa-trash"></i></button>
          </td>
        </tr>
      </table>
    </div>
  )
}
