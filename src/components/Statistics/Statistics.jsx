import React from 'react';
import PropTypes from 'prop-types'
import { getRandomHexColor } from "../../utils/randomColor"
import css from "./Statistics.module.css";


const Statistics = ({ title, stats }) => { 
   
return(    <section className={css.statistics}>
           {title.length > 0 && (
            <h2 className={css.title}>{title}</h2>
    )}
    <ul className={css.statList}>
      {stats.map(stat => (
         <li className={css.item} key={stat.id} style={{
            backgroundColor: `${getRandomHexColor()}`,
      }}>
      <span className={css.label}>{stat.label}</span>
                <span className={css.percentage}>{stat.percentage}%</span>
    </li>
          
        ))}
  </ul>
</section>
   )

}



export default Statistics;

Statistics.propTypes = {
   title: PropTypes.string,
   stats: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
   })).isRequired
}