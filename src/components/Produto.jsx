import { Card, CardActions, CardContent, CardMedia, Typography, Button, Link, Grid } from "@mui/material"

function Produto(props) {
  return (
    <Grid item lg={2.5} md={5} xs={12} >
        <Card sx={{ minHeight: "400px"}}key={props.key}>
            <CardMedia 
                sx={{ height: 270 }}
                image={props.imagem}
                title={props.titulo}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.titulo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.descricao}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    {props.duracao}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="large">
                    <Link href={ "editar/produto/" + props.id }>Editar</Link>
                </Button>
                <Button size="large">
                    <Link href="#" onClick={props.excluir}>Excluir</Link>
                </Button>
            </CardActions>
        </Card>
    </Grid>
  )
}

export default Produto