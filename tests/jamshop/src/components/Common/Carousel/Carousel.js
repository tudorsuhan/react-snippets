import React, { useState, useEffect } from "react"

const Carousel = props => {
  const { children, visibleCount, totalCount } = props
  const [from, setFrom] = useState(0)
  const [items, setItems] = useState([])
  const canMove = visibleCount < totalCount

  const move = shift => {
    let nextFrom = from + shift
    if (nextFrom >= totalCount) {
      nextFrom = 0
    }
    if (nextFrom < 0) {
      if (shift > 0) nextFrom = 0
      else nextFrom = totalCount + shift
    }
    setFrom(nextFrom)
  }
  const moveLeft = () => move(1)
  const moveRight = () => move(-1)

  useEffect(() => {
    const part = children.slice(from, from + visibleCount)
    const offset = visibleCount - part.length
    if (offset) {
      for (let i = 0; i < offset; i++) {
        part.push(children[i])
      }
    }
    setItems(part)
  }, [from, visibleCount])

  return (
    <div style={styles.carouselWrapper}>
      {canMove && (
        <div onClick={moveLeft} style={styles.buttonMove}>
          <svg
            version="1.1" width="65pt" height="65pt" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            viewBox="0 0 512 512" xmlSpace="preserve"
          >
            <g>
              <g>
                <g>
                  <path
                    fill="#FFF" d="M256,0C114.833,0,0,114.833,0,256s114.833,256,256,256s256-114.833,256-256S397.167,0,256,0z M256,490.667
                C126.604,490.667,21.333,385.396,21.333,256S126.604,21.333,256,21.333S490.667,126.604,490.667,256S385.396,490.667,256,490.667
                z"
                  />
                  <path
                    fill="#FFF" d="M306.208,131.125c-4.167-4.167-10.917-4.167-15.083,0L173.792,248.458c-4.167,4.167-4.167,10.917,0,15.083
                l117.333,117.333c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125c4.167-4.167,4.167-10.917,0-15.083
                L196.417,256l109.792-109.792C310.375,142.042,310.375,135.292,306.208,131.125z"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
      )}
      <div style={styles.carousel}>
        {items.map((item, i) => {
          const wrapperStyles = i === 0 ? {} : styles.carouselItemWrapper
          return <div style={{ ...styles.carouselItem, ...wrapperStyles }} key={item.key}>{item}</div>
        })}
      </div>
      {canMove && (
        <div onClick={moveRight} style={styles.buttonMove}>
          <svg
            version="1.1" width="65pt" height="65pt" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            viewBox="0 0 512 512" xmlSpace="preserve"
          >
            <g>
              <g>
                <g>
                  <path
                    fill="#FFF" d="M256,0C114.833,0,0,114.833,0,256s114.833,256,256,256s256-114.833,256-256S397.167,0,256,0z M256,490.667
              C126.604,490.667,21.333,385.396,21.333,256S126.604,21.333,256,21.333S490.667,126.604,490.667,256S385.396,490.667,256,490.667
              z"
                  />
                  <path
                    fill="#FFF" d="M220.875,131.125c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083L315.583,256L205.792,365.792
              c-4.167,4.167-4.167,10.917,0,15.083c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l117.333-117.333
              c4.167-4.167,4.167-10.917,0-15.083L220.875,131.125z"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
      )}
    </div>
  )
}

export default Carousel

const styles = {
  carousel: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexGrow: 1,
    flexShrink: 1,
    overflow: "auto",
    marginRight: 20,
    marginLeft: 20,
  },
  carouselWrapper: {
    display: "inline-flex",
    justifyContent: "flex-start",
    alignItems: "center",
    maxWidth: "100%",
  },
  carouselItem: {
    flexGrow: 0,
    flexShrink: 0,
  },
  carouselItemWrapper: {
    marginLeft: 20,
  },
  buttonMove: {
    cursor: "pointer",
  },
}
