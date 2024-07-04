import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export function MentorCard() {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="/background.jpg"
        title="mentor avatar"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button href='/' size="small" variant='outlined' sx={{ color: "var(--thirdColor)" }}>Share</Button>
        <Button size="small" variant='outlined' sx={{ color: "var(--thirdColor)" }}>Learn More</Button>
      </CardActions>
    </Card>
  )
}
