import React from "react";
import user from "../images/user.png";

function ContectCard({ contact, clickHandler }) {
  return (
    <>
      {contact.map((contactObj) => {
        return (
          <div className="item" key={contactObj.id}>
            <img className="ui avatar image" src={user} alt="user" />
            <div className="content">
              <div className="header">{contactObj.name}</div>
              <div>{contactObj.email}</div>
            </div>
            <i
              className="ui right floated trash alternate outline icon "
                    style={{ color: "red", marginTop: "7px" }}
                    onClick={() => clickHandler(contactObj.id)}
            ></i>
          </div>
        );
      })}
    </>
  );
}

export default ContectCard;
