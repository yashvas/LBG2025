import Objective from "./objective/Objective";
import ObjectiveEntry from "./objectiveEntry/ObjectiveEntry";
import {ToDoListContainer } from "./ToDoList.styled";

interface ToDoListProps {
  objectives: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setObjectives: any;
}

export default function ToDoList({ objectives, setObjectives }: ToDoListProps) {
  return (
    <ToDoListContainer>
      <ObjectiveEntry setObjectives={setObjectives} />
      {objectives.map((item) => (
        <Objective title={item} />
      ))}
    </ToDoListContainer>
  );
}
