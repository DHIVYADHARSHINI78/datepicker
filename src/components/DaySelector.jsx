import { useRecurrence } from '../context/RecurrenceContext';

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const DaySelector = () => {
  const { frequency, daysOfWeek, setDaysOfWeek } = useRecurrence();

  if (frequency !== 'weekly') return null;

  const toggleDay = (day) => {
    setDaysOfWeek(daysOfWeek.includes(day)
      ? daysOfWeek.filter((d) => d !== day)
      : [...daysOfWeek, day]);
  };

  return (
    <div>
      <label className="font-semibold block mb-1">Select Days:</label>
      <div className="flex flex-wrap gap-2">
        {weekdays.map((day) => (
          <button
            key={day}
            onClick={() => toggleDay(day)}
            className={`px-3 py-1 rounded border ${
              daysOfWeek.includes(day) ? 'bg-blue-500 text-white' : 'bg-white'
            }`}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DaySelector;
