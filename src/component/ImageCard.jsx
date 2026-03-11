function ImageCard({ src }) {
  return (
    <div>
      <img src={src} alt="gallery" style={imgStyle} />
    </div>
  );
}

const imgStyle = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
  borderRadius: "10px"
};

export default ImageCard;
