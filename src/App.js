import { useState } from 'react';
import './App.css';

function App() {
  const [fullSetOfData, SetFullSetOfData] = useState({});
  const [timeSeries, SetTimeSeries] = useState([]);

  const getData = async () => {
    const request = await fetch(
      "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo"
    );
    const data = await request.json();
    return data;
  };

  getData().then((data) => {
    SetFullSetOfData(data["Time Series (5min)"]);
    let valuesToSet = Object.keys(data["Time Series (5min)"]);
    SetTimeSeries(valuesToSet);
  });

  return (
    <div className="App">
      <div>
        <h1>Name:</h1>
        <h1 className="value">Anish Pathak</h1>
      </div>
      <div>
        <h1>Email:</h1>
        <h1 className="value">anishpathak767@gmail.com</h1>
      </div>
      <div className="tabular-data">
        <table>
          <thead>
            <th>DateTime</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Close</th>
            <th>Volume</th>
          </thead>
          <tbody>
            <td>
              {timeSeries.map((series) => (
                <div key={series}>
                  {series}
                </div>
              ))}
            </td>
            <td>
              {timeSeries.map((series) => (
                <div key={series}>{fullSetOfData[series]["1. open"]}</div>
              ))}
            </td>
            <td>
              {timeSeries.map((series) => (
                <div key={series}>{fullSetOfData[series]["2. high"]}</div>
              ))}
            </td>
            <td>
              {timeSeries.map((series) => (
                <div key={series}>{fullSetOfData[series]["3. low"]}</div>
              ))}
            </td>
            <td>
              {timeSeries.map((series) => (
                <div key={series}>{fullSetOfData[series]["4. close"]}</div>
              ))}
            </td>
            <td>
              {timeSeries.map((series) => (
                <div key={series}>{fullSetOfData[series]["5. volume"]}</div>
              ))}
            </td>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
