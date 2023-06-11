/* eslint-disable react/prop-types */
function DisplayMovies(props) {
  return (
    <div className="element">
      <h2>{props.title}</h2>
      <img src={props.image} alt={props.image} height={150} width={200} />
      <p>Rated: {props.rated}</p>
    </div>
  );
}

export default DisplayMovies;
