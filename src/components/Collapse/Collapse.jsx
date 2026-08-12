import './Collapse.scss';
import { useState } from 'react';

export default function Collapse({ title, list }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="collapse"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div> {title} </div>
        <img src="../../src/assets/arrow.png"></img>
      </div>
      <div className={`equipement ${isOpen ? '' : 'hidden'}`}>
        <div className="equipement__content">
          {list.map((element, index) => {
            return <li key={index}>{element}</li>;
          })}
        </div>
      </div>
    </>
  );
}
