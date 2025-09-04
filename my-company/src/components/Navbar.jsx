import { Link } from "react-router-dom";
<nav>
  <ul>
    <li>
      <Link to href="/">
        Home
      </Link>
    </li>
    <li>
      <Link to href="<About/>">
        About
      </Link>
    </li>
    <li>
      <Link to href="<Services/>">
        Services
      </Link>
    </li>
    <li>
      <Link to href="<Contact/>">
        Contact
      </Link>
    </li>
  </ul>
</nav>;

export default Navbar;
