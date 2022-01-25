import TextField from "@mui/material/TextField";

function ColorPicker(props) {
	const { value = "#000", onChange = Function.prototype } = props
	return (
		<TextField style={{ width: 50 }} size="small" type="color" onChange={onChange} value={value} />
	);
}

export default ColorPicker;
