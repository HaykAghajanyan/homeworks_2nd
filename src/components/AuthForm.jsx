import { useState, memo, useCallback } from "react";
import {
	Button,
	Checkbox,
	List,
	ListItem,
	TextField,
	Typography,
	FormControlLabel,
	RadioGroup,
	Radio
} from "@mui/material";
import { StatusSignUp } from '../constants/AuthSectionStatuses';
import { emailRegExp, passwordRegExp } from '../constants/AuthValidationValues'
function AuthForm(props) {
	const { status = "", changeStatus = Function.prototype, styleObject = null } = props;
	const [email, setEmail] = useState('')
	const changeEmail = useCallback(e => setEmail(e.target.value), [])
	const [password, setPassword] = useState('')
	const changePassword = useCallback(e => setPassword(e.target.value), [])
	const [name, setName] = useState('')
	const changeName = useCallback(e => setName(e.target.value), [])
	const [gender, setGender] = useState('')
	const changeGender = useCallback(e => setGender(e.target.value), [])
	const [confirmPassword, setConfirmPassword] = useState('')
	const changeConfirmPassword = useCallback(e => setConfirmPassword(e.target.value), [])
	const [terms, setTerms] = useState(false)
	const changeTerms = useCallback(e => setTerms(e.target.checked), [])
	const SignIn = useCallback(() => {
		if (emailRegExp.test(email)) {

		} else {
			alert("Invalid Email Address.")
		}
	}, [email, password])
	const SignUp = useCallback(() => {
		if (emailRegExp.test(email)) { } else {
			alert("Invalid Email Address.")
		}
		if (passwordRegExp.test(password)) { } else {
			alert("Invalid Password.")
		}
		if (password !== confirmPassword) { } else {
			alert("Invalid Confirm Password.")
		}
	}, [name, email, password, gender, confirmPassword, terms])
	return (
		<form>
			<List sx={styleObject?.sxList}>
				{/* Name */}
				{
					(status === StatusSignUp) && (
						<ListItem sx={styleObject?.sxListItem}>
							<TextField
								required
								type="text"
								label="Name"
								inner={styleObject?.inner}
								inputProps={styleObject?.inputProps}
								value={name}
								onChange={changeName}
							/>
						</ListItem>
					)
				}
				{/* Email */}
				<ListItem sx={styleObject?.sxListItem}>
					<TextField
						required
						type="email"
						label="E-mail"
						inner={styleObject?.inner}
						inputProps={styleObject?.inputProps}
						value={email}
						onChange={changeEmail}
					/>
				</ListItem>
				{/* Gender */}
				{
					(status === StatusSignUp) && (
						<ListItem sx={styleObject?.sxListItem}>
							<RadioGroup
								row aria-label="gender" name="row-radio-buttons-group"
								value={gender}
								onChange={changeGender}
							>
								<FormControlLabel value="female" control={<Radio />} label="Female" />
								<FormControlLabel value="male" control={<Radio />} label="Male" />
								<FormControlLabel value="other" control={<Radio />} label="Other" />
							</RadioGroup>
						</ListItem>
					)
				}
				{/* Password */}
				<ListItem sx={styleObject?.sxListItem}>
					<TextField
						required
						error={false}
						type="password"
						label="Password"
						inner={styleObject?.inner}
						inputProps={styleObject?.inputProps}
						value={password}
						onChange={changePassword}
					/>
				</ListItem>
				{
					(status === StatusSignUp) && (
						<>
							{/* Confirm Password */}
							<ListItem sx={styleObject?.sxListItem}>
								<TextField
									required
									type="password"
									label="Confirm password"
									inner={styleObject?.inner}
									inputProps={styleObject?.inputProps}
									value={confirmPassword}
									onChange={changeConfirmPassword}
								/>
							</ListItem>
							{/* Terms */}
							<ListItem sx={styleObject?.sxListItem}>
								<Checkbox
									checked={terms}
									onChange={changeTerms}
								/>
								<Typography
									component="span"
									sx={styleObject?.sxSpan}
								>
									I agree to the defined terms conditions and policies*
								</Typography>
							</ListItem>
						</>
					)
				}
				{/* Auth Form Submit */}
				<ListItem sx={styleObject?.sxListItem}>
					<Button
						variant="contained"
						onClick={(status === StatusSignUp) ? SignUp : SignIn}
					>
						Sign {(status === StatusSignUp) ? "Up" : "In"}
					</Button>
				</ListItem>
				{/* Auth Form Switch */}
				<ListItem sx={styleObject?.sxListItem}>
					<Button
						variant="text"
						onClick={changeStatus}
					>
						{
							(status === StatusSignUp)
								? "Already have an account?"
								: "Create your account?"
						}
					</Button>
				</ListItem>
			</List>
		</form>
	);
};
export default memo(AuthForm);