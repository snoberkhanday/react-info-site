import "../../style.css";
import Image from "../../images/logo.png";
const Main = () => {
  return (
    <main>
      <h1 className="main--title">Fun Facts about React</h1>
      <div className="main--wrapper">
        <ul className="main--facts">
          <li>Was first released in 2013</li>
          <li>Was Originally Created by Jordan Walke</li>
          <li>Has well over 100k stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprises, including Mobile Apps</li>
        </ul>
        <div className="main--react_image">
            <img className="main--image" src={Image} alt="Logo" />
        </div>
      </div>
    </main>
  );
};

export default Main;
