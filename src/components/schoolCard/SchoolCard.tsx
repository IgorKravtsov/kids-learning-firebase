import React from 'react'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import { SchoolBookToOpen } from 'pages/Schoolbooks/books'

export interface SchoolCardProps {
  book: SchoolBookToOpen
  form: number
}

const SchoolCard: React.FC<SchoolCardProps> = ({ book, form }): React.ReactElement => {
  const { authors, image, name, path } = book

  const imagePath = image
    ? `${process.env.PUBLIC_URL}/schoolbooks/${form}Class/img/${image}`
    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJXpNDdPVhskxm3aDO3dJUHHfTgdfF-D-Y4Q&usqp=CAU'
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component='img' height='300' image={imagePath} alt={`book ${name}`} />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {name}
        </Typography>
        <Typography variant='h6' color='text.secondary'>
          {form} клас
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {authors.length > 0 && `Автори: ${authors.join(', ')}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size='small'
          onClick={() => window.open(`${process.env.PUBLIC_URL}/schoolbooks/${form}Class/books/${path}`, '_blank', 'noopener,noreferrer')}
        >
          Відкрити
        </Button>
      </CardActions>
    </Card>
  )
}

export default SchoolCard
