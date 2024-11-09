import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const response = await axios.get("http://localhost:8010/get", {
        headers: {
          Authorization: `Bearer ${req.headers.authorization}`,
        },
      });

      const cartItems = response.data;

      if (cartItems.length > 0) {
        return res.status(200).json(cartItems);
      } else {
        return res.status(404).json({ message: "Cart is empty" });
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
      return res
        .status(500)
        .json({ message: "Server error while fetching cart items" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
