import { useEffect, useState } from 'react';
import * as activityService from '../../services/activityService';

const ActivityList = ({ childId, initiateUpdate }) => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const data = await activityService.getAllForChild(childId);
        if (data.err) throw new Error(data.err);

        // Sort by most recent first
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

  return (
    <ul>
      {activities.map((activity) => (
        <li key={activity._id}>
          <strong>{activity.activityType}</strong> –{' '}
          {new Date(activity.date).toLocaleString()}
          {activity.note && <div>Note: {activity.note}</div>}
        </li>
      ))}
    </ul>
  );
};

export default ActivityList;
