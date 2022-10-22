import propTypes from 'prop-types'

export const Statistics = ({title, stats}) => {
    return <section class="statistics">
    <h2 class="title">{title}</h2>
  
    <ul class="stat-list">
        {stats.map(({id, label, percentage}) => (
            <li key={id}>
            <span class="label">{label}</span>
            <span class="percentage">{percentage}%</span>
          </li>
        ))}
    </ul>
  </section>
}

Statistics.propTypes = {
    title: propTypes.string.isRequired,
    stats: propTypes.arrayOf(
      propTypes.exact({
        id: propTypes.string.isRequired,
        label: propTypes.string.isRequired,
        percentage: propTypes.number.isRequired,
      })
    )
}