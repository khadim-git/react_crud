import React from 'react';
import axios from 'axios';
import { useEffect , useState } from 'react';
import { Link } from 'react-router-dom'
import  Config from '../../Config/Config'

const  BookList = () =>{
  const [data,setData] = useState([])
  const [deleteID,setdeleteID] = useState('')

  const URLAPI = Config.APIUrl
  
  useEffect(() =>{
      const  responseData = async() =>{
        const confic = {
          method: 'get',
          url:URLAPI,
        }
        const response = await axios(confic)
        setData(response.data)

      }

      responseData();

  },[])

  const handelDelete = (id) =>{
    setdeleteID(id)
     

  }
  const Closehendel = () =>{
    setdeleteID('')

  }
const handelDeletecmf = (id) =>{
    axios.delete(URLAPI+'/'+id)
       .then(res =>{
         console.log(res)
       })
       setdeleteID('')




}
    
  return (
      <>
      <div className="container mt-5">
        <div className="row">
            {data.map((items,key) => {
              return (
                <div className=" card-group col-md-6 mb-4" key={key}>
                  <div className="card shadow-sm">
                    <div className="card-body p-2 d-flex flex-column justify-content-between">
                      <div className="col-md-12 mb-5">
                        <h5 className="card-title"><strong className="me-2">Book Name :</strong>{items.name}</h5>
                        <p className="card-text"><strong className="me-2">Book Author :</strong>{items.author}</p>
                        {items.discription && <p className="card-text"><strong className=" me-2">Discription :</strong>{items.discription}</p>}
                    </div>
                    <div className="d-flex">
                    <Link  className="btn btn-warning me-2 " to={`/update-book/${items._id}`}>Edit </Link>
                    <button type="button" className="btn btn-danger"  onClick={() => handelDelete(items._id)} >Delete</button>
                    </div>
                    </div>
                  </div>
                </div>
            )})}
            </div>
            {deleteID && <div className="modal"  style={{display:'block'}}>
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={Closehendel} aria-label="Close"></button>
                          </div>
                          <div className="modal-body">
                            <p>Are You sure Delete Done ?</p>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-danger" onClick={() => handelDeletecmf(deleteID)} data-bs-dismiss="modal">Delete</button>
                          </div>
                        </div>
                      </div>
                   </div>
              }
        </div>
      </>
  )
}
export default BookList;
