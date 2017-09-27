import React, {Component} from 'react';
import './details.css';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';


import PieChart from 'react-simple-pie-chart';



const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
        marginLeft: 10,
        width:200,
        backgroundColor:'#80DEEA',
        color:'white',

    }),
    tabBase: {
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
        width: 500,
        paddingRight: 16,
    },
    tabHead: {
        fontSize: 16,
    },
});

class DetailsBase extends Component {

    render() {
        const { classes } = this.props;

        let details = this.props.tests;
        let failed =  details.filter((test) => "FAILED" === test.status);
        let inprogress = details.filter((test) => "INPROGRESS" === test.status);


        return (
            <div >
            <Paper className={classes.tabBase}>
                  <Table>
                    <TableHead className={classes.tabHead}>
                      <TableRow>
                        <TableCell>FeedID</TableCell>
                        <TableCell>Status</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {
                          details.map((test,index) =>
                              <TableRow key={index}>
                                <TableCell>{test.feedId}</TableCell>
                                <TableCell>{test.status}</TableCell>
                              </TableRow>
                          )
                      }
                    </TableBody>
                  </Table>
                </Paper>
                <Paper className={classes.root} elevation={4}>
                    <Typography type="headline" component="h4">
                        OverAll Status
                    </Typography>
                    <Divider/>
                    <Typography type="subheading" component="span" >
                        Total: {details.length}
                    </Typography>
                    <Typography type="subheading" component="span" color="secondary">
                        In Progress: {inprogress.length}
                    </Typography>
                    <Typography type="subheading" component="span" color="accent" >
                        Failed: {failed.length}
                    </Typography>
                    <div className="piechart">
                        <PieChart
                            slices={[
                                {
                                  color: '#66BB6A',
                                  value: inprogress.length,
                                },
                                {
                                  color: '#EF5350',
                                  value:  failed.length,
                                },
                            ]}
                        />
                    </div>
                </Paper>

            </div>
        );
    }
}
export const Details = withStyles(styles)(DetailsBase);
