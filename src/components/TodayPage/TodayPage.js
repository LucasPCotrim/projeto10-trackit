// @ts-nocheck
import {TodayPageWrapper, PageContent, HabitContainer, HabitWrapper, HabitInfo, HabitStatus} from './TodayPage.style';
import completedIcon from '../../assets/imgs/completed_icon.svg';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

export default function TodayPage() {

  const tokenObj = JSON.parse(localStorage.getItem('trackIt-token'));
  console.log(tokenObj);

  let weekday = dayjs().locale('pt-br').format('dddd').replaceAll('-feira', '');
  weekday = weekday.replace(/^./, weekday[0].toUpperCase());
  const date = dayjs().format('DD/MM')

  return (
    <TodayPageWrapper>
      <PageContent>
        <h1>{weekday}, {date}</h1>
        <h2>Nenhum hábito concluído ainda</h2>
        <HabitContainer>
          <Habit completed={false}/>
          <Habit completed={true}/>
        </HabitContainer>
      </PageContent>
    </TodayPageWrapper>
  )
}


function Habit({completed}){
  return (
    <HabitWrapper>
      <HabitInfo>
        <h3>Ler 1 capítulo de livro</h3>
        <h4>Sequência atual: 3 dias</h4>
        <h4>Seu recorde: 5 dias</h4>
      </HabitInfo>
      <HabitStatus completed={completed}>
        <img src={completedIcon} alt="Completed icon" />
      </HabitStatus>
    </HabitWrapper>
  );
}
