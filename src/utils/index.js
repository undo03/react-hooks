import { useEffect, useState } from 'react'
export const useDocumentTitle = (title) => {
  useEffect(
    () => {
      document.title = title;
      return () => (document.title = "React App")
    },
    [title]
  )
}


function getSize() {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth
  };
}

export const useWindowSize = () => {
  let [windowSize, setWindowSize] = useState(getSize())

  const handleResize = () => {
    setWindowSize(getSize())
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    };
  }, [])

  return windowSize
}