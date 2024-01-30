const pageList = ({ todo, deleteTodo, updateTodo }) => {

	return (
		<table className="border-separate border-spacing-2 table-auto">
			<thead>
				<tr>
					<th>Task</th>
					<th>Date</th>
					<th>Operations</th>
				</tr>
			</thead>
			<tbody>
				{
					todo.map((val, index) => {
						<tr>
							<td>
								{val}
							</td>
							<td>
								{val}
							</td>
							<td>
								<input type="submit" value="UPDATE"  />
								<input type="submit" value="DELETE"  />
							</td>
						</tr>
					})
				}
			</tbody>
		</table>
	);
}

export default pageList;
