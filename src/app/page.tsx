import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Add New Visitors</title>
      </Head>
      <div style={styles.container}>
        <header style={styles.header}>
          Add New Visitors
        </header>
        <main style={styles.main}>
          <h1 style={styles.title}>Your name is</h1>
          <input
            type="text"
            placeholder="Enter Name"
            style={styles.input}
          />
          <p style={styles.description}>
            This is how it will appear in Creware Cowork, and you will not be able to change it.
          </p>
          <button style={styles.button}>CONTINUE</button>
        </main>
      </div>
    </>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    minHeight: '100vh',
    backgroundColor: 'white',
  },
  header: {
    width: '100%',
    padding: '16px',
    backgroundColor: '#d32f2f', // Red header background
    color: 'white',
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  main: {
    width: '100%',
    maxWidth: '400px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '16px',
  },
  input: {
    width: '100%',
    padding: '12px',
    marginBottom: '12px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  },
  description: {
    fontSize: '14px',
    color: '#666',
    textAlign: 'center',
    marginBottom: '24px',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#eeeeee', // Disabled button style
    color: '#888',
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '4px',
    cursor: 'not-allowed', // Disabled button cursor
    textAlign: 'center',
  },
};
