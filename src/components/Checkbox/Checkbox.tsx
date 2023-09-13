import { Props } from './types.ts';
import './Checkbox.css';
import React from 'react';

const Checkbox = ({ checked, value, id, changeFilter }: Props) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <label className={'input-checkbox'}>
        <input type={'checkbox'} checked={checked} onChange={() => changeFilter(id)} />
        <span className={'value'}>{value}</span>
        {isHovered && id !== 0 && (
          <span style={{ color: '#0388f5', cursor: 'pointer' }} onClick={() => changeFilter(id, true)}>
            Только
          </span>
        )}
      </label>
    </div>
  );
};

export default Checkbox;
