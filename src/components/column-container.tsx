import { Column, Id } from "../types";
import PlusIcon from "./plus";
import TrashIcon from "./trash";

interface Props {
	column: Column;
	deleteColumn: (id: Id) => void;
}

const ColumnContainer = ({ column, deleteColumn }: Props) => {
	return (
		<div className="bg-columnBackground max-h-[500px] rounded-md flex flex-col w-80 h-[500px]">
			<div className="bg-mainBackground text-md h-16 cursor-grab rounded-md p-3 font-bold border-4 flex items-center justify-between border-columnBackground rounded-b-none">
				<div className="flex gap-4">
					<div className="flex justify-center items-center px-2 py-1 text-sm rounded-full bg-columnBackground">
						{Math.floor(Math.random() * 10)}
					</div>
					{column.title}
				</div>

				<div className="flex gap-2">
					<button className="stroke-gray-500 hover:stroke-green-500 hover:bg-columnBackground rounded-lg px-1 py-2">
						<PlusIcon />
					</button>
					<button
						onClick={() => {
							deleteColumn(column.id);
						}}
						className="stroke-gray-500 hover:stroke-rose-400 hover:bg-columnBackground rounded-lg px-1 py-2"
					>
						<TrashIcon />
					</button>
				</div>
			</div>

			<div className="flex flex-grow">Content</div>
			<div className="flex justify-center">Footer</div>
		</div>
	);
};

export default ColumnContainer;
