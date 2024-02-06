import type { MetaFunction } from "@remix-run/node";
import Test from "~/components/Test";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <Test />
    </div>  
  );
}
