import { useState } from 'react';
import * as activityService from '../../services/activityService';

const initialState = {
  activityType: '',
  note: '',
};

const ActivityForm = ({ childId, onAdd }) => {
  const [formData, setFormData] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);

  const activityOptions = [
    'Nap',
    'Meal',
    'Snack',
    'Potty',
    'Play',
    'Activity',
    'Education',
    'Other',
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const payload = {
      ...formData,
      childId,
    };

    try {
      const result = await activityService.create(payload);
      if (result.err) throw new Error(result.err);
      setFormData(initialState); 
      if (onAdd) onAdd();
    } catch (err) {
      console.error('Failed to create activity:', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="activityType">Activity Type</label>
      <select
        id="activityType"
        name="activityType"
        value={formData.activityType}
        onChange={handleChange}
        required
      >
        <option value="">Select an activity</option>
        {activityOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <label htmlFor="note">Note (optional)</label>
      <textarea
        id="note"
        name="note"
        value={formData.note}
        onChange={handleChange}
        placeholder="Add any extra details..."
      />

      <button type="submit" disabled={submitting}>
        {submitting ? 'Logging...' : 'Log Activity'}
      </button>
    </form>
  );
};

export default ActivityForm;
