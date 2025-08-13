import { createSlice } from "@reduxjs/toolkit";

interface Props {
  value?: number;
}

export default function Counter({ value = 0 }: Props) {
  return (
    <section className="counter">
      <h2 className="counter__title">Counter</h2>

      <div className="counter__display" aria-live="polite">
        {value}
      </div>

      <div className="counter__controls">
        <button className="btn" type="button" aria-label="Decrement">
          −
        </button>
        <button className="btn" type="button" aria-label="Increment">
          +
        </button>
        <button className="btn btn--muted" type="button" aria-label="Reset">
          Reset
        </button>
      </div>
    </section>
  );
}