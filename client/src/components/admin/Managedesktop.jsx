import React,{ useState, useRef, useEffect } from 'react'
import { AddDesktop, GetDesktop, DeleteDesktop, EditDesktop, UploadDesktop } from '../../function/Desktop';
import './Admin.css'
export const Managedesktop = () => {
  const [isAddDesktopVisible, setIsAddDesktopVisible] = useState(false);
  const [desktops, setDesktops] = useState([]);
  const [desktop, setDesktop] = useState("");
  const [editDesktop, setEditDesktop] = useState(null);
  const [editedDesktop, setEditedDesktop] = useState(null);
  const [file, setFile] = useState(null);
  const addDesktopRef = useRef(null);
  const editDesktopRef = useRef(null);
  const [desktopData, setDesktopData] = useState({
    title: "",
    brand: "",
    cpu: "",
    weight: "",
    ram: "",
    storage: "",
    price: "",
    graphics:"",
  })

  const toggleAddDesktop = () => {
    setIsAddDesktopVisible(!isAddDesktopVisible);
  }

  const AddDesktopHandler = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('desktop', file)
    await UploadDesktop(formData);
    await AddDesktop(desktop);
    console.log(desktop);
    FetchDesktop();
    setIsAddDesktopVisible(false);
  }
  const FetchDesktop = async () => {
    const res = await GetDesktop();
    setDesktops(res);
    console.log(res,"hello")
  }

  const handleCancelClick = () => {
    setIsAddDesktopVisible(false);
  };

  const handleDeleteDesktop = async (id) => {
    try {
        await DeleteDesktop(id)
        FetchDesktop()
    } catch(error) {
        console.error('error:', error);
        if (error.response) {
            console.error('Response data:', error.response.data);
        }
    }
  }
  const handleEditClick = (desktop) => {
    setEditedDesktop({ ...desktop });
    setDesktopData({ ...desktop })
    setEditDesktop(desktop);
  }
  const handleCloseEditForm = () => {
    setEditDesktop(null);
  };
  const handleOutsideClick = (event) => {
    if (editDesktop !== null && !editDesktopRef.current.contains(event.target)) {
      handleCloseEditForm();
    }
  };

  useEffect(() => {
    if (editDesktop !== null) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
  }, [editDesktop]);

  const handleSaveEdit = async (e, desktop) => {
    e.preventDefault();
    try {
      await EditDesktop(desktop)
      FetchDesktop()
      setEditDesktop(null);
    } catch(error) {
      console.error('error updating:' , error)
    }
  }

  const ImageHandler = async (e) => {
    setFile(e.target.files[0]);
    setDesktop({ ...desktop, image: e.target.files[0].name });
    console.log(e.target.files[0].name)
  }

  useEffect(() => {

    FetchDesktop();
    function handleClickOutside(event) {
      if (addDesktopRef.current && !addDesktopRef.current.contains(event.target)) {
        setIsAddDesktopVisible(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };

    
  }, []);
  return (
    <>
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
          <th>Price</th>
          <th className='opt-btn'>Option</th>
        </tr>
        <tr>
          <td colSpan="11">
            <button onClick={toggleAddDesktop}><i class="fa-solid fa-plus"></i></button>
          </td>
        </tr>
          {desktops && desktops.map((desktop,i) =>
          <tr>
            <td data-label ="S.N:">{ i + 1}</td>
            <td data-label ="Title:">{ desktop.title }</td>
            <td data-label ="Brand:">{ desktop.brand }</td>
            <td data-label ="CPU:">{ desktop.cpu }</td>
            <td data-label ="Graphics:">{ desktop.graphics }</td>
            <td data-label ="RAM:">{ desktop.ram }</td>
            <td data-label ="Storage:">{ desktop.storage }</td>
            <td data-label ="Weight:">{ desktop.weight }</td>
            <td data-label ="Price:">{ desktop.price }</td>
            <td>
            <button onClick={()=> handleEditClick(desktop)}>Edit<i class="fa-solid fa-pen-to-square"></i></button>
              {editDesktop !== null && editDesktop._id === desktop._id &&(
              <div className='edit-laptop' ref={editDesktopRef}>
                <div className='flex flex-col inputBox'>
                  <input type='text' value={editedDesktop.title} name="title" onChange={(e) => setEditedDesktop({...editedDesktop, title:e.target.value})}/>
                  <label>Title</label>
                </div>
                <div className='flex flex-col inputBox'>
                      <input type='text' value={editedDesktop.brand} name="brand" onChange={(e) => setEditedDesktop({ ...editedDesktop, brand: e.target.value })} />
                      <label>Brand</label>
                </div>
                <div className='flex flex-col inputBox'>
                  <input type='text' name="cpu" value={editedDesktop.cpu} onChange={(e) => setEditedDesktop({...editedDesktop, cpu:e.target.value})}/>
                  <label>CPU</label>
                </div>
                <div className='flex flex-col inputBox'>
                  <input type='text' name="cpu" value={editedDesktop.graphics} onChange={(e) => setEditedDesktop({...editedDesktop, graphics:e.target.value})}/>
                  <label>Graphics</label>
                </div>
                <div className='flex flex-col inputBox'>
                  <input type='text' name="cpu" value={editedDesktop.ram} onChange={(e) => setEditedDesktop({...editedDesktop, ram:e.target.value})}/>
                  <label>RAM</label>
                </div>
                <div className='flex flex-col inputBox'>
                  <input type='text' name="cpu" value={editedDesktop.storage} onChange={(e) => setEditedDesktop({...editedDesktop, storage:e.target.value})}/>
                  <label>Storage</label>
                </div>
                <div className='flex flex-col inputBox'>
                  <input type='text' name="cpu" value={editedDesktop.weight} onChange={(e) => setEditedDesktop({...editedDesktop, weight:e.target.value})}/>
                  <label>Weight</label>
                </div>
                <div className='flex flex-col inputBox'>
                  <input type='text' name="cpu" value={editedDesktop.price} onChange={(e) => setEditedDesktop({...editedDesktop, price:e.target.value})}/>
                  <label>Price</label>
                </div>
                <div className='flex flex-col inputBox'>
                  <input type='file'/>
                  <label>Photo</label>
                </div>
                 <button className='edit-save bg-green-600' onClick={(e)=>handleSaveEdit(e,editedDesktop)}>Save</button>
                 <button className='edit-cancel bg-red-600' onClick={handleCloseEditForm}>Cancel</button>
              </div>
                )}
              <button onClick={()=>handleDeleteDesktop(desktop._id)}>Delete<i class="fa-solid fa-trash"></i></button>
            </td>
          </tr>
          ) 
          }
      </table>
      <div className='add-section'>
      {isAddDesktopVisible && (
        <div className='add-laptop' ref={addDesktopRef}>
          <div className='flex flex-col inputBox'>
          <input type='text' onChange={(e)=>setDesktop({...desktop,title:e.target.value})} name="name"/>
              <label>Title</label>
          </div>
            <div className='flex flex-col inputBox'>
                <input type='text' onSelect={(e) => setDesktop({ ...desktop, brand: e.target.value })} />
                <label>Brand</label>
          </div>
          <div className='flex flex-col inputBox'>
              <input type='text' name="name" onChange={(e)=>setDesktop({...desktop,cpu:e.target.value})}/>
              <label>CPU</label>
          </div>
          <div className='flex flex-col inputBox'>
              <input type='text' name="name" onChange={(e)=>setDesktop({...desktop,graphics:e.target.value})}/>
              <label>Graphics</label>
          </div>
          <div className='flex flex-col inputBox'>
              <input type='text' name="name" onChange={(e)=>setDesktop({...desktop,ram:e.target.value})}/>
              <label>RAM</label>
          </div>
          <div className='flex flex-col inputBox'>
              <input type='text' name="name" onChange={(e)=>setDesktop({...desktop,storage:e.target.value})}/>
              <label>Storage</label>
          </div>
          <div className='flex flex-col inputBox'>
              <input type='text' name="name" onChange={(e)=>setDesktop({...desktop,weight:e.target.value})}/>
              <label>Weight</label>
          </div>
          <div className='flex flex-col inputBox'>
              <input type='text' name="name" onChange={(e)=>setDesktop({...desktop,price:e.target.value})}/>
              <label>Price</label>
          </div>
          <div className='flex flex-col inputBox'>
              <input type='file' onChange={(e)=>ImageHandler(e)}/>
              <label>Photo</label>
          </div>
        <div className='flex justify-between'>
          <button className='add-btn-add bg-green-600' onClick={(e)=>AddDesktopHandler(e)} >Add</button>
          <button className='cancel-btn bg-red-600' onClick={handleCancelClick}>Cancel</button>
        </div>
      </div>
      )}
      </div>
    </div>
    </>
  )
}
