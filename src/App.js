import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [value, setValue] = useState(0)

  const url = 'https://course-api.com/react-tabs-project'

  const fetchApii = async () =>
  {
    const resp = await fetch(url)
    const data = await resp.json();
    setData(data);
    setLoading(false);
    console.log(data)
  }

  useEffect(() => {
   
    return () => {
      fetchApii();
    }
    
  }, [])
if(loading)
{
  return (
    <section className="section title">
      <h1>Loading...</h1>
    </section>
  )
}

  // const getId = (id) => {
  //   console.log(id)
  //   const newData = data.filter((e) => e.company == id)
  //   setNewData(newData);
  //   console.log(data.title)
  // }

  return (
   <>
     <section className="section">
        <div className="title">
          <h2>Experience</h2>
          <div className="underline"></div>
        </div>
      <div className="job_center">
      <div className="heading_container">
      {
        
        data.map((e, index) => {
          return(
            <>
              <button  key={e.id} 
              className="heading" onClick={() => setValue(index)}>{e.company}</button>
            </>
          )
        })
      }
      </div>
      <article>
        <h3 className="job_title">{data[value].title}</h3>
        <h4 className="company">{data[value].company}</h4>
        <p className="datess">{data[value].dates}</p>
        <div >
          {
            data[value].duties.map((e) => {
              return(
                <>
                  <p className="duties">{e}</p>
                </>
              )
            })
          }
        </div>
      </article>
      </div>
     </section>   
      
   </>
  );
}

export default App;
