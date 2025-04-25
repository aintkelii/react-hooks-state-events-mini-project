import { render, screen } from "@testing-library/react";
import Task from "../components/Task";import "@testing-library/jest-dom";


test("displays the task text", () => {
  render(
    <Task
      task={{ id: 1, text: "text!", category: "category!" }}
      onDelete={() => {}}
    />
  );
  expect(screen.queryByText("text!")).toBeInTheDocument();
});

test("displays the task category", () => {
  render(
    <Task
      task={{ id: 1, text: "text!", category: "category!" }}
      onDelete={() => {}}
    />
  );
  expect(screen.queryByText("category!")).toBeInTheDocument();
});