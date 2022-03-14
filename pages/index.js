import React from "react";
import { Heading, Page, TextStyle, Layout, EmptyState } from "@shopify/polaris";

const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";

class Index extends React.Component {
  state = {
    open: false,
  };
  render() {
    return (
      <div>
        cta
        <p> Select products to change their price temporarily. </p>;
      </div>
    );
  }
}

export default Index;
