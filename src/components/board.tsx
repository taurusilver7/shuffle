import { useState } from "react";
import PlusIcon from "./plus";
import { Column, Id } from "../types";
import ColumnContainer from "./column-container";

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

	const deleteColumn = (id: Id) => {
		const filteredColumn = columns.filter((col) => col.id !== id);
		setColumns(filteredColumn);
	};

	return (
		<div className="m-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-hidden no-scrollbar px-10">
			<div className="mx-auto flex flex-col gap-y-4">
				<div className="fixed top-6 left-10 flex justify-between items-center">
					<button
						onClick={() => {
							createNewColumn();
						}}
						className="flex gap-2 h-[60px] w-[350px] min-w-[350px] rounded-lg bg-mainBackground border-2 border-columnBackground p-4 ring-rose-400 hover:ring-2"
					>
						<PlusIcon />
						Add Column
					</button>

					<div className="pl-12">
						{columns.length > 0 && `${columns.length} sections`}
					</div>
				</div>
				<div className="flex gap-2 mt-10">
					{columns.map((col, index) => (
						<ColumnContainer
							key={index}
							column={col}
							deleteColumn={deleteColumn}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Board;
