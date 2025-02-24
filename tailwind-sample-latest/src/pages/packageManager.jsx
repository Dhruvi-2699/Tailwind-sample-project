import React, { useState } from 'react'
import ModalComponent from '../components/modalComponent'

export const PackageManager = () => {
  const [openModal, setOpenModal] = useState()
const closeModal =()=>{
  setOpenModal(false)
}
  return (
    <div>
      <div className="flex items-start justify-between p-4">
  <h1 className="text-xl">Package List</h1> 
  <button className="btn self-end" onClick={()=>setOpenModal(true)}>Add New Package</button>
</div>
{
  openModal &&
<ModalComponent closeModal={()=>closeModal()}/>

}
    </div>
  )
}