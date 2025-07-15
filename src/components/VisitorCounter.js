import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const isNew = !localStorage.getItem("hasVisited");
    const ref = doc(db, "visitors", "count");
    const update = async () => {
      try {
        const snap = await getDoc(ref);
        if (isNew) {
          localStorage.setItem("hasVisited", "true");
          if (snap.exists()) {
            await updateDoc(ref, { total: increment(1) });
            setCount(snap.data().total + 1);
          } else {
            await setDoc(ref, { total: 1 });
            setCount(1);
          }
        } else if (snap.exists()) {
          setCount(snap.data().total);
        }
      } catch (e) {
        setCount("—");
      }
    };
    update();
  }, []);

  return (
    <div className="vcounter-professional py-1">
      <i className="bi bi-people-fill vcounter-icon-pro"></i>
      <span className="vcounter-label-pro">Total Visitors</span>
      <span className="vcounter-num-pro">{count}</span>
    </div>
  );
};

export default VisitorCounter;
