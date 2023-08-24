import React,{ useState, useRef, useEffect } from 'react'
import './Admin.css'
export const Managelaptop = () => {
  const [isAddLaptopVisible, setIsAddLaptopVisible] = useState(false);
  const addLaptopRef = useRef(null);

  const toggleAddLaptop = () => {
    setIsAddLaptopVisible(!isAddLaptopVisible);
  }
  useEffect(() => {
    function handleClickOutside(event) {
      if (addLaptopRef.current && !addLaptopRef.current.contains(event.target)) {
        setIsAddLaptopVisible(false);
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
            <button onClick={toggleAddLaptop}><i class="fa-solid fa-plus"></i></button>
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
      <div className='add-section'>
      {isAddLaptopVisible && (
        <div className='add-laptop' ref={addLaptopRef}>
        <h3>Add Laptop</h3>
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
              <label>CPU</label>
          </div>
          <div className='flex flex-col inputBox'>
              <input type='text' name="name"/>
              <label>Graphics</label>
          </div>
          <div className='flex flex-col inputBox'>
              <input type='text' name="name"/>
              <label>RAM</label>
          </div>
          <div className='flex flex-col inputBox'>
              <input type='text' name="name"/>
              <label>Storage</label>
          </div>
          <div className='flex flex-col inputBox'>
              <input type='text' name="name"/>
              <label>Weight</label>
          </div>
          <div className='flex flex-col inputBox'>
              <input type='text' name="name"/>
              <label>Display</label>
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

