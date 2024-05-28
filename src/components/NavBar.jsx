// import React from 'react'
// import moment from 'moment/moment'
// import { useLocation } from 'react-router-dom'
// const NavBar = () => {
//   const location = useLocation();
//   let displayPath = location.pathname;
//   return (
//     <>
//     <div>
//         <div className="bar d-flex text-white me-5 ms-5 " >
//           <p className='fs-4 ms-2 mt-2 mb-1'>{displayPath}</p>
//            <p className='mt-2 fs-4 me-3 mb-1 date'>{moment().format('llll')}</p>
//         </div>
//      </div>

//      </>
//   )
// }

// export default NavBar
// import React from 'react';
// import moment from 'moment/moment';
// import { useLocation } from 'react-router-dom';

// const NavBar = () => {
//   const location = useLocation();
//   let displayPath = location.pathname;

//   // Check karta hai agar path '/Dashboard' hai to sirf 'Dashboard' dikhaega, warna saath slash ke sath
//   if (location.pathname === '/Dashboard') {
//     displayPath = 'Dashboard';
//   }

//   return (
//     <div>
//       <div className="bar d-flex text-white me-5 ms-5">
//         <p className='fs-4 ms-2 mt-2 mb-1'>
//           {displayPath === '/Dashboard' ? 'Dashboard' : `${displayPath.split('/')[1]}`}
//         </p>
//         <p className='mt-2 fs-4 me-3 mb-1 date'>{moment().format('llll')}</p>
//       </div>
//     </div>
//   );
// };

// export default NavBar;
import React from 'react';
import moment from 'moment/moment';
import { useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  let displayPath = location.pathname;

  // Check if path is '/Dashboard' to display only 'Dashboard', else show path without the leading slash
  if (location.pathname === '/Dashboard') {
    displayPath = 'Dashboard';
  } else {
    displayPath = displayPath.slice(1); // Remove the leading slash
  }

  return (
    <div>
      <div className="bar d-flex text-white me-2">
        <p className='fs-4 ms-2 mt-2 mb-1'>
          {displayPath ? displayPath:"Dashboard"}
        </p>
        <p className='mt-2 fs-4 me-3 mb-1 date'>{moment().format('llll')}</p>
      </div>
    </div>
  );
};

export default NavBar;