// import React from 'react';
// import './App.css';
// import { Route, Routes } from 'react-router-dom';
// import Profile from '../components/Profile/Profile';
// import UsersPage from '../components/UsersPage/UsersPage';
// import UserPage from '../components/UserPage/UserPage';
// import Register from '../components/Register/Register';
// function App(): JSX.Element {
//   return (
//     <Routes>
//       <Route path="/" element={<Profile />} />
//       <Route path="register" element={<Register />} />
//       <Route path="users" element={<UsersPage />}>
//         <Route path=":userId" element={<UserPage />} />
//       </Route>
//     </Routes>
//   );
// }
// export default App;

// import React, { useEffect, useState } from 'react';
// import './App.css';
// import { Route, Routes } from 'react-router-dom';
// import { User, onAuthStateChanged } from 'firebase/auth';
// import { auth } from '../api/firebase';
// import Profile from '../components/Profile/Profile';
// import Register from '../components/Register/Register';
// import AuthContext from '../contexts/AuthContext';
// import UserContext from '../contexts/UserContext';

// function App(): JSX.Element {
//   const [currentUser, setCurrentUser] = useState<User | null>(null);
//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       setCurrentUser(user);
//     });
//   }, []);
//   return (
//     // eslint-disable-next-line react/jsx-no-constructed-context-values
//     <AuthContext.Provider value={currentUser}>
//       <UserContext.Provider value="04924233535">
//         <Routes>
//           <Route path="/" element={<Profile />} />
//           <Route path="register" element={<Register />} />
//         </Routes>
//       </UserContext.Provider>
//     </AuthContext.Provider>
//   );
// }

// export default App;

/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { User, onAuthStateChanged } from 'firebase/auth';
import Profile from '../components/Profile/Profile';
import Register from '../components/Register/Register';
import AuthContext from '../contexts/AuthContext';
import { auth } from '../api/firebase';
import Login from '../components/Login/Login';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import Todos from '../components/Todos/Todos';

function App(): JSX.Element {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(user);
    });
  }, []);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={currentUser}>
      <Routes>
        <Route path="/" element={<ProtectedRoute outlet={<Profile />} />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="todos" element={<Todos />} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
