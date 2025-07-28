import { AnimatePresence, motion } from 'framer-motion'
import React from 'react' // ← IMPORTANTE!
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

interface Props{
  textKey: string,
  as?: keyof JSX.IntrinsicElements,
  className?: string,
}

const TranslatedText: React.FC<Props> = ({ textKey, as: Tag = 'p', className }) => {
  const { t, i18n } = useTranslation()
  const [text, setText] = useState(t(textKey))
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    setVisible(false)
    const timeout = setTimeout(() => {
      setText(t(textKey))
      setVisible(true)
    }, 200)
    return () => clearTimeout(timeout)
  }, [i18n.language, t, textKey])

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          key={text}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          {React.createElement(Tag, { className }, text)}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default TranslatedText
