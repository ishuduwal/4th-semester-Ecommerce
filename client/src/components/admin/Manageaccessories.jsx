import React, { useState, useRef, useEffect } from 'react'
import { AddAccessories, GetAccessories, DeleteAccessories, EditAccessories, UploadAccessories } from '../../function/Accessories';
export const Manageaccessories = () => {
  const [isAddAccessoriesVisible, setIsAddAccessoriesVisible] = useState(false);
  const [accessories, setAccessories] = useState([]);
  const [accessorie, setAccessorie] = useState("");
  const [editedAccessorie, setEditedAccessorie] = useState(null); 
  const [editAccessorie, setEditAccessorie] = useState(null);
  const [file, setFile] = useState(null);
  const [accessorieData, setAccessorieData] = useState({
    title: "",
    brand: "",
    length: "",
    storage: "",
    width: "",
    connection: "",
    weight: "",
    price:"",  
  })
  const editAccessorieRef = useRef(null);
  const addAccessoriesRef = useRef(null);
  
    const toggleAddAccessories = () => {
      setIsAddAccessoriesVisible(!isAddAccessoriesVisible);
    }
    const AddAccessoriesHandler = async (e) => {
      e.preventDefault();
      let formData = new FormData();
      formData.append('accessorie', file)
      await UploadAccessories(formData);
      await AddAccessories(accessorie);
      console.log(accessories);
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

  const handleEditClick = (accessorie) => {
    setEditedAccessorie({ ...accessorie });
    setAccessorieData({ ...accessorie })
    setEditAccessorie(accessorie);
  }
  const handleCloseEditForm = () => {
    setEditAccessorie(null);
  };
  const handleOutsideClick = (event) => {
    if (editAccessorie !== null && !editAccessorieRef.current.contains(event.target)) {
      handleCloseEditForm();
    }
  };

useEffect(() => {
  if (editAccessorie !== null) {
    document.addEventListener('mousedown', handleOutsideClick);
  } else {
    document.removeEventListener('mousedown', handleOutsideClick);
  }
  
  return () => {
    document.removeEventListener('mousedown', handleOutsideClick);
  };
}, [editAccessorie]);
  
  const handleSaveEdit = async (e, accessorie) => {
    e.preventDefault();
    try {
      await EditAccessories(accessorie)
      FetchAccessories()
      setEditAccessorie(null);
    } catch (error) {
      console.log('error updating:', error)
    }
  }
  
  const ImageHandler = async (e) => {
    setFile(e.target.files[0]);
    setAccessorie({ ...accessorie, image: e.target.files[0].name });
    console.log(e.target.files[0].name)
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
          <button onClick={()=> handleEditClick(accessorie)}>Edit<i class="fa-solid fa-pen-to-square"></i></button>
              {editAccessorie !== null && editAccessorie._id === accessorie._id &&(
              <div className='edit-laptop' ref={editAccessorieRef}>
                <div className='flex flex-col inputBox'>
                  <input type='text' value={editedAccessorie.title} name="title" onChange={(e) => setEditedAccessorie({...editedAccessorie, title:e.target.value})}/>
                  <label>Title</label>
                </div>
                <div className='flex flex-col inputBox'>
                  <select className='h-12 brand-option' value={editedAccessorie.brand} name="brand" onSelect={(e) => setEditedAccessorie({...editedAccessorie, brand:e.target.value})}>
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
                  <input type='text' name="length" value={editedAccessorie.length} onChange={(e) => setEditedAccessorie({...editedAccessorie, length:e.target.value})}/>
                  <label>Length</label>
                </div>
                <div className='flex flex-col inputBox'>
                  <input type='text' name="storage" value={editedAccessorie.storage} onChange={(e) => setEditedAccessorie({...editedAccessorie, storage:e.target.value})}/>
                  <label>Storage</label>
                </div>
                <div className='flex flex-col inputBox'>
                  <input type='text' name="width" value={editedAccessorie.width} onChange={(e) => setEditedAccessorie({...editedAccessorie, width:e.target.value})}/>
                  <label>Width</label>
                </div>
                <div className='flex flex-col inputBox'>
                  <input type='text' name="connection" value={editedAccessorie.connection} onChange={(e) => setEditedAccessorie({...editedAccessorie, connection:e.target.value})} />
                  <label>Connection</label>
                </div>
                <div className='flex flex-col inputBox'>
                  <input type='text' name="weight" value={editedAccessorie.weight} onChange={(e) => setEditedAccessorie({...editedAccessorie, weight:e.target.value})}/>
                  <label>Weight</label>
                </div>
                <div className='flex flex-col inputBox'>
                  <input type='text' name="price" value={editedAccessorie.price} onChange={(e) => setEditedAccessorie({...editedAccessorie, price:e.target.value})}/>
                  <label>Price</label>
                </div>
                <div className='flex flex-col inputBox'>
                  <input type='file'/>
                  <label>Photo</label>
                </div>
                 <button className='edit-save bg-green-600' onClick={(e)=>handleSaveEdit(e,editedAccessorie)}>Save</button>
                 <button className='edit-cancel bg-red-600' onClick={handleCloseEditForm}>Cancel</button>
              </div>
                )}
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
              <select className='h-12 brand-option' onChange={(e)=>setAccessorie({...accessorie,category:e.target.value})} >
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
              <input type='file' onChange={(e)=>ImageHandler(e)}/>
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
