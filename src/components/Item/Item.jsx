import Collapse from '../Collapse/Collapse';

export default function Item({ title, cover }) {
  return (
    <>
      <img src={cover}></img>
      <div>{title}</div>
      <div>Placeholder location</div>
      <div>Placeholder rating</div>
      <Collapse title="Description" list={['qsd']}></Collapse>
      <Collapse title="Equipements" list={['qsd']}></Collapse>
    </>
  );
}
