import { InputLabel, MenuItem, FormControl, Select as MuiSelect } from '@mui/material'

function Select(props) {
	const { label = 'none', list = [], value = "", onChange = Function.prototype } = props
	return (
		<FormControl
			size="small"
			style={{ width: "200px" }}
		>
			<InputLabel>{label}</InputLabel>
			<MuiSelect
				onChange={onChange}
				autoWidth
				label={label}
				value={value}
			>
				<MenuItem value="">
					<em>None</em>
				</MenuItem>
				{

					(Array.isArray(list) && list.length > 0)
					&&
					list.map((elem, i) => {
						return (
							<MenuItem key={i} value={elem.value}>{elem.desc}</MenuItem>
						);
					})
				}
			</MuiSelect>
		</FormControl >
	);
}

export default Select;
