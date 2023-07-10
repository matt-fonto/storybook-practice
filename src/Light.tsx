type LightProps = {
  // Colors available
  color: "red" | "yellow" | "green";
};

const styles = {
  // common styles for all lights
  common: {
    borderRadius: "50%",
    width: "50px",
    height: "50px",
  },
  // specific styles for each light
  red: {
    backgroundColor: "red",
  },
  yellow: {
    backgroundColor: "yellow",
  },
  green: {
    backgroundColor: "green",
  },
};

// const Light: React.FC<LightProps> = ({ color }) => {
//   return <div style={{ ...styles.common, ...styles[color] }}></div>;
// };

const Light = ({ color }: LightProps) => {
  return <div style={{ ...styles.common, ...styles[color] }}></div>;
};

export default Light;
