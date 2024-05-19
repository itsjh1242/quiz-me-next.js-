import { useEffect, useState } from "react";
import { User } from "firebase/auth"; // Import the 'User' type from the appropriate module
import { auth } from "./firebase";

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null); // Add type annotation for 'user' state variable

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [user]);
  return user;
};

export default useAuth;
