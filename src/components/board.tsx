import { useState } from "react";
import PlusIcon from "./plus";
import { Column } from "../types";

const Board = () => {
	const [columns, setColumns] = useState<Column[]>([]);
	// console.log(columns);

	const createNewColumn = () => {
		const columnToAdd: Column = {
			id: generateId(),
			title: `Column ${columns.length + 1}`,
		};

		setColumns([...columns, columnToAdd]);
	};

	const generateId = () => {
		return Math.floor(Math.random() * 10001);
	};

	return (
		<div className="m-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-hidden px-10">
			<div className="m-auto flex gap-4">
				<div className="flex gap-2">
					{columns.map((col, index) => (
						<div key={index} className="">
							<div>{col.title}</div>
						</div>
					))}
				</div>
				<button
					onClick={() => {
						createNewColumn();
					}}
					className=" flex gap-2 h-[60px] w-[350px] min-w-[350px] rounded-lg bg-mainBackground border-2 border-columnBackground p-4 ring-rose-400 hover:ring-2"
				>
					<PlusIcon />
					Add Column
				</button>
			</div>
		</div>
	);
};

export default Board;
