// import axios from "axios";


// export async function getProducts() {
//   try {
//     const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`);
//     return res.data;
//   } catch (error) {
//     console.log("Error fetching products", error);
//     return [];
//   }
// }

// export async function getProductById(id: string) {
//   try{
//     const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);
//   return res.data;
//   }catch(error){
//     console.log("No product is found", error);
//     return [];
//   }
// }

// export async function getCategories() {
//   try{
//     const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
//   return res.data;
//   }catch(error){
//     console.log("Error fetching categories", error);
//     return [];
//   }
// }