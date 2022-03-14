import React from "react";
import { Heading, Page, TextStyle, Layout, EmptyState } from "@shopify/polaris";
import { useAppBridge } from "@shopify/app-bridge-react";
import { getSessionToken, authenticatedFetch } from "@shopify/app-bridge-utils";

function Index() {
  const app = useAppBridge();
  //const aFetch = authenticatedFetch(app);

  async function getCheckouts() {
    const token = await getSessionToken(app);

    const response = await fetch("/api/", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => JSON.stringify(response))
      .then((data) => console.log(JSON.parse(data)));

    // const checkouts = await response.json();
  }

  return (
    <Page>
      test
      <button onClick={getCheckouts}>API call</button>
    </Page>
  );
}

export default Index;
