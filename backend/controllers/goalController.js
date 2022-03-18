// @desc    Get goals
// @route   GET /api/goals
// @access Private
const getGoals = (req, res) => {
  res.status(200).json({ message: 'Get goals' });
}

// @desc    Create goal
// @route   POST /api/goals
// @access Private
const createGoal = (req, res) => {
  res.status(200).json({ message: 'Create goal' });
}

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access Private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
}

// @desc    Delete goal
// @route   GET /api/goals/:id
// @access Private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
}

module.exports = {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
}