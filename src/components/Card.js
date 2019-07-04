import styles from './card.module.scss'


const Card = ({ children, className }) => {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className={`${styles.card} ${className}`}>
      {children}
    </div>
  )
}

export default Card