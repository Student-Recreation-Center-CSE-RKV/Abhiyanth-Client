import React from 'react'
import '../../styles/PerksAndBenifitsInSponsers.css'
import PerksAndBenefitsAccordion from './perksAndBenifitsAccordian'



const PerksAndBenifitsInSponsers = () => {
  return (
    <div className='perks-benifits-sponsers-container'>
        <div className='perks-benifits-sponsers-heading'>Perks & Benefits</div>
        <div className="table-container">
            <table>
              <tr>
                <th><div className='pink-background'>BENEFITS</div></th>
                <th>TITLE SPONSOR</th>
                <th>MEGA ASSOCIATE SPONSOR</th>
                <th>CO SPONSOR</th>
                <th>EVENT SPONSOR</th>
                <th>CULTURAL NIGHT SPONSOR</th>
              </tr>
              <tr>
                <th>Eligibility Amount Bracket</th>
                <td>450K+</td>
                <td>300K+</td>
                <td>150K+</td>
                <td>100k+</td>
                <td>350k+</td>
              </tr>
              <tr>
                <th>Merchandise | Event passes|Event Brochures | Invitation Letters</th>
                <td>10</td>
                <td>6</td>
                <td></td>
                <td></td>
                <td>5</td>
              </tr>
              <tr>
                <th>Event Brochures | Invitation Letters</th>
                <td className='large-tick'>&#10004;</td>
                <td className='large-tick'>&#10004;</td>
                <td className='large-tick'>&#10004;</td>
                <td>only for one event</td>
                <td></td>
              </tr>

              <tr>
                <th>Coverage in After Movie
                released on</th>
                <td className='large-tick'>&#10004;</td>
                <td className='large-tick'>&#10004;</td>
                <td className='large-tick'>&#10004;</td>
                <td className='large-tick'>&#10004;</td>
                <td className='large-tick'>&#10004;</td>
              </tr>
              <tr>
                <th>During Event 
                & On Radio</th>
                <td className='large-tick'>&#10004;</td>
                <td className='large-tick'>&#10004;</td>
                <td className='large-tick'>&#10004;</td>
                <td className='large-tick'>&#10004;</td>
                <td className='large-tick'>&#10004;</td>
              </tr>
              <tr>
                <th>Standees
                (On campus, during fest)</th>
                <td>10</td>
                <td>6</td>
                <td>3</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>Stalls at 
                Premium locations</th>
                <td>4</td>
                <td>2</td>
                <td>1</td>
                <td></td>
                <td></td>
              </tr>
            </table>
        </div>

      < PerksAndBenefitsAccordion/>
      
    </div>
  )
}

export default PerksAndBenifitsInSponsers
