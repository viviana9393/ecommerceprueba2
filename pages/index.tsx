import { ShopLayout } from "../components/layouts";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <ShopLayout title={"Ecommerce Sena - Home"} pageDescription={"Encuentra los mejores articulos para tu setup"}>
        <Typography variant="h1" component='h1'> TIenda </Typography>
        <Typography variant='h2' sx={{ mb: 1 }}>Articulos</Typography>
    </ShopLayout>
    
  )
}