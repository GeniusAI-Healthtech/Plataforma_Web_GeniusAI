import React from 'react'
import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from '@mui/material'

interface ImageSelectorProps {
  imageList: {
    img: string
    title: string
  }[]
  setSelectedImage: (blob: Blob | null) => void
}

export const ImgListEx: React.FC<ImageSelectorProps> = ({
  imageList,
  setSelectedImage,
}) => {
  const handleSelectImage = async (imagePath: string) => {
    try {
      const response = await fetch(imagePath)
      if (!response.ok) throw new Error('Network response was not ok.')
      const blob = await response.blob()
      setSelectedImage(blob)
    } catch (error) {
      console.error('Error fetching image:', error)
      setSelectedImage(null)
    }
  }

  return (
    <Box
      sx={{
        overflowY: 'auto',
        maxHeight: 300,
        width: '100%',
        my: 2,
        display: 'flex',
        flexDirection: 'column', // Adicionado para organizar o título acima da lista
        alignItems: 'center',
      }}
    >
      <Typography variant="h6" sx={{ mb: 2, color: '#1d4ed8' }}>
        {' '}
        Exemplos de Teste
      </Typography>
      <ImageList gap={8} sx={{ width: 'auto', height: 'auto' }}>
        {imageList.map((item, index) => (
          <ImageListItem
            key={index}
            onClick={() => handleSelectImage(item.img)}
          >
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              style={{
                width: '150px',
                height: '100px',
                objectFit: 'cover',
                borderRadius: '5px',
              }}
            />
            <ImageListItemBar title={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  )
}
