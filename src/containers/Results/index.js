import React, { Component } from 'react';
import { DataTable, Button } from 'carbon-components-react';
import { Link , Redirect } from 'react-router-dom';
import _  from 'lodash';
import PropTypes from 'prop-types'



const {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
    TableHeader,
    TableToolbarSearch,
    TableToolbar,
    TableToolbarContent
} = DataTable;


class Results extends Component  {
    static contextTypes = {
        router: PropTypes.object
    }
    redirectToTarget = () => {
        this.context.router.history.push(`/createlisting`)
    }
    render() {
        // Given that we have the following rows with the fields `foo`, `bar`, and `baz`
        const rows = [
            {
                isbn_number: 1234567890,
                id: "1234", 
                title: "Algorithm Design",
                author: "Kleinberg Tardos",
                edition: "3rd",
                price: 100,
                location: "UofT Downtown",
                condition: "Excellent"
            },
            {
                isbn_number: 1234567890,
                id: "3421",
                title: "Algorithm Design",
                author: "Kleinberg Tardos",
                edition: "2nd",
                price: 102,
                location: "UofT Downtown",
                condition: "Excellent"
            },
            {
                isbn_number: 1234567890,
                id: "7891",
                title: "Algorithm Design",
                author: "Kleinberg Tardos",
                edition: "3rd",
                price: 99,
                location: "Uwaterloo",
                condition: "Excellent"
            },
            {
                isbn_number: 1234567890,
                id: "78191",
                title: "An Introduction to Psychological Science",
                author: "Krause, Smith, Corts & Dolderman",
                edition: "2nd",
                price: 99,
                location: "UofT Scarborough",
                condition: "Great"
            },
            {
                isbn_number: 9780521861243,
                id: "315121",
                title: "How To Prove It, A Structured Approach",
                author: "Velleman, Daniel J.",
                edition: "2nd",
                price: 200,
                location: "UofT Scarborough",
                condition: "Usable"
            },
            {
                isbn_number: 9780132122719,
                id: "231311",
                title: "Discrete Mathematics for Computer Scientists",
                author: "Stein, Drysdale and Bogart",
                edition: "1st",
                price: 124,
                location: "UofT Scarborough",
                condition: "Good"
            }
          ];
        const linkedRows = _.map(rows, (elem) => ({
            ...elem,
            listing_id: <Link 
                to={{
                pathname:  process.env.PUBLIC_URL + '/listing',
                state: {
                    id: elem.id,
                    title: elem.title,
                    author: elem.author,
                    isbnNumber: elem.isbn_number,
                    edition: elem.edition,
                    price: elem.price,
                    location: elem.location
                }
            }} > {elem.id} </Link>
        }));
        const headers = [ 
            {  
                header: 'Listing Id',
                key: 'listing_id', 
            }, 
            {  
                header: 'ISBN Number',
                key: 'isbn_number', 
            }, 
            { 
                header: 'Title', 
                key: 'title', 
            }, 
            { 
                header: 'Author', 
                key: 'author', 
            }, 
            { 
                header: 'Edition', 
                key: 'edition', 
            }, 
            { 
                header: 'Price', 
                key: 'price', 
            }, 
            { 
                header: 'Location', 
                key: 'location', 
            }, 
            {
                header: 'Condition',
                key: 'condition'
            }
        ];
        const table = 
        <DataTable
        rows={linkedRows}
        headers={headers}
        render={({ rows, headers, getHeaderProps, onInputChange }) => (
            <TableContainer title={'Results for Algorithm Design'}>
            <TableToolbarSearch onChange={onInputChange} />
            <br/>
            <Table>
                <TableHead>
                <TableRow>
                    {headers.map(header => (
                    <TableHeader {...getHeaderProps({ header })}>
                        {header.header}
                    </TableHeader>
                    ))}
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map(row => (
                    <TableRow key={row.id}>
                    {row.cells.map(cell => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        )}
        />

        return (
        <div>
            <center><h1>Results</h1></center>
            <center>{table}</center>
        </div>
        );


    }
}

export default Results;