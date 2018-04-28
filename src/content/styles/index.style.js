import getMuiTheme from 'material-ui/styles/getMuiTheme';

const colors = {
  white: "#F9FAFC",
  lightBlue: "#6D93B2",
  darkerBlue: "#3D3D4A",
}

const MyMuiTheme = getMuiTheme({
  palette: {
    primary1Color: colors.lightBlue,
    borderColor: colors.lightBlue,
    textColor: colors.darkerBlue,
    alternateTextColor: colors.white,
    canvasColor: colors.white
  },
});

export default MyMuiTheme;