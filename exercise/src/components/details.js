import React, {Component} from 'react';
import './details.css';

export default class Details extends Component {

    render() {
        let details = this.props.tests;
        let failed =  details.filter((test) => "FAILED" === test.status);
        let inprogress = details.filter((test) => "INPROGRESS" === test.status);


        return (
            <div >
                <table className="table table-hover">
                    <thead>
                        <tr>
                          <th>FeedID</th>
                          <th>Status</th>
                        </tr>
                    </thead>
                    {
                        details.map((test,index) =>
                            <tbody key={index}>
                                <tr >
                                  <td>{test.feedId}</td>
                                  <td>{test.status}</td>
                                </tr>
                            </tbody>
                        )
                    }
                </table>
                <div className="card Details-Card">
                    <div className="card-header Details-Card-Header">
                        OverAll Status
                    </div>
                    <div className="card-body ">
                        <span className="text">Total: {details.length}</span>
                        <span className="text inprogress">In Progress:{inprogress.length}</span>
                        <span className="text failed">Failed:{failed.length}</span>
                    </div>
                </div>
            </div>
        );
    }
}
