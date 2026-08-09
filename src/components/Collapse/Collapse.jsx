import './Collapse.scss';
import { useState } from 'react';

export default function Collapse() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="collapse"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div> Placeholder </div>
        <img src="../../src/assets/arrow.png"></img>
      </div>
      <div className={`equipement ${isOpen ? '' : 'hidden'}`}>
        <div className="equipement__content">
          <li>Placeholder</li>
          <li>Placeholder</li>
          <li>Placeholder</li>
        </div>
      </div>
    </>
  );
}
