
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RecurrenceOptions from '../components/RecurrenceOptions';
import { RecurrenceProvider } from '../context/RecurrenceContext';

test('changes frequency when user selects Monthly', () => {
  const { getByLabelText } = render(
    <RecurrenceProvider>
      <RecurrenceOptions />
    </RecurrenceProvider>
  );

  const monthlyRadio = getByLabelText(/Monthly/i);
  fireEvent.click(monthlyRadio);

  expect(monthlyRadio.checked).toBe(true);
});
