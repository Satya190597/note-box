import React, { useEffect, useState } from "react";
import ContentCard from "../content-card.js/content-card";
import ContentCardExtra from "../content-card-extra/content-card-extra";
import "./stylesheet/card-module.css";

function Card(props) {
  const ITEM_PER_PAGE = 3;
  const [totalPages, setTotalPages] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    setTotalPages(Math.ceil(props.data.length / ITEM_PER_PAGE));
    setCurrentPage(1);
  }, [props.data]);

  useEffect(() => {
    const setItemPerPageFn = () => {
      const startIndex = (currentPage - 1) * ITEM_PER_PAGE;
      const lastIndex = startIndex + 3;
      setItemsPerPage(props.data.slice(startIndex, lastIndex));
    };
    setItemPerPageFn();
  }, [currentPage, props.data]);

  const paginationItems = () => {
    const elements = [];
    for (let index = 1; index <= totalPages; index++) {
      elements.push(<li onClick={() => setCurrentPage(index)}>{index}</li>);
    }
    return elements;
  };

  return (
    <>
      {props.data.length > 0 && (
        <div className="card-container">
          <div>
            <h2>{props.header.title}</h2>
          </div>
          <div className="card-container-body">
            {itemsPerPage.map((element, index) => {
              return <ContentCard data={element} key={index} />;
            })}
            {itemsPerPage.length < 3 && (
              <ContentCardExtra
                content={
                  props.header.title === "Repository"
                    ? "This is it !! Working on new repos 💻"
                    : "This is it !! Working on new notes ✍️"
                }
              ></ContentCardExtra>
            )}
          </div>
          <div className="card-container-footer">
            <ul className="card-pagination">{paginationItems()}</ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
