import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function CompanyPage(props) {
  const {companySlug} = useParams();
  const oneCompany = props.companies.find(company=>company.slug === companySlug)
  const[company,setCompany]=useState(oneCompany)
  return (
    <div>
      <h1>CompanyPage</h1>
      <h5> {oneCompany.description}</h5>

      <ul>
        {company.techStack.map((tech) => (
          <Link key={tech.id} to={`/technologies/${tech.slug}`}>
          <li >
            <img src={tech.image} alt={tech.name} width="100" height="100" />
            {tech.name}
            {tech.description}
          </li> 
          </Link>
          
        ))}
      </ul>
    </div>
  );
}

export default CompanyPage;
