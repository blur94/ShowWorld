import React from 'react'
import DataTable from 'react-data-table-component';
import dayjs from "dayjs";
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);



export default function Table() {

    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Owner',
            selector: row => row.owner,
        },
        {
            name: 'Collaborator',
            selector: row => row.collaborators,
        },
        {
            name: 'Last Modified',
            selector: row => row.last_modified,
        },
        {
            name: 'File Format',
            selector: row => row.file_type,
        },
    ];

    const data = [
        {
            title: "Budget",
            owner: "me",
            collaborators: "others",
            last_modified: dayjs(Date.now()).fromNow(true),
            file_type: "pdf",
        },
        {
            title: "Leave Application",
            owner: "me",
            collaborators: "others",
            last_modified: dayjs(Date.now()).fromNow(true),
            file_type: "docx",
        },
        {
            title: "PDDF",
            owner: "me",
            collaborators: "others",
            last_modified: dayjs(Date.now()).fromNow(true),
            file_type: "pptx",
        },
        {
            title: "How to Think",
            owner: "me",
            collaborators: "others",
            last_modified: dayjs(Date.now()).fromNow(true),
            file_type: "xlsx",
        },
        {
            title: "How to Think",
            owner: "me",
            collaborators: "others",
            last_modified: dayjs(Date.now()).fromNow(true),
            file_type: "svg",
        },
    ];

  return (
    <>
    <h3>Table Template</h3>
      <DataTable
          columns={columns}
          data={data}
          selectableRows
      />
      </>
  )
}
