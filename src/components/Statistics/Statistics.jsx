import propTypes from 'prop-types'
import styles from './Statistics.module.css'


export const Statistics = ({title, stats}) => {
    return <section className={styles.statistics}>
{/*  если title не передан, не должна рендериться разметка заголовка <h2>. */}
    {title && <h2 className={styles.title}>{title}</h2>}
  
    <ul className={styles.statList}>
        {stats.map(({id, label, percentage}) => (
              <li key={id} className={styles.statItem} style={{ backgroundColor: `${getRandomHexColor()}` }}>
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
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

// функция для генерации случайного цвета из 6 ДЗ JS
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

