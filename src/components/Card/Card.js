import React from 'react'
import '../../App.css'
import './Card.css'

const Card = ({object}) => {
    
    return (
        <div className='card'>
            <div className='header'>
                <h3>{object.model_year} {object.make_display} {object.model_name} - {parseFloat(object.model_engine_cc / 1000).toFixed(1)} L</h3>
                
            </div>
            <div className='main-content'>
                <div>
                    <h3 data-label='label'>Make Country</h3>    
                    <h3>{object.make_country ? object.make_country : "-"}</h3>
                </div>
                <div>
                    <h3 data-label='label'>Doors</h3>    
                    <h3>{object.model_doors ? object.model_doors : "-"}</h3>
                </div>
                <div>
                    <h3 data-label='label'>Body</h3>    
                    <h3>{object.model_body ? object.model_body : "-"}</h3> 
                </div>
                <div>
                    <h3 data-label='label'>Cylinders</h3>    
                    <h3>{object.model_engine_cyl ? object.model_engine_cyl : "-"}</h3>   
                </div>
                <div>
                    <h3 data-label='label'>Engine Type</h3>    
                    <h3>{object.model_engine_type ? object.model_engine_type : "-"}</h3> 
                </div>

                <div>
                    <h3 data-label='label'>Horsepower</h3>    
                    <h3>{parseInt(object.model_engine_power_ps * 0.98632) ? parseInt(object.model_engine_power_ps * 0.98632) : "-"}</h3>
                </div>
                <div>
                    <h3 data-label='label'>RPM</h3>    
                    <h3>{object.model_engine_power_rpm ? object.model_engine_power_rpm : "-"}</h3>
                </div>
                <div>
                    <h3 data-label='label'>Torque</h3>    
                    <h3>{object.model_engine_torque_rpm ? object.model_engine_torque_rpm : "-"}</h3>   
                </div>
                
            </div>
            
        </div>
    )
}

export default Card