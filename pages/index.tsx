
import { ShopLayout } from "../components/layouts";
import { Card, CardActionArea, CardMedia, Grid, Typography } from "@mui/material";
import { initialData } from "../database/products";

export default function Home() {
  return (
    <ShopLayout title={"Ecommerce Sena - Home"} pageDescription={"Encuentra los mejores articulos para tu setup"}>
        <Typography variant="h1" component='h1'> TIenda </Typography>
        <Typography variant='h2' sx={{ mb: 1 }}>Articulos</Typography>
        
        <Grid  container spacing={4}>
          {
            initialData.products.map(product => ( 
              <Grid item xs={6} sm={4} key={product.slug}>
                  <Card>
                    <CardActionArea>
                        <CardMedia
                        component='img'
                        image={`products/${product.images[1]}`}
                        alt={product.title} 
                        />
                      </CardActionArea>
                  </Card>
              </Grid> 
            ))
          }  
        </Grid>  
      </ShopLayout> 
  )
}