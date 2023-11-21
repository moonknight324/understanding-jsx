import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  // code here
  const imgData = imageData();
return(
  <>
  <h1 className='name'>Kalvium Gallery</h1>
  <div className='photo'>
    {imgData.map((item)=> {
      return (
          <img key={item.id} src={item.img} alt="elephant" />
      )
    })}
  </div>
  </>
)
}

export default App;
