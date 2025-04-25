import { render, screen } from "@testing-library/react";
import NewTaskForm from "../components/NewTaskForm";

test("renders the form", () => {
  render(
    <NewTaskForm categories={["Food", "Code"]} onTaskFormSubmit={() => {}} />
  );
 
});