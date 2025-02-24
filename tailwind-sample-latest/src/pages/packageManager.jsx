import { useState } from 'react'
import ModalComponent from '../components/modalComponent'
import ButtonComponent from '../components/ButtonComponent'

export const PackageManager = () => {
  const [openModal, setOpenModal] = useState()
  const closeModal =()=>{
    setOpenModal(false)
  }  
  return (
    <div>
      <div className="flex items-start justify-between p-4">
  <h1 className="text-xl">Package List</h1> 
  <ButtonComponent onClick={()=>setOpenModal(true)} btnName={'Add New Package'}/>
</div>
{
  openModal &&
<ModalComponent closeModal={()=>closeModal()}/>

}
    </div>
  )
}