import { FormDataType, RegisterFormType } from "@/interfaces";

const apiURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
export async function registerUser(userData: RegisterFormType) {
  console.log("🚀 ~ registerUser ~ userData:", userData);
  try {
    const response = await fetch(`${apiURL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      return response.json();
    } else {
      alert(response.statusText);
      throw new Error(response.statusText);
    }
  } catch (error) {
    throw new Error(error as string);
  }
}

export async function loginServices(userData: FormDataType) {
  try {
    const res = await fetch(`${apiURL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (res.ok) {
      return res.json();
    } else {
      alert("Failed to register");
      throw new Error("Failed to register");
    }
  } catch (error) {
    throw new Error(error as string);
  }
}
