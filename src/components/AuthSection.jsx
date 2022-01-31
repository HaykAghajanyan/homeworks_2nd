import { Drawer, IconButton, List, ListItem } from "@mui/material";
import { Close as CloseIcon } from '@mui/icons-material';
import { useCallback, useMemo, useState } from "react";
import AuthForm from "./AuthForm";
import { StatusSignIn, StatusSignUp, StatusPrifile } from '../constants/AuthSectionStatuses';
function AuthSection(props) {
	const { isAuthSectionOpen = false, onClose = Function.prototype } = props;
	const [authStatus, setAuthStatus] = useState(StatusSignIn);
	const changeAuthStatusSignIn = useCallback(() => setAuthStatus(StatusSignIn), []);
	const changeAuthStatusSignUp = useCallback(() => setAuthStatus(StatusSignUp), []);
	const changeAuthStatusProfile = useCallback(() => setAuthStatus(StatusPrifile), []);
	const styleObject = useMemo(() => ({
		inputProps: {
			autoComplete: 'off'
		},
		inner: "true",
		sxList: { width: "400px" },
		sxListItem: { justifyContent: "center" },
		sxListItemWithIcon: { justifyContent: "flex-end" },
		sxSpan: { fontSize: "12px" }
	}), []);
	return (
		<Drawer
			anchor="right"
			open={isAuthSectionOpen}
			onClose={onClose}
		>
			<List sx={styleObject.sxList}>
				<ListItem
					sx={styleObject.sxListItemWithIcon}
				>
					<IconButton
						onClick={onClose}
					>
						<CloseIcon />
					</IconButton>
				</ListItem>
			</List>
			{
				({
					[StatusSignIn]: (
						<AuthForm
							status={StatusSignIn}
							changeStatus={changeAuthStatusSignUp}
							styleObject={styleObject}
						/>
					),
					[StatusSignUp]: (
						<AuthForm
							status={StatusSignUp}
							changeStatus={changeAuthStatusSignIn}
							styleObject={styleObject}
						/>
					),
					[StatusPrifile]: null
				})[authStatus]
			}
		</Drawer>
	);
};
export default AuthSection;