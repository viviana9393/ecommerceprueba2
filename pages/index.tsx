
import { ShopLayout } from "../components/layouts";
import { Card, CardActionArea, CardMedia, Grid, Typography } from "@mui/material";
import { initialData } from "../database/products";
import { ProductList } from "../components/products";

export default function Home() {
  return (
    <ShopLayout title={"Ecommerce Sena - Home"} pageDescription={"Encuentra los mejores articulos para tu setup"}>
        <Typography variant="h1" component='h1'> TIenda </Typography>
        <Typography variant='h2' sx={{ mb: 1 }}>Articulos</Typography>
        
        <ProductList products={initialData.products as any}/> 
      </ShopLayout> 
  )
}