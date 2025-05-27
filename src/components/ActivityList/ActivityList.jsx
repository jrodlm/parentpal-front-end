import { useEffect, useState } from 'react';
import * as activityService from '../../services/activityService';
import ActivityForm from '../ActivityForm/ActivityForm';

const ActivityList = ({ childId, initiateUpdate }) => {
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editing, setEditing] = useState(null);


    useEffect(() => {
        const fetchActivities = async () => {
            try {
                const data = await activityService.getAllForChild(childId);
                if (data.err) throw new Error(data.err);

                const sorted = data.sort((a, b) => new Date(b.date) - new Date(a.date));
                setActivities(sorted);
            } catch (err) {
                console.error('Error fetching activities:', err);
            } finally {
                setLoading(false);
            }
        };

        if (childId) {
            fetchActivities();
        }
    }, [childId, initiateUpdate]);

    if (loading) return <p>Loading activities...</p>;

    if (!activities.length) return <p>No activities logged yet.</p>;


    const handleDelete = async (activityId) => {
        try {
            const deleted = await activityService.delete(activityId);
            if (deleted.err) throw new Error(deleted.err);

            initiateUpdate(); 
        } catch (err) {
            console.error("Failed to delete activity:", err);
        }
    };
return (
  <div>
    <ul>
      {activities.map((activity) => (
        <li key={activity._id}>
          <strong>{activity.activityType}</strong> –{' '}
          {new Date(activity.date).toLocaleString()}
          {activity.note && <div>Note: {activity.note}</div>}

          <button onClick={() => setEditing(activity)}>Edit</button>
          <button onClick={() => handleDelete(activity._id)}>Delete</button>
        </li>
      ))}
    </ul>

    {editing && (
      <div style={{ marginTop: '1rem', padding: '1rem', border: '1px solid #ccc' }}>
        <h4>Editing Activity</h4>
        <ActivityForm
          childId={childId}
          existingActivity={editing}
          onSave={() => {
            setEditing(null);
            initiateUpdate();
          }}
        />
        <button onClick={() => setEditing(null)}>Cancel</button>
      </div>
    )}
  </div>
);
};

export default ActivityList;
