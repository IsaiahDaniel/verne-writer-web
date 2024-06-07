import React, { useState } from 'react';

function SelectableItem({ text, isSelected, onSelect }: any) {
  const [selected, setSelected] = useState(isSelected);

  const handleClick = () => {
    setSelected(!selected);
    onSelect(!selected); // Pass the updated selected state to the parent component
  };

  return (
    <div className="selectable-item" onClick={handleClick}>
      {selected ? '✓ ' : ''}{"politics"}
    </div>
  );
}

export default SelectableItem;