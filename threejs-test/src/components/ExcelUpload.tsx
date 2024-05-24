import React, {useEffect, useState} from 'react';
import * as XLSX from 'xlsx';
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {padding, width} from "@mui/system";
import {Box} from "@mui/material";


// Function to generate Excel headers
const generateExcelHeaders = (num) => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const result = [];

    for (let i = 0; i < num; i++) {
        let columnName = '';
        let temp = i;

        while (temp >= 0) {
            columnName = letters[temp % 26] + columnName;
            temp = Math.floor(temp / 26) - 1;
        }

        result.push(columnName);
    }

    return result;
};


const ExcelUpload = () => {
    const [data, setData] = useState([]);

    const handleFileUpload = (event: any) => {
        const file = event?.target?.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const binaryStr = e.target.result;
            const workbook = XLSX.read(binaryStr, {type: 'binary'});

            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];

            const jsonData = XLSX.utils.sheet_to_json(sheet);
            setData(jsonData);
        };

        reader.readAsBinaryString(file);
    };

    const number_of_iterate = 10

    // const iterate = ()=>{
    //     let row = []
    //     for(let i=0; i<number_of_iterate; i++){
    //
    //     }
    // }
    useEffect(() => {
        // console.log(data)
    }, [data])

    const StyledTableCell = styled(TableCell)(({theme: any}) => ({
        [`&.${tableCellClasses.head}`]: {
            maxWidth: "5em",
            padding: "0",
            // backgroundColor: theme.palette.common.black,
            // color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            maxWidth: "5em",
            padding: "0",
            // fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({theme}) => ({
        '&:nth-of-type(odd)': {
            // backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));


    return (
        <Box className={"table_container"} sx={{width: "100%", overflow: "auto"}}>
            <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload}/>
            <div>
                {data.length > 0 && (
                    <Table sx={{minWidth: 700}} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell component="th" sx={{width: "1em"}}
                                                 className={"number_row_td"}
                                                 key={"header"}>{}</StyledTableCell>
                                {generateExcelHeaders(number_of_iterate).map((header) => (
                                    <StyledTableCell component="th" sx={{width: "5em"}}
                                                     className={"alphabet_header"}
                                                     key={header}>{header}</StyledTableCell>
                                ))}
                            </TableRow>
                            <TableRow>
                                <StyledTableCell component="th" sx={{width: "1em"}}
                                                 className={"number_row_td"}
                                                 key={"addasd"}>{0}</StyledTableCell>
                                {generateExcelHeaders(number_of_iterate).map((alphabet, index) => {
                                    return <StyledTableCell component="th" sx={{width: "5em", fontWeight: "bold"}}
                                                            key={index}>{Object.keys(data[index])[index]}
                                    </StyledTableCell>
                                })}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.slice(0, 10).map((row, index) => (
                                    <StyledTableRow key={row.id}>
                                        <StyledTableCell className={"number_row_td"}
                                                         component="td" sx={{width: "1em"}}
                                                         key={"asd"}>{index + 1}
                                        </StyledTableCell>
                                        {generateExcelHeaders(number_of_iterate).map((alphabet, _index) => {
                                            return <StyledTableCell component="td" sx={{width: "5em"}}
                                                                    key={_index}>{data[index][Object.keys(data[_index])[_index]]}
                                            </StyledTableCell>
                                        })}
                                    </StyledTableRow>
                                )
                            )}
                        </TableBody>
                    </Table>
                )}
            </div>
        </Box>
    );
};

export default ExcelUpload;
