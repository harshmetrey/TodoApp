
export default function Pagination(props) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.data && props.data.length / 3); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map(number => {
    return (
      <li
        className="pagination"
        key={number}
        id={number}
        onClick={props.handleClick}
      >
        {number}
      </li>
    );
  });

  return <div>{renderPageNumbers}</div>;
}