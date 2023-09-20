import React, { useState, useRef, useEffect } from 'react'
import { AddAccessories, GetAccessories, DeleteAccessories } from '../../function/Accessories';
export const Manageaccessories = () => {
  const [isAddAccessoriesVisible, setIsAddAccessoriesVisible] = useState(false);
  const [accessories, setAccessories] = useState([]);
  const [accessorie, setAccessorie] = useState("");
    const addAccessoriesRef = useRef(null);
  
    const toggleAddAccessories = () => {
      setIsAddAccessoriesVisible(!isAddAccessoriesVisible);
    }
    const AddAccessoriesHandler = async (e) => {
      e.preventDefault();
      const res = await AddAccessories(accessorie);
      console.log(accessorie);
      FetchAccessories();
      setIsAddAccessoriesVisible(false);
    }
    const FetchAccessories = async () =>{
      const res = await GetAccessories();
      setAccessories(res);
      console.log(res, "hello")
    }
    
    const handleCancelClick = () => {
      setIsAddAccessoriesVisible(false);
    };
    const handleDeleteAccessories = async (id) => {
      try {
          await DeleteAccessories(id)
          FetchAccessories()
      } catch(error) {
          console.error('error:', error);
          if (error.response) {
              console.error('Response data:', error.response.data);
          }
      }
  }
  
    useEffect(() => {
      FetchAccessories();
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
          <td colSpan="11">
            <button onClick={toggleAddAccessories}><i class="fa-solid fa-plus"></i></button>
          </td>
        </tr>
        {accessories && accessories.map((accessorie, i) =>
          <tr>
          <td data-label ="S.N:">{i+1}</td>
          <td data-label ="Title:">{accessorie.title}</td>
          <td data-label ="Category:">{accessorie.category}</td>
          <td data-label ="Length:">{accessorie.length}</td>
          <td data-label ="Storage:">{accessorie.storage}</td>
          <td data-label ="Width:">{accessorie.width}</td>
          <td data-label ="Connection:">{accessorie.connection}</td>
          <td data-label ="Weight:">{accessorie.weight}</td>
          <td data-label ="Price:">{accessorie.price}</td>
          <td>
            <button>Edit<i class="fa-solid fa-pen-to-square"></i></button>
            <button  onClick={()=>handleDeleteAccessories(accessorie._id)}>Delete<i class="fa-solid fa-trash"></i></button>
          </td>
        </tr>
        )}
      </table>
      <div className='add-section'>
      {isAddAccessoriesVisible && (
        <div className='add-laptop' ref={addAccessoriesRef}>
          <div className='flex flex-col inputBox'>
              <input type='text' name="name" onChange={(e)=>setAccessorie({...accessorie,title:e.target.value})} />
              <label>Title</label>
          </div>
          <div className='flex flex-col inputBox'>
              <select className='h-12 brand-option' onSelect={(e)=>setAccessorie({...accessorie,category:e.target.value})} >
                <option selected hidden>Category</option>
                <option value="keyboard">Keyboard</option>
                <option value="mouse">Mouse</option>
                <option value="speaker">Speaker</option>
                <option value="storage">Storage</option>
                <option value="mousepad">Mousepad</option>
                <option value="graphics card">Graphics card</option>
                <option value="headphone">Headphone</option>
              </select>
          </div>
          <div className='flex flex-col inputBox'>
              <input type='text' name="name" onChange={(e)=>setAccessorie({...accessorie,length:e.target.value})} />
              <label>Length</label>
          </div>
          <div className='flex flex-col inputBox'>
              <input type='text' name="name" onChange={(e)=>setAccessorie({...accessorie,storage:e.target.value})}/>
              <label>Storage</label>
          </div>
          <div className='flex flex-col inputBox'>
              <input type='text' name="name" onChange={(e)=>setAccessorie({...accessorie,width:e.target.value})} />
              <label>Width</label>
          </div>
          <div className='flex flex-col inputBox'>
              <input type='text' name="name" onChange={(e)=>setAccessorie({...accessorie,connection:e.target.value})} />
              <label>Connection</label>
          </div>
          <div className='flex flex-col inputBox'>
              <input type='text' name="name" onChange={(e)=>setAccessorie({...accessorie,weight:e.target.value})} />
              <label>Weight</label>
          </div>
          <div className='flex flex-col inputBox'>
              <input type='text' name="name" onChange={(e)=>setAccessorie({...accessorie,price:e.target.value})} />
              <label>Price</label>
          </div>
          <div className='flex flex-col inputBox'>
              <input type='file'/>
              <label>Photo</label>
        </div>
        <div className='flex justify-between'>
          <button className='add-btn-add bg-green-600' onClick={(e)=>AddAccessoriesHandler(e)}>Add</button>
          <button className='cancel-btn bg-red-600' onClick={handleCancelClick}>Cancel</button>
        </div>
      </div>
      )}
      </div>
    </div>
  )
}
