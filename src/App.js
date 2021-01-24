import {
  Conationer,
  WeatherCard,
  Location,
  Description,
  CurrentWeather,
  Temperature,
  Celsius,
  WeatherIcon,
  AirFlow,
  Rain,
  Refresh
} from './style';
import { ReactComponent as DayCloudyIcom } from './images/day-cloudy.svg';
import { ReactComponent as AirFlowIcon } from './images/airFlow.svg';
import { ReactComponent as RainIcon } from './images/rain.svg';
import { ReactComponent as RefreshIcon } from './images/refresh.svg'

function App() {
  return (
    <Conationer>
      <WeatherCard>
        <Location>台北市</Location>
        <Description>多雲時晴</Description>
        <CurrentWeather>
          <Temperature>23<Celsius>°C</Celsius></Temperature>
          <DayCloudyIcom/>
        </CurrentWeather>
        <AirFlow>
          <AirFlowIcon/>23 m/h
        </AirFlow>
        <Rain>
          <RainIcon/>48%
        </Rain>
        <Refresh>
          最後觀測時間:上午 12:03<RefreshIcon/>
        </Refresh>
      </WeatherCard>
    </Conationer>
  );
}

export default App;
