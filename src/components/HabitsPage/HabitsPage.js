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

export default function HabitsPage() {
  return (
    <HabitsPageWrapper>
      <PageContent>
        <TopMenu>
          <h1>Meus Hábitos</h1>
          <button>+</button>
        </TopMenu>
        <HabitsContainer>
          <HabitCreationCard />
          <HabitCard />
          <HabitCard />
          <HabitCard />
        </HabitsContainer>
        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
      </PageContent>
    </HabitsPageWrapper>
  )
}



function HabitCreationCard() {
  return (
    <HabitCreationCardWrapper>
      <input type="text" placeholder='nome do hábito' />
      <WeekdaysCheckboxes>
        <label>
          <input type="checkbox"/>
          <span>D</span>
        </label>
        <label>
          <input type="checkbox"/>
          <span>S</span>
        </label>
        <label>
          <input type="checkbox"/>
          <span>T</span>
        </label>
        <label>
          <input type="checkbox"/>
          <span>Q</span>
        </label>
        <label>
          <input type="checkbox"/>
          <span>Q</span>
        </label>
        <label>
          <input type="checkbox"/>
          <span>S</span>
        </label>
        <label>
          <input type="checkbox"/>
          <span>S</span>
        </label>
      </WeekdaysCheckboxes>
      <ButtonsContainer>
        <button>Cancelar</button>
        <button>Salvar</button>
      </ButtonsContainer>
    </HabitCreationCardWrapper>
  );
}


function HabitCard(){
  return (
    <HabitCardWrapper>
      <h2>Ler 1 capítulo de livro</h2>
      <img src={deleteIcon} alt={"Delete icon"} />
      <WeekdaysCheckboxes>
        <label>
          <input disabled type="checkbox"/>
          <span>D</span>
        </label>
        <label>
          <input disabled type="checkbox" checked/>
          <span>S</span>
        </label>
        <label>
          <input disabled type="checkbox"/>
          <span>T</span>
        </label>
        <label>
          <input disabled type="checkbox" checked/>
          <span>Q</span>
        </label>
        <label>
          <input disabled type="checkbox"/>
          <span>Q</span>
        </label>
        <label>
          <input disabled type="checkbox" checked/>
          <span>S</span>
        </label>
        <label>
          <input disabled type="checkbox"/>
          <span>S</span>
        </label>
      </WeekdaysCheckboxes>
    </HabitCardWrapper>
  );
}