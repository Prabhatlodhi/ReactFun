import Book from "./Book";

const Book1 = {
  Title: "Harry Potter 1",
  Author: "Laxman",
  Year: 2008,
};

const Book2 = {
  Title: "Harry Potter 2",
  Author: "Ram",
  Year: 1999,
};

const Booklist = () => {
  return (
    <div>
      <Book Title={Book1.Title} Author={Book1.Author} Year={Book1.Year} />
      <Book Title={Book2.Title} Author={Book2.Author} Year={Book2.Year} />
    </div>
  );
};

export default Booklist;
