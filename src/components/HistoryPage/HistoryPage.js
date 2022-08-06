/* eslint-disable react-hooks/exhaustive-deps */
import {HistoryPageWrapper, PageContent, CalendarWrapper} from './HistoryPage.style'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import {useState, useEffect} from 'react';
import {getHabitHistory} from '../../trackItService';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

export default function HistoryPage() {
  const [value, ] = useState(new Date());
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const promise = getHabitHistory();
    promise
      .then((res)=>{
        console.log('THEN');
        console.log(res);
        setHistory(res.data);
        console.log(history);
      })
      .catch((res)=>{
        console.log('CATCH');
        console.log(res);
      });

  }, []);

  const getClassName = (history, date)=>{
    const matchingDates = history.filter((obj)=>obj.day===date);
    if (matchingDates.length === 1){
      const habits = matchingDates[0].habits;
      const historyStatus = habits.map((habit)=>{return (habit.done) ? 1 : 0});
      if(historyStatus.includes(0)){
        return 'failed-habits'
      } else{
        return 'success-habits';
      }
    }
    return '';
  }
  

  return (
    <HistoryPageWrapper>
      <PageContent>
        <h1>Histórico</h1>
        <CalendarWrapper>
          <Calendar
            className='react-calendar'
            showWeekNumbers={false}
            value={value}
            locale='pt'
            calendarType='US'
            tileClassName={({date}) => getClassName(history, dayjs(new Date(date)).format('DD/MM/YYYY'))}
          />
        </CalendarWrapper>
      </PageContent>
    </HistoryPageWrapper>
  )
}
