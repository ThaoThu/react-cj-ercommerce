import React from "react";
import PropTypes from "prop-types";
import FormSearch from "../../containers/category/Form";
import List from "../../containers/category/List";

function Category(props) {
  return (
    <section className="category">
      <FormSearch />
      <List />
    </section>
  );
}

Category.propTypes = {};

export default Category;
