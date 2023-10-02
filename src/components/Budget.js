import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const handleBudgetChange = (event) => {
    const updatedBudget = parseFloat(event.target.value);
    
    if (!isNaN(updatedBudget)) {
      // Dispatch an action to update the budget in the context
      dispatch({ type: 'SET_BUDGET', payload: updatedBudget });
      setNewBudget(updatedBudget);
    } if (updatedBudget > 20000) {
       alert("max fund value cannot exceed 20000")
    }
  };
  
  return (
    <div className="alert alert-secondary">
      <span>Budget: ${newBudget}</span>
      <input
        type="number"
        step="1000"
        value={newBudget}
        onChange={handleBudgetChange}
      />
    </div>
  );
};

export default Budget;
