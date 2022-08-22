import "./styles/App.css";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import EnhancedTable from "./components/Table";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";


const TRIPS_QUERY = gql`
  {
    tripData(id: "0") {
      count
      numberOfVehicles
    }
    entries(orderBy: timeOut, orderDirection: desc, first: 50) {
      id
      txHash
      block
      truckId
      timeOut
      weight
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(TRIPS_QUERY);

  console.log(data);

  if (error) return <pre>{error.message}</pre>;
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Header />
        <div className="dashboard-container">
          {loading ? (
            "loading"
          ) : (
            <>
              <Banner countData={data.tripData} />
              <EnhancedTable data={data.entries} />
            </>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
