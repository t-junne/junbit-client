import { createGlobalStyle } from 'styled-components'
import 'react-calendar/dist/Calendar.css'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
${reset}

* {
  box-sizing: border-box;
}

html {
  margin:0;
  padding:0;
}

body {
  font-family: 'Noto Sans KR', sans-serif;
  margin: 0;
  padding: 0;

  #root {
    width: 100vw;
    height: 100vh;
  }
}

button {
  cursor: pointer;
  background: none;
  border: none;
}

.react-calendar {
  width: 350px;
  border: none;
  cursor: default;
}
.react-calendar--doubleView {
  width: 768px;
}
.react-calendar--doubleView .react-calendar__viewContainer {
  display: flex;
  justify-content: space-between;
}
.react-calendar--doubleView .react-calendar__viewContainer > * {
  width: 45%;
}
.react-calendar__navigation {
  display: flex;
  height: 44px;
  margin-bottom: 1em;
}
.react-calendar__navigation__arrow {
  border-radius: 50%;
}
.react-calendar__navigation__arrow img {
  width: 16px;
  height: 16px;
}
.react-calendar__navigation__prev2-button,
.react-calendar__navigation__next2-button {
  display: none;
}
.react-calendar__navigation__label {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 168px;
  font-weight: bold;
}
.react-calendar__navigation__label:hover {
  background: white;
}
.react-calendar__navigation__label__divider {
  display: none;
}
.react-calendar__navigation button:disabled {
  background-color: white;
  color: #323232;
  cursor: default;
}
.react-calendar__navigation button:enabled:hover,
.react-calendar__navigation button:enabled:focus {
  background-color: #EEEEEE;
}
.react-calendar__month-view__weekdays {
  text-align: center;
  cursor: default;
  
  font-size: 12px;
  color: #909090;
}
.react-calendar__month-view__weekdays__weekday {
  padding: 0.5em;
}
.react-calendar__month-view__weekdays__weekday abbr {
  text-decoration: none;
}
.react-calendar__month-view__weekNumbers .react-calendar__tile {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1em;
  font-weight: bold;
}
.react-calendar__month-view__days__day--weekend {
  color: #323232;
}
.react-calendar__tile {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: none;
}
.react-calendar__tile:enabled:hover,
.react-calendar__tile:enabled:focus {
  background-color: #EEEEEE;
}
.react-calendar__tile--now {
  background: #F22D50;
  color: white;
}
.react-calendar__tile--now:enabled:hover,
.react-calendar__tile--now:enabled:focus {
  background: #F22D50;
}
.react-calendar__tile--active {
  background: #323232;
  color: white;
}
`

export default GlobalStyle
