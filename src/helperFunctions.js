// @ts-nocheck
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';


function getWeekDayAndDate() {
    let weekday = dayjs().locale('pt-br').format('dddd').replaceAll('-feira', '');
    weekday = weekday.replace(/^./, weekday[0].toUpperCase());
    const date = dayjs().format('DD/MM');
    return {weekday, date};
}
  
function getHabitPercentage(todayHabits) {
const numberHabits = todayHabits.length;
const numberHabitsDone = todayHabits.filter((habit)=>habit.done).length;
return (numberHabits) ? 100*(numberHabitsDone/numberHabits).toFixed(2) : 0;
}

export {getWeekDayAndDate, getHabitPercentage}