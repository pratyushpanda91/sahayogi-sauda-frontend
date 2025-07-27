// // import { useState, useEffect, useCallback } from "react";
// // import { jwtDecode } from "jwt-decode";

// // export const useAuth = () => {
// //   const [token, setToken] = useState(localStorage.getItem("token"));
// //   const [user, setUser] = useState(null);

// //   useEffect(() => {
// //     if (token) {
// //       try {
// //         const decodedUser = jwtDecode(token);
// //         setUser(decodedUser.user);
// //         localStorage.setItem("token", token);
// //       } catch (error) {
// //         console.error("Invalid token:", error);
// //         setUser(null);
// //         localStorage.removeItem("token");
// //       }
// //     } else {
// //       setUser(null);
// //       localStorage.removeItem("token");
// //     }
// //   }, [token]);

// //   const logout = useCallback(() => {
// //     setToken(null);
// //   }, []);

// //   const login = useCallback((newToken) => {
// //     setToken(newToken);
// //   }, []);

// //   return { token, user, login, logout };
// // };

// import { useState, useEffect, useCallback } from "react";
// import { jwtDecode } from "jwt-decode";

// export const useAuth = () => {
//   const [token, setToken] = useState(localStorage.getItem("token"));
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     if (token) {
//       try {
//         const decodedUser = jwtDecode(token);
//         setUser(decodedUser.user);
//         localStorage.setItem("token", token);
//       } catch (error) {
//         console.error("Invalid token:", error);
//         setUser(null);
//         localStorage.removeItem("token");
//       }
//     } else {
//       setUser(null);
//       localStorage.removeItem("token");
//     }
//   }, [token]);

//   const logout = useCallback(() => {
//     setToken(null);
//   }, []);

//   const login = useCallback((newToken) => {
//     setToken(newToken);
//   }, []);

//   return { token, user, login, logout };
// };
import { useState, useEffect, useCallback } from "react";
import { jwtDecode } from "jwt-decode";

export const useAuth = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      try {
        const decodedUser = jwtDecode(token);
        setUser(decodedUser.user);
        localStorage.setItem("token", token);
      } catch (error) {
        console.error("Invalid token:", error);
        setUser(null);
        localStorage.removeItem("token");
      }
    } else {
      setUser(null);
      localStorage.removeItem("token");
    }
  }, [token]);

  const logout = useCallback(() => {
    setToken(null);
  }, []);

  const login = useCallback((newToken) => {
    setToken(newToken);
  }, []);

  return { token, user, login, logout };
};
