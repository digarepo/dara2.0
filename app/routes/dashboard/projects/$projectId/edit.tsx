import type { LoaderFunctionArgs, ActionFunctionArgs } from "react-router";

export async function loader({ request: _request, params: _params }: LoaderFunctionArgs) {
  return null;
}

export async function action({ request: _request, params: _params }: ActionFunctionArgs) {
  return null;
}

export default function EditProjectPage() {
  return (
    <div className="p-4">
      <h1>Edit Project</h1>
    </div>
  );
}
