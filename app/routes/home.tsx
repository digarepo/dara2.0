import { Button } from "~/components/ui/button";
import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.VALUE_FROM_EXPRESS };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <Welcome message={loaderData.message} />
      <h1 className="text-3xl font-bold underline">Welcome to Dara2.0</h1>
    </div>
  );
}
