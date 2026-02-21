const features = [
  {
    id: 'farming',
    icon: '🌾',
    title: 'Кибер-фермерство',
    description: 'Выращивай уникальные культуры с помощью нанотехнологий и генной инженерии.',
  },
  {
    id: 'drones',
    icon: '🤖',
    title: 'Управление дронами',
    description: 'Автоматизируй сбор урожая и защиту полей с помощью умных дронов.',
  },
  {
    id: 'village',
    icon: '🏘️',
    title: 'Развитие деревни',
    description: 'Стройте здания, привлекайте жителей и превратите деревню в кибер-город.',
  },
  {
    id: 'defense',
    icon: '⚔️',
    title: 'Защита от угроз',
    description: 'Отбивай атаки мутантов и хакеров, защищай свои ресурсы.',
  },
]

function Features() {
  return (
    <section className="features" id="features">
      <h2 className="features__title">Особенности игры</h2>
      <div className="features__grid">
        {features.map((feature) => (
          <div className="features__card" key={feature.id}>
            <span className="features__icon">{feature.icon}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
