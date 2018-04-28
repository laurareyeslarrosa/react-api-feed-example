import getMuiTheme from 'material-ui/styles/getMuiTheme';

const colors = {
  white: "#F9FAFC",
  lightBlue: "#6D93B2",
  hotPink: "#F757AA",
  darkerBlue: "#3D3D4A"
}

const MyMuiTheme = getMuiTheme({
  palette: {
    primary1Color: colors.lightBlue,
    primary2Color: colors.hotPink,
    accent1Color: colors.hotPink,
    borderColor: colors.lightBlue,
    textColor: colors.darkerBlue,
    alternateTextColor: colors.white,
    canvasColor: colors.white,
    pickerHeaderColor: colors.lightBlue
  },
});

export default MyMuiTheme;