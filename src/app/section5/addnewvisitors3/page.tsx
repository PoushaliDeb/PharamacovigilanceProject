"use client"; // Marks this as a client component

import { useRouter } from "next/navigation";
import Head from "next/head";

export default function AddNewVisitors2() {
  const router = useRouter();

  const handleContinue = () => {
    console.log("Navigating to addnewvisitors3...");
    router.push("/section5/addnewvisitors3"); // Correct path for App Router
  };

  return (
    <>
      <Head>
        <title>Select Location</title>
      </Head>
      <div style={styles.container}>
        <header style={styles.header}>Add New Visitors</header>
        <main style={styles.main}>
          <div style={styles.iconPlaceholder}></div>
          <h1 style={styles.title}>Select Location</h1>
          <select style={styles.select}>
            <option value="">Select location here</option>
            <option value="location1">Location 1</option>
            <option value="location2">Location 2</option>
          </select>
          <p style={styles.description}>
            You’ll need to enable location in order to use Creware Cowork’s location.
          </p>
          <button style={styles.button} onClick={handleContinue}>CONTINUE</button>
        </main>
      </div>
    </>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    minHeight: "100vh",
    backgroundColor: "white",
  },
  header: {
    width: "100%",
    padding: "16px",
    backgroundColor: "#d32f2f",
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
    textAlign: "center",
  },
  main: {
    width: "100%",
    maxWidth: "400px",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  iconPlaceholder: {
    width: "80px",
    height: "80px",
    backgroundColor: "#e0e0e0",
    borderRadius: "50%",
    marginBottom: "16px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "16px",
  },
  select: {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
  },
  description: {
    fontSize: "14px",
    color: "#666",
    textAlign: "center",
    marginBottom: "24px",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#007bff",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};
