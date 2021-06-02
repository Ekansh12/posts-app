import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar,IconButton,Typography,MenuItem,Menu} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	grow: {
		marginBottom: 40,
		flexGrow: 1,
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
		display: 'flex',
		},
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
		display: 'none',
		},
	}
}));

export default function PrimarySearchAppBar(props) {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
	setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
	setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
	<Menu
	  anchorEl={mobileMoreAnchorEl}
	  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
	  id={mobileMenuId}
	  keepMounted
	  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
	  open={isMobileMenuOpen}
	  onClose={handleMobileMenuClose}
	>
	  	<MenuItem component={ Link } to="/">All Post</MenuItem>
		<MenuItem component={ Link } to="/create">Create Post</MenuItem>
		<MenuItem component={ Link } to="/liked">Liked Post</MenuItem>
		<MenuItem component={ Link } to="/disliked">Disliked Post</MenuItem>
	</Menu>
  );

  return (
		<div className={classes.grow}>
			<AppBar position="fixed">
				<Toolbar>
					<Typography variant="h6" noWrap>
						Posts App
					</Typography>
					
					<div className={classes.grow} />
					
					<div className={classes.sectionDesktop}>
						<MenuItem component={ Link } to="/">All Post</MenuItem>
						<MenuItem component={ Link } to="/create">Create Post</MenuItem>
						<MenuItem component={ Link } to="/liked">Liked Post</MenuItem>
						<MenuItem component={ Link } to="/disliked">Disliked Post</MenuItem>
					</div>
					<div className={classes.sectionMobile}>
						<IconButton
							aria-label="show more"
							aria-controls={mobileMenuId}
							aria-haspopup="true"
							onClick={handleMobileMenuOpen}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
					</div>

				</Toolbar>
			</AppBar>
			{renderMobileMenu}
		</div>
	);
}
