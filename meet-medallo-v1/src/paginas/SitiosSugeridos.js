import React, { Component } from 'react'
import Bootstrap from 'bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './SitiosSugeridos.css';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

  



export const SitiosSugeridos = () => {

    const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
    return (



        
     <div className="SitiosSugeridos">
         
        
         
        <Card className={classes.root,"Primero"}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          MeetMedallo
        </Typography>
        <Typography variant="h5" component="h2">
          Nombre del sitio
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
         Cosas a saber...
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Saber mas...</Button>
      </CardActions>
    </Card>

      <Card className={classes.root,"Segundo"}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          MeetMedallo
        </Typography>
        <Typography variant="h5" component="h2">
          Nombre del sitio
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
         Cosas a saber...
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Saber mas...</Button>
      </CardActions>
    </Card>
    <Card className={classes.root,"Tercero"}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          MeetMedallo
        </Typography>
        <Typography variant="h5" component="h2">
          Nombre del sitio
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
         Cosas a saber...
        </Typography>
        <Typography variant="body2" component="p">
        Texto lingüístico: de acuerdo a Greimas, es un enunciado ya sea gráfico o fónico que nos permite visualizar las palabras que escuchamos que es utilizado para manifestar el proceso lingüístico. Mientras Hjelmslev usa ese término
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Saber mas...</Button>
      </CardActions>
    </Card>

    <Card className={classes.root,"Cuarto"}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          MeetMedallo
        </Typography>
        <Typography variant="h5" component="h2">
          Nombre del sitio
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
         Cosas a saber...
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Saber mas...</Button>
      </CardActions>
    </Card>
       
</div>
    )
}



export default SitiosSugeridos