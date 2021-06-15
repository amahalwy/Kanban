import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    color: 'white',
    fontWeight: 'bolder',
    textAlign: 'center',
  },
  primary: {
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },
  list: {
    width: 200,
    padding: 0,
  },
  icon: {
    color: theme.palette.primary.main,
    paddingRight: 0,
  },
  listItemIcon: {
    minWidth: 38,
  },
  listItem: {
    background: theme.palette.primary.main,
    marginTop: 0,
  },
}));

export default useStyles;
