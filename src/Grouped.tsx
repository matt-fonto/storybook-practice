import Light from "./Light";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    border: "1px solid black",
    borderRadius: "10px",
    backgroundColor: "darkgray",
    width: "max-content",
    padding: "10px",
  },
};

const Grouped = () => {
  return (
    <div style={styles.container}>
      <Light color="red" />
      <Light color="yellow" />
      <Light color="green" />
    </div>
  );
};

export default Grouped;
