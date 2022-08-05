/* eslint-disable react-hooks/exhaustive-deps */
// @ts-nocheck
import {TodayPageWrapper, PageContent, HabitContainer, HabitWrapper, HabitInfo, HabitStatus} from './TodayPage.style';
import {useEffect, useState} from 'react';
import completedIcon from '../../assets/imgs/completed_icon.svg';
import {getWeekDayAndDate, getHabitPercentage} from '../../helperFunctions'
import {getTodayHabits, markTodayHabit, unMarkTodayHabit} from '../../trackItService';
import {useContext} from 'react';
import UserContext from "../../contexts/UserContext";

export default function TodayPage() {

  const {weekday, date} = getWeekDayAndDate();

  const {user, setUser} = useContext(UserContext);

  const [todayHabits, setTodayHabits] = useState([]);
  const [reloadHabits, setReloadHabits] = useState(false);

  useEffect(() => {
    const promise = getTodayHabits();
    promise
      .then((res)=>{
        setTodayHabits([...res.data]);
        setUser({...user, dayProgress: getHabitPercentage([...res.data])});
      })
      .catch((res)=>{
        alert(res.response.data.message);
      });
  }, [reloadHabits]);


  const handleMarkHabit = (habitId, isDone)=>{

    // Mark Habit
    if (!isDone) {
      const promise = markTodayHabit(habitId);
      promise
        .then((res)=>{
          setReloadHabits(!reloadHabits);
        })
        .catch((res)=>{
          alert(res.response.data.message);
        });
    }
    // Unmark Habit
    else{
      const promise = unMarkTodayHabit(habitId);
      promise
        .then((res)=>{
          setReloadHabits(!reloadHabits);
        })
        .catch((res)=>{
          alert(res.response.data.message);
        });
    }
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
                currentSequence={habit.currentSequence}
                highestSequence={habit.highestSequence}
                completed={habit.done}
                handleMarkHabit={()=>handleMarkHabit(habit.id, habit.done)}
                key={habit.id}
              />
            );
          })}
        </HabitContainer>
      </PageContent>
    </TodayPageWrapper>
  )
}


function Habit({habitName, currentSequence, highestSequence, completed, handleMarkHabit}){

  return (
    <HabitWrapper>
      <HabitInfo greenCurrent={completed} greenHighest={(currentSequence >= highestSequence)}>
        <h3>{habitName}</h3>
        <h4>{`Sequência atual: ${currentSequence} dias`}</h4>
        <h5>{`Seu recorde: ${highestSequence} dias`}</h5>
      </HabitInfo>
      <HabitStatus completed={completed} onClick={handleMarkHabit}>
        <img src={completedIcon} alt="Completed icon" />
      </HabitStatus>
    </HabitWrapper>
  );
}



