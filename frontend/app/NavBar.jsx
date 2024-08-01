import Link from "next/link";

export default function NavBar() {
  const navBarItems = [
    { name: "Home", link: "/" },
    { name: "Budgets", link: "/budgets" },
    { name: "Purchases", link: "/purchases" },
    { name: "Suppliers", link: "/suppliers" },
    { name: "Orders", link: "/orders" },
    { name: "Users", link: "/users" },
  ];

  return (
    <ul className="w-full">
      {navBarItems.map((item) => (
        <li key={item.name} className="mb-2">
          <button className="block p-2 rounded bg-slate-300 hover:bg-sky-300 w-full">
            <Link href={item.link}>{item.name}</Link>
          </button>
        </li>
      ))}
    </ul>
  );
}
