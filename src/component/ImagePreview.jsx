function ImagePreview({ selectedImage, setSelectedImage }) {
  if (!selectedImage) return null;

  return (
    <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={selectedImage.src} alt={selectedImage.title} />
        <h2>{selectedImage.title}</h2>
        <p>{selectedImage.description}</p>

        <a href={selectedImage.src} download className="download-btn">
          Download
        </a>

        <button onClick={() => setSelectedImage(null)}>Close</button>
      </div>
    </div>
  );
}

export default ImagePreview;