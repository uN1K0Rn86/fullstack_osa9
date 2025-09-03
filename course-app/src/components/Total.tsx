interface TotalProps {
  total: number;
}

const Total = (props: TotalProps) => {
  return <p>Total number of exercises: {props.total}</p>;
};

export default Total;
