import { fireEvent, render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import { Counter } from "./Counter";

test("renders", async () => {
  render(<Counter />);

  expect(screen.getByRole("button")).toBeDefined();
});

test("initially has count 0", async () => {
  render(<Counter />);

  expect(screen.getByRole("button")).toHaveTextContent("0");
});

test("count increments by 1 when the button is clicked", async () => {
  render(<Counter />);

  fireEvent.click(screen.getByRole("button"));

  expect(screen.getByRole("button")).toHaveTextContent("1");
});
