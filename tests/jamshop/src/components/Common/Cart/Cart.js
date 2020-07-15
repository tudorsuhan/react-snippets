import React, { useState } from "react"

import CartDetails from "../CartDetails"

const Cart = ({ count }) => {
  const [shown, setShown] = useState(false)
  const toggleCart = () => setShown(!shown)
  const hideCart = () => setShown(false)
  return (
    <>
      <div style={styles.bin} onClick={count ? toggleCart : undefined}>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0)">
            <path d="M0.445364 10.8437C0.841516 10.3467 1.43583 10.0615 2.07603 10.0615H7.85361L10.9866 2.88774C11.1808 2.44296 11.6989 2.23969 12.1437 2.43405C12.5886 2.62829 12.7917 3.14643 12.5974 3.59128L9.77173 10.0616H20.2283L17.4026 3.59128C17.2083 3.14643 17.4114 2.62835 17.8563 2.43405C18.301 2.23969 18.8192 2.44284 19.0134 2.88774L22.1464 10.0616H27.924C28.5642 10.0616 29.1585 10.3467 29.5546 10.8437C29.9435 11.3317 30.087 11.959 29.9483 12.565L26.8629 26.0415C26.6475 26.9825 25.8151 27.6397 24.8386 27.6397H5.1614C4.18493 27.6397 3.35249 26.9825 3.13704 26.0415L0.051672 12.5649C-0.087019 11.9589 0.0564785 11.3316 0.445364 10.8437ZM5.1614 25.8819H24.8386C24.9878 25.8819 25.1186 25.784 25.1494 25.6491L28.2348 12.1727C28.259 12.0669 28.2184 11.9873 28.18 11.9392C28.1443 11.8945 28.0636 11.8194 27.924 11.8194H22.914L23.1442 12.3466C23.3385 12.7914 23.1354 13.3095 22.6905 13.5038C22.5761 13.5539 22.4568 13.5775 22.3393 13.5775C22.0005 13.5775 21.6776 13.3805 21.5334 13.0502L20.9959 11.8195H9.00398L8.4665 13.0502C8.32224 13.3805 7.99939 13.5775 7.6606 13.5775C7.54318 13.5775 7.42382 13.5539 7.30933 13.5038C6.86449 13.3096 6.66134 12.7914 6.85564 12.3466L7.08585 11.8194H2.07591C1.93622 11.8194 1.85554 11.8945 1.81991 11.9392C1.78154 11.9874 1.74087 12.067 1.76507 12.1726L4.85044 25.6492C4.88138 25.784 5.01216 25.8819 5.1614 25.8819Z" fill="#EEEEEE" />
            <path d="M20.2734 15.628C20.7588 15.628 21.1523 16.0215 21.1523 16.5069V22.9522C21.1523 23.4376 20.7588 23.8311 20.2734 23.8311C19.788 23.8311 19.3945 23.4376 19.3945 22.9522V16.5069C19.3945 16.0215 19.788 15.628 20.2734 15.628Z" fill="#EEEEEE" />
            <path d="M15 15.628C15.4854 15.628 15.8789 16.0215 15.8789 16.5069V22.9522C15.8789 23.4376 15.4854 23.8311 15 23.8311C14.5146 23.8311 14.1211 23.4376 14.1211 22.9522V16.5069C14.1211 16.0215 14.5146 15.628 15 15.628Z" fill="#EEEEEE" />
            <path d="M9.72656 15.628C10.212 15.628 10.6055 16.0215 10.6055 16.5069V22.9522C10.6055 23.4376 10.212 23.8311 9.72656 23.8311C9.24117 23.8311 8.84766 23.4376 8.84766 22.9522V16.5069C8.84771 16.0215 9.24117 15.628 9.72656 15.628Z" fill="#EEEEEE" />
          </g>
          <defs>
            <clipPath>
              <rect width="30" height="30" fill="white" transform="matrix(-1 0 0 1 30 0)" />
            </clipPath>
          </defs>
        </svg>
        <div style={styles.badge}>{count}</div>
        <div style={styles.arrow}>
          <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 1L5.5 7L1 1" stroke="#EEEEEE" strokeWidth="2" />
          </svg>
        </div>
      </div>
      {shown && !!count && <CartDetails />}
      {shown && <div style={styles.binWrapper} onClick={hideCart} />}
    </>
  )
}

const styles = {
  bin: {
    cursor: "pointer",
    position: "relative",
    width: 60,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  badge: {
    width: 14,
    height: 16,
    borderRadius: 10,
    padding: 2,
    background: "#AB528D",
    position: "absolute",
    top: 5,
    right: 25,
    fontSize: 9,
    color: "#FFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  arrow: {
    position: "absolute",
    right: 0,
  },
  binWrapper: {
    position: "fixed",
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
    background: "rgb(28, 4, 46)",
    opacity: 0.55,
    filter: blur(10),
  },
}

export default Cart
