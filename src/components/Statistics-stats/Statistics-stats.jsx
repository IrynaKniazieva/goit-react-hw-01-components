import propTypes from 'prop-types'

export const StatisticsStats  = ({stats }) => {
    return (<ul class="stat-list">
        {stats.map(stat => (
            <li key={stats.id}>
            <span class="label">{stat.label}</span>
            <span class="percentage">{stat.percentage}</span>
          </li>
        ))}
  </ul>
  )
           
}

StatisticsStats.propTypes = {
    stats: propTypes.string.isRequired,
}


