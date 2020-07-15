import React from "react"
import { navigate } from "gatsby"

function ProductCard(props) {
  const {
    item: { name, slug, price, excerpt, path },
    addProductToCart,
  } = props
  const onAddProductToCart = (e) => {
    e.stopPropagation()
    addProductToCart({ slug, name, price })
  }
  const navigateToProduct = () => navigate(path)
  return (
    <figure style={styles.card} onClick={navigateToProduct}>
      <div style={styles.cardImage}>
        <svg width="91" height="92" viewBox="0 0 91 92" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0)">
            <path d="M85.4634 39.876H5.60611C4.96891 39.876 4.45206 39.3551 4.45206 38.7115V33.165C4.45206 32.5221 4.96891 32.0013 5.60611 32.0013H85.4634C86.1013 32.0013 86.6175 32.5221 86.6175 33.165V38.7115C86.6175 39.3551 86.1013 39.876 85.4634 39.876Z" fill="#9B6A57" />
            <path d="M85.4634 36.2822H5.60611C4.96891 36.2822 4.45206 35.7614 4.45206 35.1177V38.7115C4.45206 39.3551 4.96891 39.876 5.60611 39.876H85.4634C86.1013 39.876 86.6175 39.3551 86.6175 38.7115V35.1177C86.6175 35.7614 86.1013 36.2822 85.4634 36.2822Z" fill="#8B5F4E" />
            <path d="M41.6323 89.3084V41.032C41.6323 40.3891 42.1491 39.8676 42.7863 39.8676H48.2832C48.9204 39.8676 49.4373 40.3891 49.4373 41.032V89.3084C49.4373 89.9513 48.9204 90.4728 48.2832 90.4728H42.7863C42.1491 90.4728 41.6323 89.9513 41.6323 89.3084Z" fill="#9B6A57" />
            <path d="M45.1939 89.3084V41.032C45.1939 40.3891 45.7108 39.8676 46.348 39.8676H42.7863C42.1491 39.8676 41.6323 40.3891 41.6323 41.032V89.3084C41.6323 89.9513 42.1491 90.4728 42.7863 90.4728H46.348C45.7108 90.4728 45.1939 89.9513 45.1939 89.3084Z" fill="#8B5F4E" />
            <path d="M54.2274 78.6464H36.8415C35.5302 78.6464 34.5911 77.369 34.9716 76.1034L39.5433 60.8819H51.5263L56.098 76.1034C56.4785 77.3697 55.5394 78.6464 54.2274 78.6464Z" fill="#E7CE5F" />
            <path d="M40.3141 76.1034L44.8858 60.8819H39.5433L34.9716 76.1034C34.5918 77.3697 35.5302 78.6471 36.8415 78.6471H42.1839C40.8734 78.6464 39.9342 77.3697 40.3141 76.1034Z" fill="#D3BA50" />
            <path d="M22.0071 49.4008C16.9199 49.4008 12.7969 45.2406 12.7969 40.1083V36.57C12.7969 31.4376 16.9199 27.2767 22.0071 27.2767C27.0928 27.2767 31.2166 31.4369 31.2166 36.57V40.1083C31.2166 45.2406 27.0928 49.4008 22.0071 49.4008Z" fill="#E7CE5F" />
            <path d="M31.2166 40.1083V36.57C31.2166 32.1388 28.1425 28.4349 24.0293 27.5042C23.8929 27.6537 23.7594 27.8074 23.6307 27.966C21.765 30.2788 21.038 33.2794 21.637 36.1994L21.6558 36.2906L25.1402 48.8484C28.6837 47.5548 31.2166 44.1302 31.2166 40.1083Z" fill="#D3BA50" />
            <path d="M69.0632 49.4008C63.976 49.4008 59.853 45.2406 59.853 40.1083V36.57C59.853 31.4376 63.976 27.2767 69.0632 27.2767C74.149 27.2767 78.2727 31.4369 78.2727 36.57V40.1083C78.2727 45.2406 74.1497 49.4008 69.0632 49.4008Z" fill="#E7CE5F" />
            <path d="M67.0403 27.5042C62.9277 28.4349 59.853 32.1388 59.853 36.57V40.1083C59.853 44.1302 62.3858 47.5548 65.9294 48.8484L69.4138 36.2906L69.4326 36.1994C70.0315 33.2794 69.3046 30.2788 67.4389 27.966C67.3102 27.8074 67.1766 27.6537 67.0403 27.5042Z" fill="#D3BA50" />
            <path d="M61.0147 16.7875C61.0147 25.4139 54.0841 32.407 45.5348 32.407C36.9854 32.407 30.0548 25.4139 30.0548 16.7875C30.0548 8.16105 36.9854 1.16797 45.5348 1.16797C54.0841 1.16797 61.0147 8.16105 61.0147 16.7875Z" fill="#E7CE5F" />
            <path d="M35.3973 16.7875C35.3973 9.07985 40.9297 2.67777 48.206 1.4003C47.3385 1.24799 46.446 1.16797 45.5348 1.16797C36.9854 1.16797 30.0548 8.16105 30.0548 16.7875C30.0548 25.4139 36.9854 32.407 45.5348 32.407C46.446 32.407 47.3385 32.3263 48.206 32.1739C40.9297 30.8972 35.3973 24.4944 35.3973 16.7875Z" fill="#D3BA50" />
            <path d="M45.5348 67.7346C38.2146 67.7346 31.7898 62.8171 29.8162 55.7046L24.2526 35.6533C23.3392 31.1997 26.7102 27.0234 31.2173 27.0234H59.8523C64.36 27.0234 67.7304 31.1997 66.817 35.6533L61.2533 55.7046C59.2798 62.8171 52.8549 67.7346 45.5348 67.7346Z" fill="#FBE067" />
            <path d="M35.1587 55.7046L29.595 35.6533C28.6817 31.1997 32.0527 27.0234 36.5597 27.0234H31.2173C26.7102 27.0234 23.3392 31.1997 24.2526 35.6533L29.8162 55.7046C31.7898 62.8171 38.2146 67.7346 45.5348 67.7346C46.4412 67.7346 47.3337 67.6588 48.206 67.5128C42.0344 66.4824 36.8874 61.9362 35.1587 55.7046Z" fill="#E7CE5F" />
            <path d="M40.1784 22.1929C40.4386 22.4554 40.7808 22.5873 41.1224 22.5873C41.4639 22.5873 41.8062 22.4554 42.067 22.1929L45.5348 18.6932L49.0025 22.1929C49.2634 22.4554 49.6049 22.5873 49.9472 22.5873C50.2887 22.5873 50.6303 22.4554 50.8912 22.1929C51.4129 21.6657 51.4129 20.8129 50.8912 20.2865L47.4234 16.7875L50.8912 13.2885C51.4129 12.7621 51.4129 11.9086 50.8912 11.3828C50.3694 10.8564 49.5242 10.8564 49.0025 11.3828L45.5348 14.8811L42.067 11.3821C41.5453 10.8557 40.7001 10.8557 40.1784 11.3821C39.6567 11.9086 39.6567 12.7621 40.1784 13.2878L43.6461 16.7875L40.1784 20.2865C39.6567 20.8129 39.6567 21.6657 40.1784 22.1929Z" fill="black" />
            <path d="M33.1713 44.1898C33.1713 51.0685 38.7176 56.6648 45.5348 56.6648C52.352 56.6648 57.8983 51.0685 57.8983 44.1898C57.8983 37.3112 52.352 31.7142 45.5348 31.7142C38.7176 31.7142 33.1713 37.3112 33.1713 44.1898ZM55.2271 44.1898C55.2271 49.5826 50.8793 53.9695 45.5348 53.9695C40.1902 53.9695 35.8425 49.5826 35.8425 44.1898C35.8425 38.7971 40.1902 34.4095 45.5348 34.4095C50.8793 34.4095 55.2271 38.7971 55.2271 44.1898Z" fill="black" />
            <path d="M39.2532 44.1899C39.2532 47.6847 42.0712 50.5274 45.5348 50.5274C48.9983 50.5274 51.8163 47.6847 51.8163 44.1899C51.8163 40.6951 48.9983 37.8517 45.5348 37.8517C42.0712 37.8517 39.2532 40.6951 39.2532 44.1899ZM49.1451 44.1899C49.1451 46.198 47.5257 47.8321 45.5348 47.8321C43.5439 47.8321 41.9244 46.198 41.9244 44.1899C41.9244 42.181 43.5439 40.547 45.5348 40.547C47.5257 40.547 49.1451 42.181 49.1451 44.1899Z" fill="black" />
            <path d="M85.4634 30.6536H77.8233C75.9291 27.8067 72.7097 25.9291 69.0632 25.9291C67.443 25.9291 65.8514 26.3053 64.4094 27.022C63.0675 26.1523 61.4961 25.6757 59.8551 25.6757C61.4752 23.0183 62.3503 19.9454 62.3503 16.7875C62.3503 7.43178 54.8069 -0.179688 45.5348 -0.179688C36.2627 -0.179688 28.7192 7.43178 28.7192 16.7875C28.7192 19.9454 29.595 23.0183 31.2151 25.6757C29.5742 25.6757 28.0027 26.1523 26.6601 27.022C25.2181 26.306 23.6265 25.9291 22.007 25.9291C18.3605 25.9291 15.1411 27.8067 13.2462 30.6536H5.6061C4.23361 30.6536 3.11642 31.7802 3.11642 33.165V38.7115C3.11642 40.0971 4.23292 41.2236 5.6061 41.2236H11.519C12.0734 46.5686 16.5651 50.7485 22.0064 50.7485C23.6752 50.7485 25.2821 50.3603 26.7401 49.6177L28.53 56.0675C29.7724 60.5457 32.6788 64.2328 36.4526 66.5252L33.6937 75.7118C33.3883 76.7281 33.5727 77.7999 34.1994 78.6527C34.8269 79.5056 35.7896 79.9941 36.8414 79.9941H40.2966V89.3084C40.2966 90.6932 41.4131 91.8205 42.7863 91.8205H48.2832C49.6557 91.8205 50.7722 90.6932 50.7722 89.3084V79.9941H54.2274C55.2792 79.9941 56.2427 79.5056 56.8694 78.6527C57.4962 77.7999 57.6812 76.7281 57.3758 75.7125L54.6204 66.54C55.6827 65.8949 56.6865 65.1383 57.6082 64.2672C58.1466 63.7583 58.1744 62.9055 57.6701 62.3622C57.1658 61.8189 56.3206 61.7909 55.7821 62.2997C54.7742 63.2515 53.6542 64.0468 52.4563 64.6771C52.416 64.6968 52.3763 64.7178 52.3388 64.7417C50.2512 65.8163 47.9277 66.3862 45.5348 66.3862C38.8414 66.3862 32.9062 61.8442 31.1018 55.3411L25.552 35.3367C25.2139 33.6262 25.6452 31.8728 26.7374 30.5189C27.8392 29.1537 29.4719 28.3703 31.2165 28.3703H47.4533C48.1914 28.3703 48.7889 27.7674 48.7889 27.0227C48.7889 26.2786 48.1914 25.675 47.4533 25.675H34.4686C32.4798 23.1559 31.3898 20.024 31.3898 16.7875C31.3904 8.91771 37.736 2.51563 45.5348 2.51563C53.3342 2.51563 59.6791 8.91771 59.6791 16.7875C59.6791 20.024 58.5897 23.1566 56.6002 25.6757H52.4403C51.7029 25.6757 51.1047 26.2786 51.1047 27.0234C51.1047 27.7674 51.7029 28.371 52.4403 28.371H59.8523C61.5976 28.371 63.2296 29.1537 64.3315 30.5189C65.4243 31.8728 65.8549 33.6262 65.5175 35.3367L59.9678 55.3411C59.6332 56.5462 59.1525 57.7051 58.5389 58.786C58.1716 59.4318 58.3936 60.2551 59.0335 60.625C59.2429 60.7464 59.4711 60.804 59.6965 60.804C60.1591 60.804 60.6091 60.5604 60.8561 60.1259C61.5796 58.8527 62.1458 57.4875 62.5395 56.0675L64.3294 49.6177C65.7874 50.3603 67.3944 50.7492 69.0632 50.7492C74.5044 50.7492 78.9954 46.5686 79.5499 41.2236H85.4634C86.8359 41.2236 87.9531 40.0971 87.9531 38.7122V33.1657C87.9531 31.7802 86.8366 30.6536 85.4634 30.6536ZM11.4612 36.57V38.5283H5.78766V33.3489H11.9565C11.6358 34.3653 11.4612 35.4469 11.4612 36.57ZM48.1017 89.1252H42.9679V79.9948H48.1017V89.1252ZM45.5348 69.0823C47.8477 69.0823 50.1044 68.6267 52.1982 67.7662L54.8194 76.4937C54.898 76.7555 54.7936 76.9527 54.7241 77.0468C54.6552 77.1408 54.4987 77.2988 54.2274 77.2988H36.8414C36.5708 77.2988 36.4143 77.1408 36.3447 77.0468C36.2759 76.9527 36.1715 76.7555 36.2501 76.4937L38.8755 67.7529C40.9492 68.6106 43.2023 69.0823 45.5348 69.0823ZM26.0014 46.9554C24.7958 47.6755 23.431 48.0539 22.007 48.0539C17.6649 48.0539 14.1325 44.4896 14.1325 40.1083V36.57C14.1325 32.1887 17.6649 28.6244 22.007 28.6244C22.8599 28.6244 23.7002 28.7669 24.5002 29.0357C23.015 31.0011 22.4467 33.4949 22.9448 35.9263C22.951 35.9565 22.9587 35.9867 22.9663 36.0162L26.0014 46.9554ZM76.9371 40.1083C76.9371 44.4896 73.4046 48.0539 69.0632 48.0539C67.6385 48.0539 66.2737 47.6755 65.0682 46.9554L68.1032 36.0162C68.1109 35.9867 68.1185 35.9565 68.1248 35.9263C68.6235 33.4949 68.0552 31.0011 66.5693 29.0357C67.3693 28.7669 68.2103 28.6244 69.0632 28.6244C73.4046 28.6244 76.9371 32.1887 76.9371 36.57V40.1083ZM85.2819 38.5283H79.6083V36.57C79.6083 35.4469 79.4344 34.3653 79.1137 33.3489H85.2819V38.5283Z" fill="black" />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="91" height="92" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div style={styles.cardTitle}>{name}</div>
      <p style={styles.cardExcerpt}>{excerpt}</p>
      <button style={styles.cardAddToBin} onClick={onAddProductToCart}>
        <svg height="16pt" viewBox="0 0 448 448" width="16pt" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFF" d="m272 184c-4.417969 0-8-3.582031-8-8v-176h-80v176c0 4.417969-3.582031 8-8 8h-176v80h176c4.417969 0 8 3.582031 8 8v176h80v-176c0-4.417969 3.582031-8 8-8h176v-80zm0 0" />
        </svg>
      </button>
    </figure>
  )
}

export default ProductCard

const styles = {
  card: {
    width: 265,
    height: 273,
    backgroundColor: "#331F41",
    border: "3px solid #969393",
    borderRadius: 2,
    position: "relative",
    marginRight: 0,
    marginLeft: 0,
    cursor: "pointer",
  },
  cardImage: {
    width: 91,
    height: 92,
    marginTop: 32,
    marginLeft: "auto",
    marginRight: "auto",
  },
  cardTitle: {
    marginTop: 37,
    fontSize: 18,
    textTransform: "uppercase",
    marginLeft: 22,
    marginRight: 22,
  },
  cardExcerpt: {
    marginTop: 3,
    fontSize: 14,
    marginLeft: 22,
    marginRight: 55,
    maxWidth: 200,
    maxHeight: 50,
    overflow: "hidden",
  },
  cardAddToBin: {
    width: 44,
    height: 44,
    position: "absolute",
    bottom: 10,
    right: 10,
    borderRadius: "100%",
    border: "none",
    backgroundColor: "#AB528D",
    cursor: "pointer",
  },
}
