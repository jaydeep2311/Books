import React from "react";
const Main = () => {
  const [cur, setCur] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:8001/books")
      .then((res) => res.json())
      .then((res) => {
        setCur(res);
      });
  }, []);
  const handleClick = (e) => {
    fetch(`http://localhost:8001/books/${e.target.textContent}`)
      .then((res) => res.json())
      .then((res) => {
        setCur(res);
      });
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {cur.map((el) => {
        return (
          <>
            <div
              style={{
                border: "1px solid grey",
                padding: "10px",
                width: "300px",
                cursor: "pointer",
              }}
              onClick={(e) => {
                handleClick(e);
              }}
            >
              <h1>{el.name}</h1>
              <h3>{el.author}</h3>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Main;
