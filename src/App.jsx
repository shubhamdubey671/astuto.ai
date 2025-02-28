import { useState } from 'react'
import MyTable from './components/MyTable';
import './App.css'
import Footer from './components/Footer';

function App() {
 
  return (
    <>
      <div className='main'>
       <MyTable tableSchema={tableSchema} tableData={tableData} />
       <Footer/>
     </div>
     
    </>
  )
}

export default App



const tableSchema = [
  { field: 'id', headerName: 'ID',  },
  { field: 'name', headerName: 'Name' ,  },
  { field: 'status', headerName: 'Status' },
  { field: 'role', headerName: 'Role',  },
  { field: 'email', headerName: 'Email', },
];


const tableData = [
  { id: 1, name: 'John Doe', status: 'Working', role: 'Software Engineer', email: 'john.doe@example.com', img: '/logo.jpg' },
  { id: 2, name: 'Jane Smith', status: 'Working', role: 'Data Analyst', email: 'jane.smith@example.com', img: '/logo.jpg' },
  { id: 3, name: 'Alice Johnson', status: 'Working', role: 'UI Designer', email: 'alice.johnson@example.com', img: '/logo.jpg' },
  { id: 4, name: 'Bob Williams', status: 'Working', role: 'Product Manager', email: 'bob.williams@example.com', img: '/logo.jpg' },
  { id: 5, name: 'Charlie Brown', status: 'Working', role: 'QA Tester', email: 'charlie.brown@example.com', img: '/logo.jpg' },
  { id: 6, name: 'Emily Davis', status: 'Working', role: 'DevOps Engineer', email: 'emily.davis@example.com', img: '/logo.jpg' },
  { id: 7, name: 'George Garcia', status: 'Working', role: 'Software Engineer', email: 'george.garcia@example.com', img: '/logo.jpg' },
  { id: 8, name: 'Hannah Rodriguez', status: 'Working', role: 'Data Analyst', email: 'hannah.rodriguez@example.com', img: '/logo.jpg' },
  { id: 9, name: 'Isaac Wilson', status: 'Working', role: 'UI Designer', email: 'isaac.wilson@example.com', img: '/logo.jpg' },
  { id: 10, name: 'Jack Martinez', status: 'Working', role: 'Product Manager', email: 'jack.martinez@example.com', img: '/logo.jpg' },
  { id: 11, name: 'Katie Anderson', status: 'Working', role: 'QA Tester', email: 'katie.anderson@example.com', img: '/logo.jpg' },
  { id: 12, name: 'Liam Taylor', status: 'Working', role: 'DevOps Engineer', email: 'liam.taylor@example.com', img: '/logo.jpg' },
  { id: 13, name: 'Mia Thomas', status: 'Working', role: 'Software Engineer', email: 'mia.thomas@example.com', img: '/logo.jpg' },
  { id: 14, name: 'Noah Jackson', status: 'Working', role: 'Data Analyst', email: 'noah.jackson@example.com', img: '/logo.jpg' },
  { id: 15, name: 'Olivia White', status: 'Working', role: 'UI Designer', email: 'olivia.white@example.com', img: '/logo.jpg' },
  { id: 16, name: 'Peter Harris', status: 'Working', role: 'Product Manager', email: 'peter.harris@example.com', img: '/logo.jpg' },
  { id: 17, name: 'Quinn Martin', status: 'Working', role: 'QA Tester', email: 'quinn.martin@example.com', img: '/logo.jpg' },
  { id: 18, name: 'Ryan Thompson', status: 'Working', role: 'DevOps Engineer', email: 'ryan.thompson@example.com', img: '/logo.jpg' },
  { id: 19, name: 'Sophia Garcia', status: 'Working', role: 'Software Engineer', email: 'sophia.garcia@example.com', img: '/logo.jpg' },
  { id: 20, name: 'Steven Perez', status: 'Working', role: 'Data Analyst', email: 'steven.perez@example.com', img: '/logo.jpg' },
  { id: 21, name: 'Tyler Robinson', status: 'Working', role: 'UI Designer', email: 'tyler.robinson@example.com', img: '/logo.jpg' },
  { id: 22, name: 'Ursula Clark', status: 'Working', role: 'Product Manager', email: 'ursula.clark@example.com', img: '/logo.jpg' },
  { id: 23, name: 'Vincent Lewis', status: 'Working', role: 'QA Tester', email: 'vincent.lewis@example.com', img: '/logo.jpg' },
  { id: 24, name: 'Wendy Lee', status: 'Working', role: 'DevOps Engineer', email: 'wendy.lee@example.com', img: '/logo.jpg' },
  { id: 25, name: 'Xavier Hall', status: 'Working', role: 'Software Engineer', email: 'xavier.hall@example.com', img: '/logo.jpg' },
  { id: 26, name: 'Yara Allen', status: 'Working', role: 'Data Analyst', email: 'yara.allen@example.com', img: '/logo.jpg' },
  { id: 27, name: 'Zachary Young', status: 'Working', role: 'UI Designer', email: 'zachary.young@example.com', img: '/logo.jpg' },
  { id: 28, name: 'Abigail King', status: 'Working', role: 'Product Manager', email: 'abigail.king@example.com', img: '/logo.jpg' },
  { id: 29, name: 'Benjamin Wright', status: 'Working', role: 'QA Tester', email: 'benjamin.wright@example.com', img: '/logo.jpg' },
  { id: 30, name: 'Chloe Scott', status: 'Working', role: 'DevOps Engineer', email: 'chloe.scott@example.com', img: '/logo.jpg' },
  { id: 31, name: 'Daniel Green', status: 'Working', role: 'Software Engineer', email: 'daniel.green@example.com', img: '/logo.jpg' },
  { id: 32, name: 'Eleanor Adams', status: 'Working', role: 'Data Analyst', email: 'eleanor.adams@example.com', img: '/logo.jpg' },
  { id: 33, name: 'Frederick Baker', status: 'Working', role: 'UI Designer', email: 'frederick.baker@example.com', img: '/logo.jpg' },
  { id: 34, name: 'Grace Nelson', status: 'Working', role: 'Product Manager', email: 'grace.nelson@example.com', img: '/logo.jpg' },
  { id: 35, name: 'Henry Carter', status: 'Working', role: 'QA Tester', email: 'henry.carter@example.com', img: '/logo.jpg' },
  { id: 36, name: 'Isabella Mitchell', status: 'Working', role: 'DevOps Engineer', email: 'isabella.mitchell@example.com', img: '/logo.jpg' },
  { id: 37, name: 'Jacob Parker', status: 'Working', role: 'Software Engineer', email: 'jacob.parker@example.com', img: '/logo.jpg' },
  { id: 38, name: 'Katherine Evans', status: 'Working', role: 'Data Analyst', email: 'katherine.evans@example.com', img: '/logo.jpg' },
  { id: 39, name: 'Logan Collins', status: 'Working', role: 'UI Designer', email: 'logan.collins@example.com', img: '/logo.jpg' },
  { id: 40, name: 'Madison Stewart', status: 'Working', role: 'Product Manager', email: 'madison.stewart@example.com', img: '/logo.jpg' },
  { id: 41, name: 'Nathan Sanchez', status: 'Working', role: 'QA Tester', email: 'nathan.sanchez@example.com', img: '/logo.jpg' },
  { id: 42, name: 'Owen Morris', status: 'Working', role: 'DevOps Engineer', email: 'owen.morris@example.com', img: '/logo.jpg' },
  { id: 43, name: 'Penelope Rogers', status: 'Working', role: 'Software Engineer', email: 'penelope.rogers@example.com', img: '/logo.jpg' },
  { id: 44, name: 'Quentin Reed', status: 'Working', role: 'Data Analyst', email: 'quentin.reed@example.com', img: '/logo.jpg' },
  { id: 45, name: 'Riley Cook', status: 'Working', role: 'UI Designer', email: 'riley.cook@example.com', img: '/logo.jpg' },
  { id: 46, name: 'Samuel Bell', status: 'Working', role: 'Product Manager', email: 'samuel.bell@example.com', img: '/logo.jpg' },
  { id: 47, name: 'Tara Bailey', status: 'Working', role: 'QA Tester', email: 'tara.bailey@example.com', img: '/logo.jpg' },
  { id: 48, name: 'Ulysses Cooper', status: 'Working', role: 'DevOps Engineer', email: 'ulysses.cooper@example.com', img: '/logo.jpg' },
  { id: 49, name: 'Victoria Kelly', status: 'Working', role: 'Software Engineer', email: 'victoria.kelly@example.com', img: '/logo.jpg' },
  { id: 50, name: 'Walter Howard', status: 'Working', role: 'Data Analyst', email: 'walter.howard@example.com', img: '/logo.jpg' }
];