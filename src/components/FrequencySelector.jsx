import { useRecurrence } from '../context/RecurrenceContext';

const FrequencySelector = () => {
  const { frequency, setFrequency, interval, setInterval } = useRecurrence();

  return (
    <div>
      <label className="font-semibold block mb-1">Repeat every:</label>
      <div className="flex items-center gap-2">
        <input
          type="number"
          value={interval}
          min={1}
          onChange={(e) => setInterval(Number(e.target.value))}
          className="border p-2 rounded w-20"
        />
        <select
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="daily">Day(s)</option>
          <option value="weekly">Week(s)</option>
          <option value="monthly">Month(s)</option>
          <option value="yearly">Year(s)</option>
        </select>
      </div>
    </div>
  );
};

export default FrequencySelector;
