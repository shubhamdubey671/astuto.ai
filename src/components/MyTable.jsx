import React, { useMemo, useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { debounce } from 'lodash';
import Paper from '@mui/material/Paper';
import Avatar from "@mui/material/Avatar";

const MyTable = ({ tableSchema, tableData }) => {
  const [filteredData, setFilteredData] = useState(tableData);
  const [nameFilter, setNameFilter] = useState('');
  const [selectedRoles, setSelectedRoles] = useState();



  const columns = useMemo(() => {
    return tableSchema.map((schemaItem) => {
      if (schemaItem.field === "name") {
        return {
          field: schemaItem.field,
          headerName: schemaItem.headerName,
          width: 200,
          renderCell: (params) => {
            return (<div style={{ display: "flex", alignItems: "center" }}>
              <Avatar src={params.row.img} alt={params.row.name} />
              <span style={{ marginLeft: "10px" }}>{params.row.name}</span>
            </div>
            )

          }
        };
      }
      if (schemaItem.field === "id") {
        return {
          field: schemaItem.field,
          headerName: schemaItem.headerName,
          width: 80,
        }
      }
      if (schemaItem.field === "status") {
        return {
          field: schemaItem.field,
          headerName: schemaItem.headerName,
          width: 80,
          renderCell: (params) => {
            console.log(params.row.status, "testing ")

            return (
              <div style={{ color: "blue" }}>
                {params.row.status}
              </div>
            )


          }
        }
      }
      if (schemaItem.field === "email") {
        return {
          field: schemaItem.field,
          headerName: schemaItem.headerName,
          width: 300,
        }
      }

      return {
        field: schemaItem.field,
        headerName: schemaItem.headerName,
        width: 180,
      };
    });
  }, [tableSchema]);
  console.log(columns, "columns")
  const debouncedNameFilter = useMemo(
    () =>
      debounce((name) => {
        setFilteredData(
          tableData.filter((row) =>
            row.name.toLowerCase().includes(name.toLowerCase())
          )
        );
      }, 700),
    [tableData]
  );


  const handleNameFilterChange = (event) => {
    const name = event.target.value;
    setNameFilter(name);
    debouncedNameFilter(name);
  };


  const handleRoleFilterChange = (roles) => {
    setSelectedRoles(roles);
  };


  useEffect(() => {
    if (selectedRoles?.length > 0) {
      setFilteredData(
        tableData.filter((row) => selectedRoles.includes(row.role))
      );
    } else {
      setFilteredData(tableData);
    }
  }, [selectedRoles, tableData]);

  const paginationModel = { page: 0, pageSize: 5 };
  return (
    <div>

      <input
        type="text"
        placeholder="Filter by Name"
        value={nameFilter}
        onChange={handleNameFilterChange}
        className="filter-input"
      />
      <Paper sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={filteredData}
          columns={columns}
          sortingOrder={['asc', 'desc']}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10, 25, { value: -1, label: 'All' }]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </div>
  );
};

export default MyTable;