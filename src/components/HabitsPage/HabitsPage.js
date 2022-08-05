import
  {HabitsPageWrapper,
  PageContent,
  TopMenu,
  HabitsContainer,
  HabitCreationCardWrapper,
  WeekdaysCheckboxes,
  ButtonsContainer,
  HabitCardWrapper} from './HabitsPage.style';
import deleteIcon from '../../assets/imgs/delete_icon.svg';
import {useEffect, useState} from 'react';
import {loadHabits, createHabit, deleteHabit, getTodayHabits} from '../../trackItService';
import {ThreeDots} from "react-loader-spinner";
import {useContext} from 'react';
import UserContext from "../../contexts/UserContext";
import {getHabitPercentage} from '../../helperFunctions'


const WEEKDAYS = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

export default function HabitsPage() {

  const {user, setUser} = useContext(UserContext);
  
  const [habits, setHabits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showHabitCreation, setShowHabitCreation] = useState(false);
  const [newHabitInfo, setNewHabitInfo] = useState({name: '', days: []});
  const [reloadHabits, setReloadHabits] = useState(false);

  useEffect(() => {
    const promise = loadHabits();
    promise.then((res)=>{
      setHabits([...res.data]);
    })
    .catch((res)=>{
      alert(res.response.data.message);
    });
  }, [reloadHabits]);

  const handleCreateHabit = ()=>{
    if (newHabitInfo.name.length === 0){
      alert('Insira o nome do hábito!');
      return;
    } else if(newHabitInfo.name.length > 30){
      alert('Nome de hábito inválido!');
      return;
    } else if (newHabitInfo.days.length === 0){
      alert('Favor selecionar pelo menos um dia!');
      return;
    }
    setIsLoading(true);
    const promise = createHabit(newHabitInfo);
    promise.then((res)=>{
      setIsLoading(false);
      setHabits([...habits, res.data]);
      setNewHabitInfo({name: '', days: []});
      setShowHabitCreation(false);
      updateProgressBar();
    })
    .catch((res)=>{
      setIsLoading(false);
      alert(res.response.data.message);
    });
  }

  const handleDeleteHabit = (habitId)=>{
    let userConfirmation = window.confirm('Deletar este hábito?');
    if (!userConfirmation){
      return;
    }
    const promise = deleteHabit(habitId);
    promise.then((res)=>{
      updateProgressBar();
      setReloadHabits(!reloadHabits);
    })
    .catch((res)=>{
      alert(res.response.data.message);
    });
  }

  const updateProgressBar = ()=>{
    const promise = getTodayHabits();
    promise
      .then((res)=>{
        setUser({...user, dayProgress: getHabitPercentage([...res.data])});
      })
      .catch((res)=>{
        alert(res.response.data.message);
      });
  }
  

  return (
    <HabitsPageWrapper>
      <PageContent>
        <TopMenu>
          <h1>Meus Hábitos</h1>
          <button onClick={()=>{setShowHabitCreation(!showHabitCreation)}}>+</button>
        </TopMenu>
        <HabitsContainer>
          {showHabitCreation
            ? <HabitCreationCard
                newHabitInfo={newHabitInfo}
                setNewHabitInfo={setNewHabitInfo}
                handleCreateHabit={handleCreateHabit}
                handleCancelHabit={()=>setShowHabitCreation(false)}
                isLoading={isLoading}
              />
            : <></>
          }
          {habits.map((habit)=>{
            return (
              <HabitCard
                name={habit.name}
                days={habit.days}
                handleDeleteHabit={()=>handleDeleteHabit(habit.id)}
                key={habit.id}
                />
            );
          })}
        </HabitsContainer>
        {(habits.length===0)
          ? <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
          : <></>
        }
      </PageContent>
    </HabitsPageWrapper>
  )
}



function HabitCreationCard({newHabitInfo, setNewHabitInfo, handleCreateHabit, handleCancelHabit, isLoading}) {

  const handleCheckboxChange = (event, dayIndex)=>{
    let checked = event.target.checked;
    const days = [...newHabitInfo.days];
    let daysNew;
    if (checked) {
      daysNew = (days.includes(dayIndex)) ? [...days] : [...days, dayIndex];
    } else{
      daysNew = days.filter(e => e !== dayIndex);
    }
    setNewHabitInfo({...newHabitInfo, days: daysNew.sort()})
  }

  return (
    <HabitCreationCardWrapper>
      <input
        type="text"
        placeholder='nome do hábito'
        value={newHabitInfo.name}
        onChange={(event) => setNewHabitInfo({...newHabitInfo, name: event.target.value})}
        disabled={isLoading}
      />
      
      <WeekdaysCheckboxes>
        {[0,1,2,3,4,5,6].map((dayIndex)=>{
          return (
            <label key={dayIndex}>
              <input
                type="checkbox"
                onChange={(event) => handleCheckboxChange(event, dayIndex)}
                disabled={isLoading}
                checked={newHabitInfo.days.includes(dayIndex)}
              />
              <span>{WEEKDAYS[dayIndex]}</span>
            </label>
          );
        })}
      </WeekdaysCheckboxes>
      <ButtonsContainer>
        <button onClick={handleCancelHabit}>Cancelar</button>
        <button
          disabled={isLoading}
          onClick={handleCreateHabit}
        >
          {isLoading ? <ThreeDots color={'#fafafa'} height={13} width={51}/> : 'Salvar'}
        </button>
      </ButtonsContainer>
    </HabitCreationCardWrapper>
  );
}


function HabitCard({name, days, handleDeleteHabit}){
  return (
    <HabitCardWrapper>
      <h2>{name}</h2>
      <img src={deleteIcon} alt={"Delete icon"} onClick={handleDeleteHabit}/>
      <WeekdaysCheckboxes>
        {[0,1,2,3,4,5,6].map((dayIndex)=>{
          return (
            <label key={dayIndex}>
              {days.includes(dayIndex) ? <input disabled type="checkbox" checked/> : <input disabled type="checkbox"/>}
              <span>{WEEKDAYS[dayIndex]}</span>
            </label>
          );
        })}
      </WeekdaysCheckboxes>
    </HabitCardWrapper>
  );
}

