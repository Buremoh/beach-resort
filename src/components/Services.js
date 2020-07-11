import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <faCocktail />,
        title: "free cocktails",
        info:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporsis!",
      },
      {
        icon: <faHiking />,
        title: "Endless Hiking",
        info:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporsis!",
      },
      {
        icon: <faShuttleVan />,
        title: "Free Shuttle",
        info:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporsis!",
      },
      {
        icon: <faBeer />,
        title: "Strongest Beer",
        info:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporsis!",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
