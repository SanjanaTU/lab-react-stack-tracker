import React from "react";
import { Link } from "react-router-dom";

function HomePage(props) {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <ul>
        {props.companies.map((company) => (
          <Link key={company.id} to={`/company/${company.slug}`}>
          <li >
            <img src={company.logo} alt={company.name} width="100" height="100" />
            {company.name}
          </li> 
          </Link>
          
        ))}
      </ul>
    </div>
  );
}

export default HomePage;