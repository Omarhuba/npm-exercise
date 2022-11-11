import {useState} from 'react'
import './App.css'

function App() {
	const [startDate, setStartDate] = useState('2021-08-01');
	const [endDate, setEndDate] = useState('2021-08-31');

	const handleTest = ({startDate, endDate}) => {
		setStartDate(startDate)
		setEndDate(endDate)
	}

	return (
		<div className="App">
			<div className="picker">
				<div className="date-picker">
					Start date:
					<input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
				</div>
				<div className="date-picker">
					End date:
					<input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
				</div>
			</div>
			{/*	Component goes here */}
			<div className="tests">
				<TestLink startDate="2021-08-01" endDate="2021-08-31" expected="August" onClick={handleTest} />
				<TestLink startDate="2021-05-01" endDate="2021-05-31" expected="May" onClick={handleTest} />
				<TestLink startDate="2021-01-01" endDate="2021-12-31" expected="2021"  onClick={handleTest} />
				<TestLink startDate="2018-01-01" endDate="2018-12-31" expected="2018"  onClick={handleTest} />

				<TestLink startDate="2019-11-01" endDate="2019-11-30" expected="November 2019" onClick={handleTest} color="red" />
				<TestLink startDate="2018-08-01" endDate="2018-08-31" expected="August 2018"  onClick={handleTest} color="red" />
				<TestLink startDate="2021-07-05" endDate="2021-08-20" expected="5 Jul - 20 Aug" onClick={handleTest} color="red" />
				<TestLink startDate="2021-01-01" endDate="2021-05-30" expected="1 Jan - 30 May" onClick={handleTest} color="red" />
				<TestLink startDate="2019-11-10" endDate="2019-11-29" expected="10 Nov 2019 - 29 Nov 2019" onClick={handleTest} color="red" />
				<TestLink startDate="2021-10-18" endDate="2021-10-24" expected="W42"  onClick={handleTest} color="red" />
			</div>
			<div className="day-list"></div>
		</div>
	);
}

const TestLink = ({startDate, endDate, expected, onClick, color}) => {
	return (
		<div className="test-link" tabIndex="-1" style={{color: color ? color : ''}}
			onClick={() => onClick({startDate, endDate})}>
		{startDate} - {endDate} -> {expected}
		</div>
	)
}

const RedDay = ({date, hours, name}) => {
	return (
		<div className="red-day">
			<div className="red-day-date p2">{date}</div>
			<div className="red-day-name b p2">{name}</div>
			<div className="red-day-hours p2">{hours === 0 ? 'Ledigt' : 'Halvdag'}</div>
		</div>
	)
}

export default App;
