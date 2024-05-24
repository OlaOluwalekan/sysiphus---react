import './column.css'

const Column = ({ styleClass, children }) => {
  return <div className={styleClass}>{children}</div>
}

export default Column
