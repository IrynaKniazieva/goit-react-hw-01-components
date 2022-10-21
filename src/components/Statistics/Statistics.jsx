import propTypes from 'prop-types'

export const Statistics = ({title, stats}) => {
    return <section class="statistics">
    <h2 class="title">{title}</h2>
  
    (<ul class="stat-list">
        {stats.map(stat => (
            <li key={stats.id}>
            <span class="label">{stat.label}</span>
            <span class="percentage">{stat.percentage}</span>
          </li>
        ))}
    </ul>
  </section>
}

// StatisticsStats.propTypes = {
//     stats: propTypes.string.isRequired,
// }