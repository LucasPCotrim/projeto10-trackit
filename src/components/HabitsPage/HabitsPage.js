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
import {loadHabits, createHabit} from '../../trackItService';

const WEEKDAYS = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

export default function HabitsPage() {

  const [habits, setHabits] = useState([]);
  const [showHabitCreation, setShowHabitCreation] = useState(false);
  const [newHabitInfo, setNewHabitInfo] = useState({name: '', days: []});

  useEffect(() => {
    const promise = loadHabits();
    promise.then((res)=>{
      console.log('THEN');
      console.log(res);
      setHabits([...res.data]);
    })
    .catch((res)=>{
      console.log('CATCH');
      console.log(res);
      alert(res.response.data.message);
    });
  }, []);

  const handleCreateHabit = ()=>{
    if (newHabitInfo.name.length === 0){
      alert('Insira o nome do hábito!');
      return;
    } else if (newHabitInfo.days.length === 0){
      alert('Favor selecionar pelo menos um dia!');
      return;
    }
    const promise = createHabit(newHabitInfo);
    promise.then((res)=>{
      console.log('THEN');
      console.log(res);
      setHabits([...habits, res.data]);
      setNewHabitInfo({name: '', days: []});
    })
    .catch((res)=>{
      console.log('CATCH');
      console.log(res);
      alert(res.response.data.message);
      setNewHabitInfo({name: '', days: []});
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
              />
            : <></>
          }
          {habits.map((habit)=>{
            return (
              <HabitCard name={habit.name} days={habit.days} key={habit.id}/>
            );
          })}
          {/* <HabitCard name={'Ler 1 capítulo do livro'} days={[1,3,5]}/>
          <HabitCard name={'Ler 2 capítulos do livro'} days={[0,1]}/>
          <HabitCard name={'Ler 3 capítulos do livro'} days={[3,4,5,6]}/> */}
        </HabitsContainer>
        {(habits.length===0)
          ? <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
          : <></>
        }
      </PageContent>
    </HabitsPageWrapper>
  )
}



function HabitCreationCard({newHabitInfo, setNewHabitInfo, handleCreateHabit}) {

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
      />
      <WeekdaysCheckboxes>
        {[0,1,2,3,4,5,6].map((dayIndex)=>{
          return (
            <label key={dayIndex}>
              <input
                type="checkbox"
                onChange={(event) => handleCheckboxChange(event, dayIndex)}/>
              <span>{WEEKDAYS[dayIndex]}</span>
            </label>
          );
        })}
      </WeekdaysCheckboxes>
      <ButtonsContainer>
        <button>Cancelar</button>
        <button onClick={handleCreateHabit}>Salvar</button>
      </ButtonsContainer>
    </HabitCreationCardWrapper>
  );
}


function HabitCard({name, days}){
  return (
    <HabitCardWrapper>
      <h2>{name}</h2>
      <img src={deleteIcon} alt={"Delete icon"} />
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