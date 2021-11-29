import { React, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import  Config from '../../Config/Config'

const  CreatBook = () =>{
  const navigate = useNavigate();
  const [bookname ,setBookName] = useState('');
  const [author ,setAuthor] = useState('');
  const [textarea ,setdDiscription] = useState('');
  const [erro ,seterro] = useState('');
  const [success ,setsuccess] = useState('');
  const URLAPI = Config.APIUrl



 const Namechnage = (e) =>{
  setBookName(e.target.value)

 }
 const Authorlchnage = (e) =>{
  setAuthor(e.target.value)
 }
 const Discriptionchnage = (e) =>{
  setdDiscription(e.target.value)
 }

 const submithindel = async(e) =>{
  e.preventDefault();
  if(bookname === '' || author === '' || textarea === ''){
    seterro('this filed is requrid')
  }
  else{
    setsuccess('success')
    seterro('')
    setBookName('')
    setAuthor('')
    setdDiscription('')
    navigate('/books-list');
   // Simulate an HTTP redirect:


    

  }
  const data = {
    name:bookname,
    author:author,
    discription:textarea
  }
  const confic = {
    method: 'post',
    url:URLAPI,
    data:data,
    header:{
      "Content-Type": "application/json"
    }

  }
  
  const response = await axios(confic)
  console.log(response)



   
 }

  return (
    <>
    <div className=" container">
      <div className="col-sm-6">
        <h1 className="mt-5 mb-5">Create Book </h1>
            <form onSubmit={submithindel}>
                <div className="mb-3">
                  <label forhtml="exampleFormControlInput1" className="form-label">Book Name</label>
                  <input type="text" onChange={Namechnage} className="form-control" id="name" />
                </div>
                <div className="mb-3">
                  <label forhtml="exampleFormControlInput1" className="form-label">Author Name</label>
                  <input type="text" onChange={Authorlchnage} className="form-control" id="exampleFormControlInput1" />
                </div>
                <div className="mb-3">
                  <label forhtml="exampleFormControlTextarea1" className="form-label">Book discription</label>
                  <textarea onChange={Discriptionchnage} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
            <button type="submit"   className="btn btn-primary">Submit</button>
          </form>
              {erro && <div className="alert alert-danger mt-2" role="alert">{erro}</div>}
              {success && <div className="alert alert-success mt-2" role="alert">{success}</div>}

      </div>
    </div>
    </>
  );

}

export default CreatBook;
