import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Dashboard = () => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      toast.info('Please login to access dashboard');
    }
  }, [user, navigate]);

  return (
    <div>Dashboard</div>
  );
}

export default Dashboard;