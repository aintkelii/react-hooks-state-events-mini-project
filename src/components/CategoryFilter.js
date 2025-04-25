import { render, screen } from "@testing-library/react";
import CategoryFilter from "../components/CategoryFilter";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          key={category}
          className={category === selectedCategory ? "selected" : ""}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;

test("displays all category buttons", () => {
  const categories = ["All", "Food", "Code"];
  const selectedCategory = "All";
  const onSelectCategory = jest.fn();

  render(
    <CategoryFilter
      categories={categories}
      selectedCategory={selectedCategory}
      onSelectCategory={onSelectCategory}
    />
  );

  // Check that all category buttons are rendered
  categories.forEach((category) => {
    const button = screen.getByText(category);
    expect(button).toBeInTheDocument();

    // Check if the button has the 'selected' class when appropriate
    if (category === selectedCategory) {
      expect(button).toHaveClass("selected");
    } else {
      expect(button).not.toHaveClass("selected");
    }
  });
});

test("calls onSelectCategory when a button is clicked", () => {
  const categories = ["All", "Food", "Code"];
  const onSelectCategory = jest.fn();

  render(
    <CategoryFilter
      categories={categories}
      selectedCategory="All"
      onSelectCategory={onSelectCategory}
    />
  );

  const foodButton = screen.getByText("Food");
  foodButton.click();

  expect(onSelectCategory).toHaveBeenCalledWith("Food");
  
});
