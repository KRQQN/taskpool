import { useContext, createContext, useState, useEffect } from "react";
import { auth } from "@/app/firebase/firebase";
import { User, onAuthStateChanged } from "firebase/auth";
import { userInfoType } from "@/lib/types";


const AuthContext = createContext<userInfoType | null | false>(false);

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userInfo, setUserInfo] = useState<userInfoType | null | false>(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser: User | null | false) => {
      if (authUser) {

        const mapToUserInfo: userInfoType = {
          id: authUser.uid,
          name: authUser.displayName || "",
          email: authUser.email || "",
          employer: "Facebonk", // TODO: add fields to user
        };

        setUserInfo(mapToUserInfo);
      } else setUserInfo(null);
    });

    return () => unsubscribe();
  }, []);

  return <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>;
}

export const userAuth = () => {
  return useContext(AuthContext);
};
