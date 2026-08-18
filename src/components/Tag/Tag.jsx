import './Tag.scss';

export default function Tag({ tags }) {
  return (
    <>
      {tags.map((tag, index) => (
        <div className="tag" key={index}>
          {tag}
        </div>
      ))}
    </>
  );
}
