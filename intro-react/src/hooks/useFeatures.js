import { useEffect, useState } from "react";
import { featureData } from "../data/feature";
import { apiClient } from "../lib/apiClient";

export const useFeatures = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isComponentAlive = true;

    const fetchFeatures = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await apiClient.get("/features");
        if (isComponentAlive) {
          setFeatures(response);
        }
      } catch (err) {
        console.warn("API gagal, menggunakan data mock sebagai fallback:", err);
        if (isComponentAlive) {
          setError(err);
          setFeatures(featureData);
        }
      } finally {
        if (isComponentAlive) {
          setLoading(false);
        }
      }
    };

    fetchFeatures();

    return () => {
      isComponentAlive = false;
    };
  }, []);

  return { features, loading, error };
};
