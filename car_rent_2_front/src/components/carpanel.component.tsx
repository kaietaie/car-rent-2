"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CSSProperties } from "react";

interface Car {
  id: string;
  imageUrl: string;
  name: string;
  pricePerDay: number;
  available: boolean;
}

const styles = {
  wrapper: {
    overflowX: "auto",
    padding: "16px",
    width: "100%",
    overflow: "hidden",  
  } as CSSProperties,
  carousel: {
    display: "flex",
    gap: "16px",
    overflowX: "auto",
    scrollSnapType: "x mandatory",
    paddingBottom: "8px",
  } as CSSProperties,
  card: {
    color: "#333",
    minWidth: "300px",
    height: "400px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    overflow: "hidden",
    backgroundColor: "#ffffffe0",
    boxShadow: "0 8px 12px rgba(126, 209, 245, 0.52)",
  } as CSSProperties,
  image: {
    width: "100%",
    height: "55%",
    objectFit: "cover" as const,
    objectPosition: "center",
  } as CSSProperties,
  content: {
    padding: "16px",
  },
  title: {
    margin: "0 0 8px 0",
  },
  price: {
    fontSize: "18px",
    margin: "8px 0",
  },
  status: {
    fontWeight: "bold",
  },
};

export default function Carpanel() {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/cars") 
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load cars:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading cars...</p>;
  }

  return (
    <div style={styles.wrapper}>
      <div style={styles.carousel}>
        {cars.map((car) => (
          <div key={car.id} style={styles.card}>
            <Image
              src={car.imageUrl}
              alt={car.name}
              width={300}
              height={330}
              style={{ objectFit: "cover", ...styles.image }}
            />

            <div style={styles.content}>
              <h3 style={styles.title}>{car.name}</h3>

              <p style={styles.price}>
                💰 {car.pricePerDay} $ / day
              </p>

              <p
                style={{
                  ...styles.status,
                  color: car.available ? "green" : "red",
                }}
              >
                {car.available ? "Available" : "Not available"}
              </p>
            </div>
            <button
              style={{
                padding: "8px 16px",
                backgroundColor: car.available ? "#4CAF50" : "#ccc",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: car.available ? "pointer" : "not-allowed",
                margin: "0 16px 16px",
              }}
              disabled={!car.available}
              onClick={() => alert(`You have rented the ${car.name}!`)}
            >
              Rent Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
