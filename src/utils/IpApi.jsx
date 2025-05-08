import axios from "axios";

const API_KEY = "at_IKIZuCF265y06mhUuNyQOlF1Gmsp5";

/**
 * Fetches geolocation data for an IP address or domain using the IPify API.
 * @param {string} input - IP address or domain name.
 * @returns {Promise<object>} - Geolocation data.
 */
export const fetchIPData = async (input = "") => {
  const baseUrl = "https://geo.ipify.org/api/v2/country,city";
  const isIP = /^[\d.]+$/.test(input); // Basic IPv4 check

  const url = `${baseUrl}?apiKey=${API_KEY}${
    input ? (isIP ? `&ipAddress=${input}` : `&domain=${input}`) : ""
  }`;

  try {
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    console.error("Error fetching IP data:", err);
    throw new Error("Failed to fetch IP data. Please check the input.");
  }
};
