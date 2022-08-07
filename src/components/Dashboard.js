import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

function createData(id, txn, mine_id, time_in, time_out, created) {
  return { id, txn, mine_id, time_in, time_out, created };
}

const columns = [
    { field: 'id', headerName: 'ID', description: 'Serial Number', type: 'number', sortable: true, filter: true, editable: true, headerAlign: 'center', },
    { field: 'reg_no', headerName: 'Registration Number', description: 'Registration Number', type: 'string', sortable: true, width: 150, headerAlign: 'center', },
    { field: 'txn', headerName: 'Txn Hash', headerAlign: 'center', textColor: '#009571'},
    { field: 'mine_id', headerName: 'Mine CCenter Id', type: 'number', sortable: true, filter: true, editable: true, width: 150, headerAlign: 'center', },
    {
      field: 'time_in',
      headerName: 'Time IN',
      type: 'time',
      sortable: true,
      headerAlign: 'center',
    },
    {
      field: 'time_out',
      headerName: 'Time OUT',
      sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
      headerAlign: 'center',
    },
    { field: 'created', headerName: 'Created', type: 'string', sortable: true, headerAlign: 'center',}
  ];

const rows = [
    // { id: 123456, reg_no: 'MH 12 SD 2304', txn: '00x3in2dcnshcnszxjd', mine_id:  17900249, time_in: '2:30 PM', time_out: '4:00 PM', created: '0 min ago'},
    { id: 123457, reg_no: 'MH 12 SD 2304', txn: '0000dcnshcnszxjd', mine_id:  17900249, time_in: '2:30 PM', time_out: '4:00 PM', created: '0 min ago'},
    { id: 123458, reg_no: 'MH 12 SD 2304', txn: '000dcnshcnszxjd', mine_id:  17900249, time_in: '2:30 PM', time_out: '4:00 PM', created: '0 min ago'},
    { id: 123451, reg_no: 'MH 12 SD 2304', txn: '00000dcnshcnszxjd', mine_id:  17900249, time_in: '2:30 PM', time_out: '4:00 PM', created: '0 min ago'},
    { id: 123452, reg_no: 'MH 12 SD 2304', txn: '000dcnshcnszxjd', mine_id:  17900249, time_in: '2:30 PM', time_out: '4:00 PM', created: '0 min ago'},
    { id: 123453, reg_no: 'MH 12 SD 2304', txn: '0x27d30000dcnshcnszxjd', mine_id:  17900249, time_in: '2:30 PM', time_out: '4:00 PM', created: '0 min ago'},
    { id: 123454, reg_no: 'MH 12 SD 2304', txn: '0000000000dcnshcnszxjd', mine_id:  17900249, time_in: '2:30 PM', time_out: '4:00 PM', created: '0 min ago'},
    { id: 123455, reg_no: 'MH 12 SD 2304', txn: '0000dcnshcnszxjd', mine_id:  17900249, time_in: '2:30 PM', time_out: '4:00 PM', created: '0 min ago'},
    { id: 123454, reg_no: 'MH 12 SD 2304', txn: '00000dcnshcnszxjd', mine_id:  17900249, time_in: '2:30 PM', time_out: '4:00 PM', created: '0 min ago'},
    { id: 123440, reg_no: 'MH 12 SD 2304', txn: '000000dcnshcnszxjd', mine_id:  17900249, time_in: '2:30 PM', time_out: '4:00 PM', created: '0 min ago'},
    { id: 123443, reg_no: 'MH 12 SD 2304', txn: '0000dcnshcnszxjd', mine_id:  17900249, time_in: '2:30 PM', time_out: '4:00 PM', created: '0 min ago'},
    { id: 123467, reg_no: 'MH 12 SD 2304', txn: '0000dcnshcnszxjd', mine_id:  17900249, time_in: '2:30 PM', time_out: '4:00 PM', created: '0 min ago'},
    { id: 123498, reg_no: 'MH 12 SD 2304', txn: '0000dcnshcnszxjd', mine_id:  17900249, time_in: '2:30 PM', time_out: '4:00 PM', created: '0 min ago'},
    { id: 123443, reg_no: 'MH 12 SD 2304', txn: '0000dcnshcnszxjd', mine_id:  17900249, time_in: '2:30 PM', time_out: '4:00 PM', created: '0 min ago'},


];

export default function Dashboard() {
  return (
    <div style={{ height: 400, maxWidth: '70%', margin: '50px auto' }}>
      <DataGrid
      sx={{
        boxShadow: 2,
        border: 1,
        borderRadius: 3,
        borderColor: '#3A3A3A',
        elevation: 2,
        '& .MuiDataGrid-cell:hover': {
          color: 'primary.main',
        },
      }}
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10, 20, 30]}
        checkboxSelection
      />
    </div>
  );
}
