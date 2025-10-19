import React, { useState } from 'react'
import { Blurhash } from 'react-blurhash'

export function ImageComponent({ src, hash, aspectRatio, style = {} }) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div style={{ 
      position: 'relative',
      width: '100%', 
      aspectRatio: aspectRatio,
      ...style 
    }}>
      {/* Blurhash placeholder */}
      {!imageLoaded && hash && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}>
          <Blurhash
            hash={hash}
            width="100%"
            height="100%"
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        </div>
      )}
      
      {/* Actual image */}
      <img
        src={src}
        alt=""
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
        style={{ 
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: imageLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out'
        }}
      />
    </div>
  )
}