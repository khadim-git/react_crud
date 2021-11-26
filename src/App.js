
import React from "react";
import { Routes, Route} from 'react-router-dom';
import  CreateBook from './components/Books/CreateBook/CreateFrom'
import NavBar from './components/NavBar/NavBar'
import  BookList from './components/Books/BookList/BookList'
import  UpdateBook from './components/Books/Bookupdate/UpdateFrom'
function App() {

   const data = [
     {
       name:'Home',
       path:"/"
     },
     {
      name:'Create Books',
      path:"/books"
     },
     {
      name:'Books List',
      path:"/books-list"
     },
     
  
   ]
 

  return (
    <>
    <NavBar data={data}/>
    <Routes>

          <Route path="/books" element={<CreateBook />} />
          <Route path="/books-list" element={<BookList />} />
          <Route path="/update-book/:id" element={<UpdateBook />} />

    </Routes>
    </>
  );

}

export default App;
