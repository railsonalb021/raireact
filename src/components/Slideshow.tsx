import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import img1 from '../assets/projectimage1.png'
import img2 from '../assets/projectimage2.png'

const images = [img1, img2]

export function Slideshow(){
  const [index, setIndex] = useState(0)

  const nextImage = () => setIndex((index + 1) % images.length)
  const prevImage = () => setIndex((index - 1 + images.length) % images.length)

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: 600,
        margin: 'auto',
        aspectRatio: '16 / 9',
        overflow: 'hidden',
        borderRadius: 12,
      }}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
      </AnimatePresence>

      <button
        type="button"
        onClick={prevImage}
        style={{
          position: 'absolute',
          top: '50%',
          left: 10,
          transform: 'translateY(-50%)',
          zIndex: 2,
          background: '#fff',
          border: 'none',
          borderRadius: '50%',
          padding: 10,
          cursor: 'pointer',
        }}
      >
        ◀
      </button>

      <button
        type="button"
        onClick={nextImage}
        style={{
          position: 'absolute',
          top: '50%',
          right: 10,
          transform: 'translateY(-50%)',
          zIndex: 2,
          background: '#fff',
          border: 'none',
          borderRadius: '50%',
          padding: 10,
          cursor: 'pointer',
        }}
      >
        ▶
      </button>
    </div>
  )
}
