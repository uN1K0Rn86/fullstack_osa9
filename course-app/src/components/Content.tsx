type coursePart = {
  name: string;
  exerciseCount: number;
};

interface ContentProps {
  parts: coursePart[];
}

const Content = (props: ContentProps) => {
  return (
    <table>
      <thead>
        <tr>
          <td>
            <b>Name</b>
          </td>
          <td>
            <b>Exercises</b>
          </td>
        </tr>
      </thead>
      <tbody>
        {props.parts.map((p) => (
          <tr key={p.name}>
            <td>{p.name}</td>
            <td>{p.exerciseCount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Content;
