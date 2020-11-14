import React from "react";
import Item from "./item";
import Footer from './footer';
import BackButton from "./backButton";

const NotePage = ({ match, notes }) => {
  const [item, setItem] = React.useState([]);

  React.useEffect(() => {
    let note = notes.filter((note) => note.id === parseInt(match.params.id));
    console.log(note);
    setItem(note);
  }, [match.params.id, notes]);

  console.log(item);

  return (
    <>
      <div className="jumbotron text-danger text-center">
        <div className="row">
          <div className="col-md-7">
            <h1 className="text-center"> NOTED.</h1>
          </div>
          <div className='col-md-2 ml-auto mt-2'>
            <BackButton />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {item.map((item) => (
              <Item item={item} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotePage;
