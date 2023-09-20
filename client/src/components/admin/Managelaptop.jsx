import React,{ useState, useRef, useEffect } from 'react'
import { AddLaptop, GetLaptop, DeleteLaptop } from '../../function/Laptop';
import './Admin.css'
export const Managelaptop = () => {
  const [isAddLaptopVisible, setIsAddLaptopVisible] = useState(false);
  const [laptops, setLaptops] = useState([]);
  const [laptop, setLaptop] = useState("");
  const addLaptopRef = useRef(null);

  const toggleAddLaptop = () => {
    setIsAddLaptopVisible(!isAddLaptopVisible);
  }

  const AddLaptopHandler = async (e) => {
    e.preventDefault();
    const res = await AddLaptop(laptop);
    console.log(laptop);
    FetchLaptop();
    setIsAddLaptopVisible(false);
  }
  const FetchLaptop = async () => {
    const res = await GetLaptop();
    setLaptops(res);
    console.log(res,"hello")
  }

  const handleCancelClick = () => {
    setIsAddLaptopVisible(false);
  };

  const handleDeleteLaptop = async (id) => {
    try {
        await DeleteLaptop(id)
        FetchLaptop()
    } catch(error) {
        console.error('error:', error);
        if (error.response) {
            console.error('Response data:', error.response.data);
        }
    }
}
  useEffect(() => {

    FetchLaptop();
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
          <td colSpan="11">
            <button onClick={toggleAddLaptop}><i class="fa-solid fa-plus"></i></button>
          </td>
        </tr>
          {laptops && laptops.map((laptop,i) =>
          <tr>
            <td data-label ="S.N:">{ i + 1}</td>
            <td data-label ="Title:">{ laptop.title }</td>
            <td data-label ="Brand:">{ laptop.brand }</td>
            <td data-label ="CPU:">{ laptop.cpu }</td>
            <td data-label ="Graphics:">{ laptop.graphics }</td>
            <td data-label ="RAM:">{ laptop.ram }</td>
            <td data-label ="Storage:">{ laptop.storage }</td>
            <td data-label ="Weight:">{ laptop.weight }</td>
            <td data-label ="Display:">{ laptop.display }</td>
            <td data-label ="Price:">{ laptop.price }</td>
            <td>
              <button>Edit<i class="fa-solid fa-pen-to-square"></i></button>
              <button onClick={()=>handleDeleteLaptop(laptop._id)}>Delete<i class="fa-solid fa-trash"></i></button>
            </td>
          </tr>
          ) 
          }
      </table>
      <div className='add-section'>
      {isAddLaptopVisible && (
        <div className='add-laptop' ref={addLaptopRef}>
          <div className='flex flex-col inputBox'>
          <input type='text' onChange={(e)=>setLaptop({...laptop,title:e.target.value})} name="name"/>
              <label>Title</label>
          </div>
            <div className='flex flex-col inputBox'>
              <select className='h-12 brand-option' onSelect={(e)=>setLaptop({...laptop,brand:e.target.value})}>
                <option selected hidden>Brand</option>
                <option value="hp" >Hp</option>
                <option value="dell" >Dell</option>
                <option value="acer" >Acer</option>
                <option value="asus" >Asus</option>
                <option value="apple" >Apple</option>
                <option value="lenovo" >Lenovo</option>
              </select>
          </div>
          <div className='flex flex-col inputBox'>
              <input type='text' name="name" onChange={(e)=>setLaptop({...laptop,cpu:e.target.value})}/>
              <label>CPU</label>
          </div>
          <div className='flex flex-col inputBox'>
              <input type='text' name="name" onChange={(e)=>setLaptop({...laptop,graphics:e.target.value})}/>
              <label>Graphics</label>
          </div>
          <div className='flex flex-col inputBox'>
              <input type='text' name="name" onChange={(e)=>setLaptop({...laptop,ram:e.target.value})}/>
              <label>RAM</label>
          </div>
          <div className='flex flex-col inputBox'>
              <input type='text' name="name" onChange={(e)=>setLaptop({...laptop,storage:e.target.value})}/>
              <label>Storage</label>
          </div>
          <div className='flex flex-col inputBox'>
              <input type='text' name="name" onChange={(e)=>setLaptop({...laptop,weight:e.target.value})}/>
              <label>Weight</label>
          </div>
          <div className='flex flex-col inputBox'>
              <input type='text' name="name" onChange={(e)=>setLaptop({...laptop,display:e.target.value})}/>
              <label>Display</label>
          </div>
          <div className='flex flex-col inputBox'>
              <input type='text' name="name" onChange={(e)=>setLaptop({...laptop,price:e.target.value})}/>
              <label>Price</label>
          </div>
          <div className='flex flex-col inputBox'>
              <input type='file'/>
              <label>Photo</label>
        </div>
        <div className='flex justify-between'>
          <button className='add-btn-add bg-green-600' onClick={(e)=>AddLaptopHandler(e)} >Add</button>
          <button className='cancel-btn bg-red-600' onClick={handleCancelClick}>Cancel</button>
        </div>
      </div>
      )}
      </div>
    </div>
  )
}

