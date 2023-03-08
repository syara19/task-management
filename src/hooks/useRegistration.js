import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

const useRegistration = () => {
  const register = async (email, password) => {
    //Proses regist user
    const res = await createUserWithEmailAndPassword(auth, email, password);
    if (!res) {
      throw new Error("Email sudah terdaftar");
    }
    console.log(res.user);

    //upload avatar
    // update photoURL dan display name pada user
    // menambahkan data user ke firestore
  };
  return register;
};

export default useRegistration;
