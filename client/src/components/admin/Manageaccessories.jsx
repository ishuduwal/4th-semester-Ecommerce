import React,{ useState, useRef, useEffect } from 'react'

export const Manageaccessories = () => {
    const [isAddAccessoriesVisible, setIsAddAccessoriesVisible] = useState(false);
    const addAccessoriesRef = useRef(null);
  
    const toggleAddAccessories = () => {
      setIsAddAccessoriesVisible(!isAddAccessoriesVisible);
    }
    useEffect(() => {
      function handleClickOutside(event) {
        if (addAccessoriesRef.current && !addAccessoriesRef.current.contains(event.target)) {
          setIsAddAccessoriesVisible(false);
        }
      }
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
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
          <th>Price</th>
          <th className='opt-btn'>Option</th>
        </tr>
        <tr>
          <td colSpan="10">
            <button onClick={toggleAddAccessories}><i class="fa-solid fa-plus"></i></button>
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
          <td>5,000</td>
          <td>
            <button>Edit<i class="fa-solid fa-pen-to-square"></i></button>
            <button>Delete<i class="fa-solid fa-trash"></i></button>
          </td>
        </tr>
      </table>
      <div className='add-section'>
      {isAddAccessoriesVisible && (
        <div className='add-laptop' ref={addAccessoriesRef}>
        <h3>Add Accessories</h3>
          <div className='flex flex-col inputBox'>
              <input type='text' name="name"/>
              <label>Title</label>
          </div>
          <div className='flex flex-col inputBox'>
              <input type='text' name="name"/>
              <label>Brand</label>
          </div>
          <div className='flex flex-col inputBox'>
              <input type='text' name="name"/>
              <label>Length</label>
          </div>
          <div className='flex flex-col inputBox'>
              <input type='text' name="name"/>
              <label>Storage</label>
          </div>
          <div className='flex flex-col inputBox'>
              <input type='text' name="name"/>
              <label>Width</label>
          </div>
          <div className='flex flex-col inputBox'>
              <input type='text' name="name"/>
              <label>Connection</label>
          </div>
          <div className='flex flex-col inputBox'>
              <input type='text' name="name"/>
              <label>Weight</label>
          </div>
          <div className='flex flex-col inputBox'>
              <input type='text' name="name"/>
              <label>Price</label>
          </div>
          <div className='flex flex-col inputBox'>
              <input type='file'/>
              <label>Photo</label>
        </div>
        <div className='flex justify-between'>
          <button className='add-btn-add bg-green-600'>Add</button>
          <button className='cancel-btn bg-red-600'>Cancel</button>
        </div>
      </div>
      )}
      </div>
    </div>
  )
}
