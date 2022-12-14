import { makeStyles } from '@material-ui/core/styles';
import { TAppTheme } from '@theme/index';

export const eChartLineStyles = makeStyles((theme: TAppTheme) => ({
  container: {
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    padding: '0 20px',
    textAlign: 'center',
    boxSizing: 'border-box',
    position: 'relative',
    color: 'rgb(171, 170, 193)',
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
  },
  lineChartWrap: {
    width: '100%',
    height: 'auto',
    marginBottom: 20,
  },
  lineChartContainer: {
    display: 'block',
    width: '100%',
    height: '100%',
    backgroundColor: '#212121',
  },
  lineChartTitle: {
    // width: '100%',
    textAlign: 'left',
    fontSize: '30px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 15,
    },
  },
  lineChartHeader: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    paddingTop: '30px',
    paddingBottom: '10px',
    [theme.breakpoints.down('sm')]: {
      paddingTop: 10,
      paddingLeft: 10,
      justifyContent: 'flex-start',
      flexDirection: 'column',
    },
  },
  uploadButton: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#6151d0',
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '14px',
    padding: '8px 16px',
    borderRadius: '4px',
    marginLeft: '8px',
    marginRight: '8px',
    '&:hover': {
      cursor: 'pointer',
      opacity: 0.8,
    },
  },
  reactECharts: {
    width: '100%',
    height: 'calc(100vh - 450px) !important',
    [theme.breakpoints.down('lg')]: {
      height: 450,
      width: 'calc(100vw - 354px)',
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  granularitySelect: {
    display: 'flex',
    width: '100%',
    maxWidth: 200,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 15,
    marginRight: 50,
  },
  periodSelect: {
    display: 'flex',
    minWidth: '200px',
    // justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '15px',
    [theme.breakpoints.down('sm')]: {
      marginTop: 5,
    },
  },
  lineChartDownloadButtonBar: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
    height: '30px',
    [theme.breakpoints.down('sm')]: {
      marginTop: 10,
      justifyContent: 'flex-start',
    },
  },
  lineChartFooter: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 30,
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      paddingBottom: 10,
    },
  },
  lineChartThemeSelect: {
    display: 'flex',
    minWidth: '150px',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  themeSelectButton: {
    width: '30px',
    height: '30px',
    borderRadius: '5px',
  },
  filterButton: {
    backgroundColor: '#eee',
    color: '#212124',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '12px',
    padding: '4px 8px',
    borderRadius: '3px',
    borderWidth: '1px',
    borderColor: '#212124',
    marginLeft: '4px',
    marginRight: '4px',
    '&:hover': {
      cursor: 'pointer',
      opacity: '0.8',
    },
  },
  activeButton: {
    backgroundColor: '#c3921f',
    borderColor: '#c3921f',
    color: '#fff',
  },
  activeThemeButton: {
    borderColor: '#008000',
    borderWidth: '5px',
  },
}));
