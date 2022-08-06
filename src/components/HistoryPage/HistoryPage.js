import {HistoryPageWrapper, PageContent, CalendarWrapper} from './HistoryPage.style'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import {useState} from 'react';

export default function HistoryPage() {
  const [value, setValue] = useState(new Date());

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
          />
        </CalendarWrapper>
      </PageContent>
    </HistoryPageWrapper>
  )
}
