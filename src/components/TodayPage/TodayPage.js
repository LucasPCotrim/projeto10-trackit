// @ts-nocheck
import {TodayPageWrapper, PageContent, HabitContainer, HabitWrapper, HabitInfo, HabitStatus} from './TodayPage.style'
import completedIcon from '../../assets/imgs/completed_icon.svg';

export default function TodayPage() {
  return (
    <TodayPageWrapper>
      <PageContent>
        <h1>Segunda, 17/05</h1>
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
