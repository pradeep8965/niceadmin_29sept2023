"use client"
//. import area

// import DefaultImport from 'somelibrary/somelocation';
import DataTable from 'react-data-table-component';

import React from 'react'
let columns=[
    {
        name: 'ID',
        selector: row => row.id,
    },
    {
        name: 'FK Account',
        selector: row => row.fk_ac,
    },
    {
        name: 'Product Link',
        selector: row => row.prod_link,
    },
    {
        name: 'CC Holder Name',
        selector: row => row.cc_holader_name,
    },
    {
        name: 'CC Account',
        selector: row => row.cc_number,
    },
    {
        name: 'GIFT Amount',
        selector: row => row.gc_amount,
    },
    {
        name: 'TX Amount',
        selector: row => row.tx_amount,
    },
    {
        name: 'Final Price',
        selector: row => row.final_price,
    },
    {
        name: 'Gift Card OTP',
        selector: row => row.gc_otp,
    },
    {
        name: 'Purchase OTP',
        selector: row => row.purchase_otp,
    },
    {
        name: 'Remark',
        selector: row => row.remark,
    },
    {
        name: 'Purchase Started AT',
        selector: row => row.purchase_start,
    },
    {
        name: 'Status',
        selector: row => row.status,
    },
    {
        name: 'Action',
        selector: row => row.action,
        cell: (row) => (
          <button
          className="btn btn-danger btn-xs"
          onClick={(e) => {
            alert('Hello');
          }}
          >
            Delete
          </button>
        ),
    },

];
let data=[
    {
      id: 1,
      fk_ac: 'Pradeep-9098925163',
      prod_link: 'SanDisk Cruze Blade SDCZ50 64 GB Pen Drive  (Red, Black)',
      cc_holader_name: 'PRADEEP',
      cc_number: '4012 8888 8888 1881',
      gc_amount: '5000',
      tx_amount: '10000',
      final_price: '15000',
      gc_otp: '896597',
      purchase_otp: '896597',
      remark: 'This Product will be selled',
      remark: 'This Product will be selled',
      purchase_start: 'Sat, 05 Oct 2002 05:25:10 GMT',
      status: '<span class="badge bg-success">Pending</span>',
      action: '<button class="badge bg-danger">Delete</button>',
    },
    {
      id: 1,
      fk_ac: 'Pradeep-9098925163',
      prod_link: 'SanDisk Cruze Blade SDCZ50 64 GB Pen Drive  (Red, Black)',
      cc_holader_name: 'PRADEEP',
      cc_number: '4012 8888 8888 1881',
      gc_amount: '5000',
      tx_amount: '10000',
      final_price: '15000',
      gc_otp: '896597',
      purchase_otp: '896597',
      remark: 'This Product will be selled',
      remark: 'This Product will be selled',
      purchase_start: 'Sat, 05 Oct 2002 05:25:10 GMT',
      status: '<span class="badge bg-success">Pending</span>',
      action: '<button class="badge bg-danger">Delete</button>',
    },
    {
      id: 1,
      fk_ac: 'Pradeep-9098925163',
      prod_link: 'SanDisk Cruze Blade SDCZ50 64 GB Pen Drive  (Red, Black)',
      cc_holader_name: 'PRADEEP',
      cc_number: '4012 8888 8888 1881',
      gc_amount: '5000',
      tx_amount: '10000',
      final_price: '15000',
      gc_otp: '896597',
      purchase_otp: '896597',
      remark: 'This Product will be selled',
      remark: 'This Product will be selled',
      purchase_start: 'Sat, 05 Oct 2002 05:25:10 GMT',
      status: '<span class="badge bg-success">Pending</span>',
      action: '<button class="badge bg-danger">Delete</button>',
    },
    {
      id: 1,
      fk_ac: 'Pradeep-9098925163',
      prod_link: 'SanDisk Cruze Blade SDCZ50 64 GB Pen Drive  (Red, Black)',
      cc_holader_name: 'PRADEEP',
      cc_number: '4012 8888 8888 1881',
      gc_amount: '5000',
      tx_amount: '10000',
      final_price: '15000',
      gc_otp: '896597',
      purchase_otp: '896597',
      remark: 'This Product will be selled',
      remark: 'This Product will be selled',
      purchase_start: 'Sat, 05 Oct 2002 05:25:10 GMT',
      status: '<span class="badge bg-success">Pending</span>',
      action: '<button class="badge bg-danger">Delete</button>',
    },
    {
      id: 1,
      fk_ac: 'Pradeep-9098925163',
      prod_link: 'SanDisk Cruze Blade SDCZ50 64 GB Pen Drive  (Red, Black)',
      cc_holader_name: 'PRADEEP',
      cc_number: '4012 8888 8888 1881',
      gc_amount: '5000',
      tx_amount: '10000',
      final_price: '15000',
      gc_otp: '896597',
      purchase_otp: '896597',
      remark: 'This Product will be selled',
      remark: 'This Product will be selled',
      purchase_start: 'Sat, 05 Oct 2002 05:25:10 GMT',
      status: '<span class="badge bg-success">Pending</span>',
      action: '<button class="badge bg-danger">Delete</button>',
    },
    {
      id: 1,
      fk_ac: 'Pradeep-9098925163',
      prod_link: 'SanDisk Cruze Blade SDCZ50 64 GB Pen Drive  (Red, Black)',
      cc_holader_name: 'PRADEEP',
      cc_number: '4012 8888 8888 1881',
      gc_amount: '5000',
      tx_amount: '10000',
      final_price: '15000',
      gc_otp: '896597',
      purchase_otp: '896597',
      remark: 'This Product will be selled',
      remark: 'This Product will be selled',
      purchase_start: 'Sat, 05 Oct 2002 05:25:10 GMT',
      status: '<span class="badge bg-success">Pending</span>',
      action: '<button class="badge bg-danger">Delete</button>',
    },
    {
      id: 1,
      fk_ac: 'Pradeep-9098925163',
      prod_link: 'SanDisk Cruze Blade SDCZ50 64 GB Pen Drive  (Red, Black)',
      cc_holader_name: 'PRADEEP',
      cc_number: '4012 8888 8888 1881',
      gc_amount: '5000',
      tx_amount: '10000',
      final_price: '15000',
      gc_otp: '896597',
      purchase_otp: '896597',
      remark: 'This Product will be selled',
      remark: 'This Product will be selled',
      purchase_start: 'Sat, 05 Oct 2002 05:25:10 GMT',
      status: '<span class="badge bg-success">Pending</span>',
      action: '<button class="badge bg-danger">Delete</button>',
    },
    {
      id: 1,
      fk_ac: 'Pradeep-9098925163',
      prod_link: 'SanDisk Cruze Blade SDCZ50 64 GB Pen Drive  (Red, Black)',
      cc_holader_name: 'PRADEEP',
      cc_number: '4012 8888 8888 1881',
      gc_amount: '5000',
      tx_amount: '10000',
      final_price: '15000',
      gc_otp: '896597',
      purchase_otp: '896597',
      remark: 'This Product will be selled',
      remark: 'This Product will be selled',
      purchase_start: 'Sat, 05 Oct 2002 05:25:10 GMT',
      status: '<span class="badge bg-success">Pending</span>',
      action: '<button class="badge bg-danger">Delete</button>',
    },
    {
      id: 1,
      fk_ac: 'Pradeep-9098925163',
      prod_link: 'SanDisk Cruze Blade SDCZ50 64 GB Pen Drive  (Red, Black)',
      cc_holader_name: 'PRADEEP',
      cc_number: '4012 8888 8888 1881',
      gc_amount: '5000',
      tx_amount: '10000',
      final_price: '15000',
      gc_otp: '896597',
      purchase_otp: '896597',
      remark: 'This Product will be selled',
      remark: 'This Product will be selled',
      purchase_start: 'Sat, 05 Oct 2002 05:25:10 GMT',
      status: '<span class="badge bg-success">Pending</span>',
      action: '<button class="badge bg-danger">Delete</button>',
    },
    {
      id: 1,
      fk_ac: 'Pradeep-9098925163',
      prod_link: 'SanDisk Cruze Blade SDCZ50 64 GB Pen Drive  (Red, Black)',
      cc_holader_name: 'PRADEEP',
      cc_number: '4012 8888 8888 1881',
      gc_amount: '5000',
      tx_amount: '10000',
      final_price: '15000',
      gc_otp: '896597',
      purchase_otp: '896597',
      remark: 'This Product will be selled',
      remark: 'This Product will be selled',
      purchase_start: 'Sat, 05 Oct 2002 05:25:10 GMT',
      status: '<span class="badge bg-success">Pending</span>',
      action: '<button class="badge bg-danger">Delete</button>',
    },
    {
      id: 1,
      fk_ac: 'Pradeep-9098925163',
      prod_link: 'SanDisk Cruze Blade SDCZ50 64 GB Pen Drive  (Red, Black)',
      cc_holader_name: 'PRADEEP',
      cc_number: '4012 8888 8888 1881',
      gc_amount: '5000',
      tx_amount: '10000',
      final_price: '15000',
      gc_otp: '896597',
      purchase_otp: '896597',
      remark: 'This Product will be selled',
      remark: 'This Product will be selled',
      purchase_start: 'Sat, 05 Oct 2002 05:25:10 GMT',
      status: '<span class="badge bg-success">Pending</span>',
      action: '<button class="badge bg-danger">Delete</button>',
    },
    {
      id: 1,
      fk_ac: 'Pradeep-9098925163',
      prod_link: 'SanDisk Cruze Blade SDCZ50 64 GB Pen Drive  (Red, Black)',
      cc_holader_name: 'PRADEEP',
      cc_number: '4012 8888 8888 1881',
      gc_amount: '5000',
      tx_amount: '10000',
      final_price: '15000',
      gc_otp: '896597',
      purchase_otp: '896597',
      remark: 'This Product will be selled',
      remark: 'This Product will be selled',
      purchase_start: 'Sat, 05 Oct 2002 05:25:10 GMT',
      status: '<span class="badge bg-success">Pending</span>',
      action: '<button class="badge bg-danger">Delete</button>',
    },
    {
      id: 1,
      fk_ac: 'Pradeep-9098925163',
      prod_link: 'SanDisk Cruze Blade SDCZ50 64 GB Pen Drive  (Red, Black)',
      cc_holader_name: 'PRADEEP',
      cc_number: '4012 8888 8888 1881',
      gc_amount: '5000',
      tx_amount: '10000',
      final_price: '15000',
      gc_otp: '896597',
      purchase_otp: '896597',
      remark: 'This Product will be selled',
      remark: 'This Product will be selled',
      purchase_start: 'Sat, 05 Oct 2002 05:25:10 GMT',
      status: '<span class="badge bg-success">Pending</span>',
      action: '<button class="badge bg-danger">Delete</button>',
    },
    {
      id: 1,
      fk_ac: 'Pradeep-9098925163',
      prod_link: 'SanDisk Cruze Blade SDCZ50 64 GB Pen Drive  (Red, Black)',
      cc_holader_name: 'PRADEEP',
      cc_number: '4012 8888 8888 1881',
      gc_amount: '5000',
      tx_amount: '10000',
      final_price: '15000',
      gc_otp: '896597',
      purchase_otp: '896597',
      remark: 'This Product will be selled',
      remark: 'This Product will be selled',
      purchase_start: 'Sat, 05 Oct 2002 05:25:10 GMT',
      status: '<span class="badge bg-success">Pending</span>',
      action: '<button class="badge bg-danger">Delete</button>',
    },
    {
      id: 1,
      fk_ac: 'Pradeep-9098925163',
      prod_link: 'SanDisk Cruze Blade SDCZ50 64 GB Pen Drive  (Red, Black)',
      cc_holader_name: 'PRADEEP',
      cc_number: '4012 8888 8888 1881',
      gc_amount: '5000',
      tx_amount: '10000',
      final_price: '15000',
      gc_otp: '896597',
      purchase_otp: '896597',
      remark: 'This Product will be selled',
      remark: 'This Product will be selled',
      purchase_start: 'Sat, 05 Oct 2002 05:25:10 GMT',
      status: '<span class="badge bg-success">Pending</span>',
      action: '<button class="badge bg-danger">Delete</button>',
    },
    
];
export default function page() {
  /* const [filterText, setFilterText] = React.useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
	 const filteredItems = fakeUsers.filter(
		item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
	); */

	/*const subHeaderComponentMemo = React.useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
			<FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
		);
	}, [filterText, resetPaginationToggle]); */ 

  return (
    <section className="section dashboard">
        <div className="row">
            <div className="col-lg-12">
              <div className="card">
                    <div className="card-body">
                      <DataTable 
                      title="Purchase In Progress"
                        pagination 
                        columns={columns} 
                        data={data}
                      />
                    </div>
              </div>
            </div>
        </div>
    </section>
  )
}
