import React, { useEffect,useState } from 'react'
 
import './covid.css'
 

const Covid = () => {
  const [data,setData] = useState([]);
  const getcovidData = async () => {
    try {
      const res = await fetch('https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise');
      const actualData = await res.json();
      console.log(actualData.data.statewise[0]);
      setData(actualData.data.statewise[0]);
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getcovidData();
  }, []);

  return (
    <body>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"/>
      <section>

        <h1>🔴 Live</h1>
        <h1>Covid Tracker App</h1>
      
<div className="row  ">
<div className="column ">
    <div className="card COUNTRY">
      <div className='card_inner'>
            <p className='card_name'><span>our</span> country</p>
            <p className='card_total'>india</p>
          </div>
    </div>
  </div>

  <div className="column ">
    <div className="card RECOVERED">
      <div className='card_inner'>
            <p className='card_name'><span>total</span>recovered</p>
            <p className='card_total'>{data.recovered}</p>
          </div>
    </div>
  </div>
  <div className="column ">
    <div className="card CONFIRMED">
      <div className='card_inner'>
            <p className='card_name'><span>total</span>confirmed</p>
            <p className='card_total'>{data.confirmed}</p>
          </div>
    </div>
  </div>
  <div class="column ">
    <div class="card  DETH">
      <div className='card_inner'>
            <p className='card_name'><span>total</span>death</p>
            <p className='card_total'>{data.deaths}</p>
          </div>
    </div>
  </div>
  <div className="column ">
    <div className="card ACTIVE">
      <div className='card_inner'>
            <p className='card_name'><span>total</span>active</p>
            <p className='card_total'>{data.active}</p>
          </div>
    </div>
  </div>
  <div className="column">
    <div className="card  UPDATE">
      <div className='card_inner'>
            <p className='card_name'><span>lsat</span>update</p>
            <p className='card_total'>{data.active}</p>
          </div>
    </div>
  </div>
</div>

  
      </section>

  
 </body>
  )
}
export default Covid