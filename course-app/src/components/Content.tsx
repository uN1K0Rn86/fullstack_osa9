import type { CoursePart } from "../types";
import Part from "./Part";

interface ContentProps {
  parts: CoursePart[];
}

const Content = (props: ContentProps) => {
  return (
    <div>
      {props.parts.map((p) => (
        <div key={p.name}>
          <Part part={p} />
          <br />
        </div>
      ))}
    </div>
  );
};

export default Content;
