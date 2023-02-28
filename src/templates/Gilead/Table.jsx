import React from 'react';
import DataTable from 'react-data-table-component';
import dayjs from "dayjs";
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);
import { BiChevronUp } from 'react-icons/bi'



export default function Table({ data, columns, title }) {

    return (
        <div>
            <h3>{title}</h3>
            <DataTable
                columns={columns}
                data={data}
                selectableRows
                defaultSortFieldId={1}
                sortIcon={<BiChevronUp />}
                pagination
            />
        </div>
    );
}
