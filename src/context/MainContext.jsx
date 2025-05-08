import { createContext, useState, useEffect } from "react";
import { fetchIPData } from "../utils/IpApi";

const MainContext = createContext();

const MainProvider = ({ children }) => {
  const [ipData, setIpData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [input, setInput] = useState("");

  const searchIP = async (ipOrDomain = "") => {
    try {
      setLoading(true);

      const data = await fetchIPData(ipOrDomain);
      setIpData(data);

      setError("");
    } catch (err) {
      setError(err.message || "Invalid IP or Domain");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    searchIP();
  }, []);

  return (
    <MainContext.Provider
      value={{ ipData, loading, error, searchIP, input, setInput }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainProvider };
