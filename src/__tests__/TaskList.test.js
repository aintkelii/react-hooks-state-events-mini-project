import { render } from "@testing-library/react";
import TaskList from "../components/TaskList";

const testTasks = [
  { id: 1, text: "Task 1", category: "Code" },
  { id: 2, text: "Task 2", category: "Food" },
  { id: 3, text: "Task 3", category: "Money" },
];

test("displays all items when initially rendered", () => {
  const { container } = render(
    <TaskList
      tasks={testTasks}
      selectedCategory="All"
      onDeleteTask={() => {}}
    />
  );
  expect(container.querySelectorAll(".task")).toHaveLength(testTasks.length);
});
