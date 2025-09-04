import type { CoursePart } from "../types";
import { assertNever } from "../utils";

interface PartProps {
  part: CoursePart;
}

const Part = (props: PartProps) => {
  const part = props.part;
  switch (part.kind) {
    case "basic":
      return (
        <div>
          <b>{part.name}</b> Exercises: {part.exerciseCount}
          <br />
          Description: <i>{part.description}</i>
        </div>
      );
    case "group":
      return (
        <div>
          <b>{part.name}</b> Exercises: {part.exerciseCount}
          <br />
          Group projects: {part.groupProjectCount}
        </div>
      );
    case "background":
      return (
        <div>
          <b>{part.name}</b> Exercises: {part.exerciseCount}
          <br />
          Description: <i>{part.description}</i>
          <br />
          Link: {part.backgroundMaterial}
        </div>
      );
    case "special":
      return (
        <div>
          <b>{part.name}</b> Exercises: {part.exerciseCount}
          <br />
          Description: <i>{part.description}</i>
          <br />
          Required skills: {part.requirements.join(", ")}
        </div>
      );
    default:
      return assertNever(part);
  }
};

export default Part;
