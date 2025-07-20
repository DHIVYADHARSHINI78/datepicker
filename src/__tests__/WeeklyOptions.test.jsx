// src/__tests__/WeeklyOptions.test.jsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import WeeklyOptions from '../components/WeeklyOptions';
import { RecurrenceProvider } from '../context/RecurrenceContext';

test('toggles Tuesday as selected day', () => {
  const { getByText } = render(
    <RecurrenceProvider>
      <WeeklyOptions />
    </RecurrenceProvider>
  );

  const tuesdayButton = getByText(/Tue/i);
  fireEvent.click(tuesdayButton);
  expect(tuesdayButton).toHaveClass('bg-blue-500');

  fireEvent.click(tuesdayButton);
  expect(tuesdayButton).not.toHaveClass('bg-blue-500');
});
