import React from  'react'
import KumoButton from '../../elements/kumoButton';
import withMedia from 'react-media-query-hoc/dist/with-media';
import {Link} from 'react-router-dom'


const DashboardCards =()=>{
return(
    <div className='col-lg-6'>
        <Link to='/Login'><KumoButton text={'Login'} style={{width:'300px'}} noMinwidth/></Link>
        <KumoButton text={'Submit'} icon={<i className="fa fa-sliders p-3 text-light"></i>} />
        <h1>Hello</h1>
    </div>
)
}
export default withMedia(DashboardCards);