import React, { Component } from 'react';
import { DataTable } from 'carbon-components-react';
import { Link } from 'react-router-dom';
import _  from 'lodash';

const {
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
    TableHeader,
} = DataTable;


class Results extends Component  {
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
            },
            {
              isbn_number: 1234567890,
              id: "3421",
              title: "Algorithm Design",
              author: "Kleinberg Tardos",
              edition: "2nd",
              price: 102,
              location: "UofT Downtown",
            },
            {
              isbn_number: 1234567890,
              id: "7891",
              title: "Algorithm Design",
              author: "Kleinberg Tardos",
              edition: "3rd",
              price: 99,
              location: "Uwaterloo",
            },
          ];
        const linkedRows = _.map(rows, (elem) => ({
            ...elem,
            listing_id: <Link to={"/listing"} params={{...elem}} > {elem.id} </Link>
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
        ];
        const table = 
        <DataTable
        rows={linkedRows}
        headers={headers}
        render={({ rows, headers, getHeaderProps }) => (
            <TableContainer title={'Results for Tardos'}>
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
            <center><p>results</p></center>
            <center>{table}</center>
        </div>
        );


    }
}

export default Results;