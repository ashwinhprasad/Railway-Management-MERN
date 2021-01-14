import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBooks } from "../../actions/book";
import BookDetail from "./BookDetail";
import * as api from "../../api";
import "./Profile.css";

export default () => {
  const user = useSelector((state) => state.user);
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const onDelete = (id) => {
    const data = api.deleteBook(id);
    console.log(data);
  };

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch, onDelete]);

  const filt_books = books.filter((book) => {
    return book.user.includes(user.id);
  });

  if (user.name) {
    return (
      <div className="profile-container">
        <img
          src="https://lh3.googleusercontent.com/proxy/AI9DJ23ca6YpqND4e6Riqp735r1tHfsAXezJWldUcxWz6lIUwVyACWxuZU2tQROiprSMN_J0sIJo3Laz0xMg1F0YYMQU0DkDrEbak8W4YDIH-pY3IW0E1h_8mgs"
          alt="image unavailable"
          width="100em"
          hight="100em"
        />
        <h2 id="profile-name">{user.name}</h2>
        <h2 className="user-info">Email : {user.email}</h2>
        <h2 className="user-info">Phone Number : {user.phone}</h2>
        <h2 id="trains-booked">Trains Booked: </h2>
        {filt_books.map((book) => {
          return <BookDetail key={book._id} book={book} onDelete={onDelete} />;
        })}
      </div>
    );
  } else {
    return <h1>Not Logged In</h1>;
  }
};
