import axios from "axios";

const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/';


function signUp(body) {
  const signUpAPI = `${BASE_URL}/auth/sign-up`;
  return axios.post(signUpAPI, body);
}

function logIn(body) {
  const loginAPI = `${BASE_URL}/auth/login`;
  return axios.post(loginAPI, body);
}

function loadHabits() {
  const habitAPI = `${BASE_URL}/habits`;
  const token = JSON.parse(localStorage.getItem('trackIt-token')).token;
  return axios.get(habitAPI, {headers: {Authorization: `Bearer ${token}`}});
}

function createHabit(body) {
  const habitAPI = `${BASE_URL}/habits`;
  const token = JSON.parse(localStorage.getItem('trackIt-token')).token;
  return axios.post(habitAPI, body, {headers: {Authorization: `Bearer ${token}`}});
}

function deleteHabit(habitId) {
  const deleteHabitAPI = `${BASE_URL}/habits/${habitId}`;
  const token = JSON.parse(localStorage.getItem('trackIt-token')).token;
  return axios.delete(deleteHabitAPI, {headers: {Authorization: `Bearer ${token}`}});
}

function getTodayHabits() {
  const todayHabitsAPI = `${BASE_URL}/habits/today`;
  const token = JSON.parse(localStorage.getItem('trackIt-token')).token;
  return axios.get(todayHabitsAPI, {headers: {Authorization: `Bearer ${token}`}});
}

function markTodayHabit(habitID) {
  const markHabitAPI = `${BASE_URL}/habits/${habitID}/check`;
  const token = JSON.parse(localStorage.getItem('trackIt-token')).token;
  return axios.post(markHabitAPI, {}, {headers: {Authorization: `Bearer ${token}`}});
}

function unMarkTodayHabit(habitId) {
  const UnMarkHabitAPI = `${BASE_URL}/habits/${habitId}/uncheck`;
  const token = JSON.parse(localStorage.getItem('trackIt-token')).token;
  return axios.post(UnMarkHabitAPI, {}, {headers: {Authorization: `Bearer ${token}`}});
}

function getHabitHistory() {
  const HabitHistoryAPI = `${BASE_URL}/habits/history/daily`;
  const token = JSON.parse(localStorage.getItem('trackIt-token')).token;
  return axios.get(HabitHistoryAPI, {headers: {Authorization: `Bearer ${token}`}});
}


export {
  signUp,
  logIn,
  loadHabits,
  createHabit,
  deleteHabit,
  getTodayHabits,
  markTodayHabit,
  unMarkTodayHabit,
  getHabitHistory};