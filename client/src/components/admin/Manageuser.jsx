import React from 'react'

export const Manageuser = () => {
  return (
    <div className='product'>
      <table className='admin-laptop'>
        <tr>
          <th>S.N.</th>
          <th>Name:</th>
          <th>Email address:</th>
          <th>Password:</th>
          <th className='opt-btn'>Option</th>
        </tr>
        <tr>
          <td colSpan="10">
            <button><i class="fa-solid fa-plus"></i></button>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>sailesh</td>
          <td>sailesh@gmail.com</td>
          <td>987</td>
          <td>
            <button>Edit<i class="fa-solid fa-pen-to-square"></i></button>
            <button>Delete<i class="fa-solid fa-trash"></i></button>
          </td>
        </tr>
      </table>
    </div>
  )
}
