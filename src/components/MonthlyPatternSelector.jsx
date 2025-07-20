import { useRecurrence } from '../context/RecurrenceContext';

const MonthlyPatternSelector = () => {
  const { frequency, monthlyPattern, setMonthlyPattern } = useRecurrence();

  if (frequency !== 'monthly') return null;

  return (
    <div className="space-y-2">
      <label className="font-semibold">Monthly Pattern:</label>
      <div className="flex gap-2">
        <select
          value={monthlyPattern.week}
          onChange={(e) => setMonthlyPattern({ ...monthlyPattern, week: parseInt(e.target.value) })}
          className="border p-2 rounded"
        >
          <option value={1}>First</option>
          <option value={2}>Second</option>
          <option value={3}>Third</option>
          <option value={4}>Fourth</option>
        </select>
        <select
          value={monthlyPattern.day}
          onChange={(e) => setMonthlyPattern({ ...monthlyPattern, day: e.target.value })}
          className="border p-2 rounded"
        >
          {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((d) => (
            <option key={d}>{d}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MonthlyPatternSelector;
