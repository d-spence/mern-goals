import { useDispatch } from "react-redux";
import { deleteGoal } from '../features/goals/goalsSlice';
import { FaRegTimesCircle } from 'react-icons/fa';

const GoalItem = ({ goal }) => {
  const dispatch = useDispatch();

  return (
    <div className="goal">
      <div className="">
        { new Date(goal.createdAt).toLocaleString('en-US')}
      </div>
      <h2>{goal.text}</h2>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className="close"><FaRegTimesCircle /></button>
    </div>
  );
}

export default GoalItem;