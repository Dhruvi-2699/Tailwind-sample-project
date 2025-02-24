import { useContext, useState } from 'react'
import ModalComponent from '../components/modalComponent'
import ButtonComponent from '../components/ButtonComponent'
import PackageContext from '../context/PackageContext'

export const PackageManager = () => {
  const {packageData} = useContext(PackageContext)
  const [openModal, setOpenModal] = useState()
  const closeModal =()=>{
    setOpenModal(false)
  }  
  console.log('check packageData-', packageData);
  
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