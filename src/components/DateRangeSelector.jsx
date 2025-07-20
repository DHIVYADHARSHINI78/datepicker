import { useRecurrence } from '../context/RecurrenceContext';

const DateRangeSelector = () => {
  const { startDate, setStartDate, endDate, setEndDate } = useRecurrence();

  return (
    <div className="space-y-2">
      <label className="font-semibold block">Start Date:</label>
      <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="border p-2 rounded" />

      <label className="font-semibold block mt-3">End Date (Optional):</label>
      <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="border p-2 rounded" />
    </div>
  );
};

export default DateRangeSelector;
