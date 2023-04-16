import Home from "./pages/Home";
import "../src/dist/styles.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Coin from "./pages/Coin";
import { goerli} from '@wagmi/chains'
import { WagmiConfig, createClient } from 'wagmi'

import { ConnectKitProvider ,  getDefaultClient } from "connectkit";

const alchemyId = process.env.ALCHEMY_ID;

const client = createClient(
  getDefaultClient({
    appName: "Your App Name",
    alchemyId,
    chains: [goerli]
  }),
);

function App() {
  return (
   
    <WagmiConfig client={client}>
       
      <ConnectKitProvider>
      <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />}></Route>
        </Route>
      </Routes>
      </>
      </ConnectKitProvider>
      </WagmiConfig> 
    
  );
}

export default App;
