import { useState } from 'react';

export function DropDownItem({ MainName, details }) {
  const [open, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen((open) => !open);
  }
  return (
    <div className="text-m mb-[60px] min-h-9 border-b-[2px] ">
      <div onClick={handleClick}>{MainName}</div>
      {details.map((detail, i) => (
        <div className={`${open ? '' : 'hidden'}`} key={i}>
          <label>{detail?.heading}</label>
          <span>{detail?.paragraph}</span>
        </div>
      ))}
    </div>
  );
}
