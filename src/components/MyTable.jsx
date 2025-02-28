// src/components/MyTable.js
import React, { useMemo, useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { debounce } from 'lodash'; // Import debounce for name filter
import Paper from '@mui/material/Paper';
const MyTable = ({ tableSchema, tableData }) => {
  const [filteredData, setFilteredData] = useState(tableData);
  const [nameFilter, setNameFilter] = useState('');
  const [selectedRoles, setSelectedRoles] = useState();

  // Create columns from tableSchema
  const columns = useMemo(() => {
    return tableSchema.map((schemaItem) => ({
      field: schemaItem.field,
      headerName: schemaItem.headerName,
      // Add other properties like width, type, etc.
    }));
  }, [tableSchema]);

  // Debounce name filter
  const debouncedNameFilter = useMemo(
    () =>
      debounce((name) => {
        setFilteredData(
          tableData.filter((row) =>
            row.name.toLowerCase().includes(name.toLowerCase())
          )
        );
      }, 300),
    [tableData]
  );

  // Handle name filter change
  const handleNameFilterChange = (event) => {
    const name = event.target.value;
    setNameFilter(name);
    debouncedNameFilter(name);
  };

  // Handle role filter change
  const handleRoleFilterChange = (roles) => {
    setSelectedRoles(roles);
  };

  // Apply role filter
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
        pageSizeOptions={[10,20]}
        checkboxSelection
        sx={{ border: 0 }}
      />
        </Paper>
    </div>
  );
};

export default MyTable;