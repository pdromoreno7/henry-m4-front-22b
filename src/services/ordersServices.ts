const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function createOrderService(
  products: number[],
  userId: number,
  token: string
) {
  try {
    const res = await fetch(`${apiUrl}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ products, userId }),
    });

    if (res.ok) {
      return res.json();
    } else {
      return null;
    }
  } catch (error) {
    throw new Error(error as string);
  }
}

export async function getOrdersService(token: string) {
  console.log("🚀 ~ getOrdersService ~ token:", token);
  try {
    const res = await fetch(`${apiUrl}/users/orders`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Failed to register");
    }
  } catch (error) {
    throw new Error(error as string);
  }
}
