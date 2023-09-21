import { Card, CardActions, CardContent, CardMedia, Typography, Button, Link } from "@mui/material"

function Produto(props) {
  return (
    <Card sx={{ maxWidth: 260 }} key={props.key}>
        <CardMedia 
            sx={{ height: 230 }}
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
  )
}

export default Produto