import React from 'react';

import './Home.css';
function Home() {
    return (
        <div className='home'>
           <div className='home-courses'>
               <h1 className='home-heading'>Registered Courses List</h1>
              
<table>
  <tr>
    <th>Course No</th>
    <th>Course Name</th>
    <th>Credits</th>
    <th>Teacher</th>
    <th>Class</th>
    
  </tr>
  <tr>
    <td>CSC354</td>
    <td>Mobile Deveploment</td>
    <td>3</td>
    <td>Zaheer Sani</td>
    <td>BCS 6A</td>
    
    
    
  </tr>
  <tr>
  <td>CSC354</td>
    <td>Machine Learning</td>
    <td>3</td>
    <td>Dr. Usman Yaseen</td>
    <td>BCS 6A</td>
  </tr>
  <tr>
  <td>CSC475</td>
  <td>Numerical Computing</td>
    <td>3</td>
    <td>Tanveer Ahmad</td>
    <td>BCS 6A</td>
  </tr>
  <tr>
  <td>CSC312</td>
  <td>Theory of Automata</td>
    <td>3</td>
    <td>Muhammad Mustafa</td>
    <td>BCS 6A</td>
  </tr>
  <tr>
  <td>CSC350</td>
  <td>Topics in CS</td>
    <td>3</td>
    <td>Mr. Rashid Mukhtar</td>
    <td>BCS 6A</td>
  </tr>
  
  
  
</table>

           </div>
        </div>
    )
}

export default Home;
