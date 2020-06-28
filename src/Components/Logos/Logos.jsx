import React from 'react';

import Css from '../../Images/logos-gris/css3.png';
import Git from '../../Images/logos-gris/git.png';
import GraphQL from '../../Images/logos-gris/graphql.png';
import Jira from '../../Images/logos-gris/jira.png';
import JavaScript from '../../Images/logos-gris/js.png';
import MySQL from '../../Images/logos-gris/mysql.png';
import NodeJs from '../../Images/logos-gris/node.png';
import Python from '../../Images/logos-gris/python.png';
import ReactJs from '../../Images/logos-gris/react.png';
import Docker from '../../Images/logos-gris/docker.png';
import MongoDB from '../../Images/logos-gris/mongo.png';
import Oracle from '../../Images/logos-gris/oracle.png';
import Sql from '../../Images/logos-gris/sql.png';
import Wordpress from '../../Images/logos-gris/wordpress.png';
import Html from '../../Images/logos-gris/html.png';
import Postgres from '../../Images/logos-gris/postgreSQL.png';
import Redis from '../../Images/logos-gris/redis.png';

const Logos = () => {
  let logos = [
    { img: Css, alt: 'CSS' },
    { img: Git, alt: 'GIT' },
    { img: GraphQL, alt: 'GraphQL' },
    { img: Jira, alt: 'Jira' },
    { img: JavaScript, alt: 'JavaScript' },
    { img: MySQL, alt: 'MySQL' },
    { img: NodeJs, alt: 'NodeJs' },
    { img: Python, alt: 'Python' },
    { img: ReactJs, alt: 'ReactJs' },
    { img: Docker, alt: 'Docker' },
    { img: MongoDB, alt: 'MongoDB' },
    { img: Oracle, alt: 'Oracle' },
    { img: Sql, alt: 'SQL' },
    { img: Wordpress, alt: 'Wordpress' },
    { img: Html, alt: 'Html' },
    { img: Postgres, alt: 'Postgres' },
    { img: Redis, alt: 'Redis' },
  ];
  return (
    <section className="invest-cont">
      <div className="container">
        <div className="row no-gutters">
          <div className="col text-center invest-text mt-3 mb-4">
            Algunas de las tecnologías que utilizamos:
          </div>
        </div>
        <div className="row no-gutters ">
          <div className="col text-center invest-logos align-self-center">
            {logos.map((logo, index) => (
              <div key={index} className="slide  invest-img">
                <img src={logo.img} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logos;
