import { useState, useEffect } from 'react';
import * as activityService from '../../services/activityService';

const initialState = {
    activityType: '',
    note: '',
};

const ActivityForm = ({ childId, onAdd, selectedActivity, handleUpdate }) => {
     const [formData, setFormData] = useState(
    selectedActivity || {
      activityType: "",
      note: "",
      date: new Date().toISOString().split("T")[0],
    }
  );

    useEffect(() => {
    if (selectedActivity) setFormData(selectedActivity);
  }, [selectedActivity]);
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
    if (selectedActivity && handleUpdate) {
      const result = await handleUpdate(payload, selectedActivity._id);
      if (result?.err) throw new Error(result.err);
    } else {
      const result = await activityService.create(payload);
      if (result.err) throw new Error(result.err);
      if (onAdd) onAdd();
    }

    setFormData(initialState);
  } catch (err) {
    console.error('Failed to submit activity:', err);
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
