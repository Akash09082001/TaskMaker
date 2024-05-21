import { getTodos } from "@/actions/todo";
import Dashboard from "@/components/organisms/Dashboard";

const Page = async () => {
	const { todos } = await getTodos();

	return <Dashboard initialTodos={todos} />;
};

export default Page;
