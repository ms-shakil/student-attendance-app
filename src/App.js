
import { useState } from 'react';
import './App.css';
import StudentForm from './component/StudentForm';
import StudentSection from './component/StudentSection';

function App() {

  return (
    <div className="App">
       
         <StudentForm />
         <StudentSection />
    </div>
  );
}

export default App;
