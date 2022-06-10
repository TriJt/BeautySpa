import React ,{useState} from 'react'

import {Link} from "react-router-dom";
import service from '../../assets/fake_data/service'

import servicecontent from '../../assets/fake_data/servicecontent'

import ContentService from './ContentService'
const Service = () => {
  const[type, setType] = useState(0)
  const Index = servicecontent.findIndex(e => e.id_service === type)
  return (
    <div className="Service__outstanding">
    <div className="Service__outstanding--title">
      dịch vụ nổi bật
    </div>
    <div className="Service__card">
      {
        service.map((item,index)=>(
          <Link 
            className={`Service__card__item  ${item.id === type ? 'active' :''}` }
            key = {index} to={`#tab${index}`}
            onClick ={()=>{setType(item.id)}}
          >
            <div className="Service__card__item--image">
              <img src={item.img} alt="Alternative text" />
            </div>
            <div className="Service__card__item--contend">
              {item.description}
            </div>
          </Link>
          
        ))
      }
    </div>
    <div className="Service__content">
      {
        <ContentService 
          description ={ service[Index].description}
          data = {servicecontent[Index]}
        />
      }
      
    </div>
  </div>
  )
}

export default Service