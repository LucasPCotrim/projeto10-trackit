// @ts-nocheck
import {TodayPageWrapper, PageContent, HabitContainer, HabitWrapper, HabitInfo, HabitStatus} from './TodayPage.style';
import {useEffect, useState} from 'react'
import completedIcon from '../../assets/imgs/completed_icon.svg';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import {getTodayHabits} from '../../trackItService';
import {useContext} from 'react';
import UserContext from "../../contexts/UserContext";

export default function TodayPage() {

  const {weekday, date} = getWeekDayAndDate();

  const {user, setUser} = useContext(UserContext);

  const [todayHabits, setTodayHabits] = useState([]);

  useEffect(() => {
    const promise = getTodayHabits();
    promise
      .then((res)=>{
        console.log('THEN');
        console.log(res);
        setTodayHabits([...res.data]);
        console.log('% habits done = ', getHabitPercentage(todayHabits))
        setUser({...user, dayProgress: getHabitPercentage(todayHabits)})
      })
      .catch((res)=>{
        console.log('CATCH');
        console.log(res);
      });
  }, []);


  const handleMarkHabit = (habitId)=>{
    const newTodayHabits = todayHabits.map((habit)=>{
      if (habit.id === habitId){
        return {...habit, done:!habit.done};
      } else{
        return {...habit};
      }
    });
    setTodayHabits(newTodayHabits);
  }

  const dayPercentage = getHabitPercentage(todayHabits);

  return (
    <TodayPageWrapper>
      <PageContent percentCompleted={dayPercentage}>
        <h1>{weekday}, {date}</h1>
        <h2>{(dayPercentage > 0) ? `${dayPercentage}% dos hábitos concluídos` : 'Nenhum hábito concluído ainda'}</h2>
        <HabitContainer>
          {todayHabits.map((habit)=>{
            return (
              <Habit
                habitName={habit.name}
                completed={habit.done}
                handleMarkHabit={()=>handleMarkHabit(habit.id)}
                key={habit.id}
              />
            );
          })}
        </HabitContainer>
      </PageContent>
    </TodayPageWrapper>
  )
}


function Habit({habitName, completed, handleMarkHabit}){
  return (
    <HabitWrapper>
      <HabitInfo>
        <h3>{habitName}</h3>
        <h4>Sequência atual: 3 dias</h4>
        <h4>Seu recorde: 5 dias</h4>
      </HabitInfo>
      <HabitStatus completed={completed} onClick={handleMarkHabit}>
        <img src={completedIcon} alt="Completed icon" />
      </HabitStatus>
    </HabitWrapper>
  );
}



function getWeekDayAndDate() {
  let weekday = dayjs().locale('pt-br').format('dddd').replaceAll('-feira', '');
  weekday = weekday.replace(/^./, weekday[0].toUpperCase());
  const date = dayjs().format('DD/MM');
  return {weekday, date};
}

function getHabitPercentage(todayHabits) {
  const numberHabits = todayHabits.length;
  const numberHabitsDone = todayHabits.filter((habit)=>habit.done).length;
  return (numberHabits) ? 100*(numberHabitsDone/numberHabits) : 0;
}
