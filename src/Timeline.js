import { differenceInCalendarDays } from 'date-fns';
import React from 'react'
import { useStateValue } from './StateProvider';
import Tile from './Tile';
import './Timeline.css';

function Timeline() {
  
  const [{data}] = useStateValue();
  console.log(data)
    return (
        <div className='lines'>
        <div class="chart-wrapper">
          <ul class="chart-values">
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
            <li>16</li>
            <li>17</li>
            <li>18</li>
          </ul>
        </div>
        {data.map((item,idx)=>( 
          <Tile
            key={idx}
            left={differenceInCalendarDays(item.startDate,new Date())}
            width={differenceInCalendarDays(item.endDate,item.startDate)}
            start={idx}
            message={item.text}
            startDate={item.startDate}
            endDate={item.endDate}
            person={item.person}
            color={item.event}
          />
        ))}
        </div>
    )
}

export default Timeline
