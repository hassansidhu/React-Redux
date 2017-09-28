import React, {Component} from 'react';
import './details.css';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

import {PieChart, Pie} from 'recharts';


const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
        marginLeft: 10,
        width:200,
        opacity:0.8,
        color:'white',
        marginBottom: 20,
        backgroundColor:"#B39DDB"
    }),
    tabBase: {
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
        paddingRight: 16,
        marginRight: 16,
        width: 700,
    },
    tabHead: {
        fontSize: 16,
    },
    detailsContiner: {
        display:'flex',
    },
});

class DetailsBase extends Component {

    render() {
        const { classes } = this.props;

        let details = this.props.tests;
        let failed =  details.filter((test) => "FAILED" === test.status);
        let inprogress = details.filter((test) => "INPROGRESS" === test.status);
        let data =  [{name:'FAILED', value:failed.length}, {name:'IN-PROGRESS', value: inprogress.length}];


        return (
            <div>

            <Paper className={classes.tabBase}>
                  <Table>
                    <TableHead className={classes.tabHead}>
                      <TableRow>
                        <TableCell>FeedID</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Vendor</TableCell>
                        <TableCell>Last Update</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {
                          details.map((test,index) =>
                              <TableRow key={index}>
                                <TableCell>{test.feedId}</TableCell>
                                <TableCell>{test.status}</TableCell>
                                <TableCell>{test.vendor}</TableCell>
                                <TableCell>{test.lastModifed}</TableCell>
                              </TableRow>
                          )
                      }
                    </TableBody>
                  </Table>
                </Paper>
                <div className={classes.detailsContiner}>
                    <PieChart width={455} height={300}>
                        <Pie startAngle={0} endAngle={360} data={data} cx={200} cy={200} outerRadius={80} fill="#82ca9d" label/>
                    </PieChart>
                    <div className={classes.root} elevation={4}>
                        <Typography type="headline" component="h4">
                            OverAll Status
                        </Typography>
                        <Divider/>
                        <Typography type="subheading" component="span" >
                            Total: {details.length}
                        </Typography>
                        <Typography type="subheading" component="span">
                            In Progress: {inprogress.length}
                        </Typography>
                        <Typography type="subheading" component="span" >
                            Failed: {failed.length}
                        </Typography>
                    </div>
                </div>
            </div>
        );
    }
}
export const Details = withStyles(styles)(DetailsBase);
