import { useState, useEffect } from "react"
import Card from "../../Components/Card"
import Layout from "../../Components/Layout"

function Home() {
  const [items, setItems] = useState(null)
  const cleanImageUrl = (url) => {
    return url.replace(/[\[\]\"\\]/g, ""); // Elimina caracteres [ ] " y \
  };
  
  
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => {
        const cleanedData = data.map((item) => ({
          ...item,
          images: item.images.map((img) => cleanImageUrl(img)), // Limpia las URLs de las imágenes
        }));
        setItems(cleanedData); // Guarda los datos limpios
      });
  }, []);
  

  return (
    <Layout>
      Home
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          items?.map(item => (
            <Card key={item.id} data={item} />
          ))
        }
      </div>
    </Layout>
  )
}
  
export default Home