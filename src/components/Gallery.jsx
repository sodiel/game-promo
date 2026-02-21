const screenshots = [
  { id: 'farm', alt: 'Кибер-ферма на закате', color: '#1a3a2a' },
  { id: 'drone', alt: 'Дрон над полем', color: '#2a1a3a' },
  { id: 'night', alt: 'Деревня ночью', color: '#0a2a3a' },
]

function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <h2 className="gallery__title">Скриншоты</h2>
      <div className="gallery__grid">
        {screenshots.map((shot) => (
          <div
            className="gallery__item"
            key={shot.id}
            style={{ backgroundColor: shot.color }}
          >
            <span className="gallery__placeholder">{shot.alt}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery
