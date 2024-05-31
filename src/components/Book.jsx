
const Book = (props) => {
  // const {id, title, author, year} = Book1
  // const {id, title, author, year} = Book2
  console.log(props, "<===props inside");
const {Title, Author,Year} = props;
console.log(Title);
  return (
    <>
      <div
        style={{ border: "3px solid red", background: "pink", width: "240px" }}
      >
        <h3>Title : {Title} </h3>
        <h4>Author Name : {Author} </h4>
        <p>Year of publish : {Year}</p>
      </div>
    </>
  );
};
export default Book;
