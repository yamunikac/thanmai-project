import ImageCard from "./ImageCard";

function ImageGrid({ images }) {
  return (
    <div style={gridStyle}>
      {images.map(img => (
        <ImageCard key={img.id} src={img.src} />
      ))}
    </div>
  );
}

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
  gap: "15px",
  padding: "20px"
};

export default ImageGrid;
