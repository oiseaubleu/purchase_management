export default function RemainingBudget() {
  return (
    <div className="flex flex-row justify-end">
      <h2 className="text-2xl m-5 font-light">Remaining Budget</h2>
      <p className="text-2xl m-5 font-bold">$1,000.00</p>
      <button className="p-2 m-5 rounded bg-slate-300 hover:bg-sky-300">
        Edit Budget
      </button>
    </div>
  );
}
