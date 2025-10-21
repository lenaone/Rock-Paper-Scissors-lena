import '../App.css'

const Box = (props) => {
  return (
     <div className={`box ${props.result}`}>
      <h3>{props.title}</h3>
      <img className='image' src={props.image} alt={props.title} />
      <p>{props.result}</p>
    </div>
  )
}

export default Box


