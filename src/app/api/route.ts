import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  query,
  where,
} from "firebase/firestore";
import app from "../firebase";

import { NextRequest, NextResponse } from "next/server";
const firestore = getFirestore(app);

export async function GET() {
  const snapshot = await getDocs(collection(firestore, "users"));

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return NextResponse.json({ data });
}

export async function POST(request: NextRequest) {
  let req = await request.json();
  let email = req.data.email_addresses[0].email_address as string;
  let name = req.data.first_name as string;

  const usersCollection = collection(firestore, "users");

  const q = query(
    usersCollection,
    where("name", "==", name),
    where("email", "==", email)
  );

  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    const docRef = await addDoc(collection(firestore, "users"), {
      name: name,
      email: email,
    });

    return NextResponse.json({ message: "User Added" });
  } else {
    return NextResponse.json({ message: "User Already Exists" });
  }
}
