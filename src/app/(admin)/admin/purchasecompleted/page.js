"use client"
import React, { useEffect, useRef, useState } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';

export default function page() {
   const [products, setProducts] = useState([
                                                {
                                                  id: '1',
                                                  fk_account: 'f230fh0g3',
                                                  product_link: 'Bamboo Watch',
                                                  cc_account: 'Product Description',
                                                },
                                                {
                                                  id: '2',
                                                  fk_account: 'pradip',
                                                  product_link: 'PP Watch',
                                                  cc_account: 'Product ',
                                                },
                                                {
                                                  id: '2',
                                                  fk_account: 'pradip',
                                                  product_link: 'PP Watch',
                                                  cc_account: 'Product ',
                                                },
                                                {
                                                  id: '2',
                                                  fk_account: 'pradip',
                                                  product_link: 'PP Watch',
                                                  cc_account: 'Product ',
                                                },
                                                {
                                                  id: '2',
                                                  fk_account: 'pradip',
                                                  product_link: 'PP Watch',
                                                  cc_account: 'Product ',
                                                },
                                                {
                                                  id: '2',
                                                  fk_account: 'pradip',
                                                  product_link: 'PP Watch',
                                                  cc_account: 'Product ',
                                                },
                                                {
                                                  id: '2',
                                                  fk_account: 'pradip',
                                                  product_link: 'PP Watch',
                                                  cc_account: 'Product ',
                                                },
                                                {
                                                  id: '2',
                                                  fk_account: 'pradip',
                                                  product_link: 'PP Watch',
                                                  cc_account: 'Product ',
                                                },
                                                {
                                                  id: '2',
                                                  fk_account: 'pradip',
                                                  product_link: 'PP Watch',
                                                  cc_account: 'Product ',
                                                },
                                                {
                                                  id: '2',
                                                  fk_account: 'pradip',
                                                  product_link: 'PP Watch',
                                                  cc_account: 'Product ',
                                                },
                                                {
                                                  id: '2',
                                                  fk_account: 'pradip',
                                                  product_link: 'PP Watch',
                                                  cc_account: 'Product ',
                                                },
                                                {
                                                  id: '2',
                                                  fk_account: 'pradip',
                                                  product_link: 'PP Watch',
                                                  cc_account: 'Product ',
                                                },
                                                {
                                                  id: '2',
                                                  fk_account: 'pradip',
                                                  product_link: 'PP Watch',
                                                  cc_account: 'Product ',
                                                },
                    ]);
                    const dt = useRef(null);
                
                    const cols = [
                        { field: 'id', header: 'ID' },
                        { field: 'fk_account', header: 'FK Account' },
                        { field: 'product_link', header: 'Prodect Link' },
                        { field: 'cc_account', header: 'CC Account' }
                    ];
                
                    const exportColumns = cols.map((col) => ({ title: col.header, dataKey: col.field }));
                
                    useEffect(() => {
                       // ProductService.getProductsMini().then((data) => setProducts(data));
                    }, []); // eslint-disable-line react-hooks/exhaustive-deps
                
                    const exportCSV = (selectionOnly) => {
                        dt.current.exportCSV({ selectionOnly });
                    };
                
                    const exportPdf = () => {
                        import('jspdf').then((jsPDF) => {
                            import('jspdf-autotable').then(() => {
                                const doc = new jsPDF.default(0, 0);
                
                                doc.autoTable(exportColumns, products);
                                doc.save('products.pdf');
                            });
                        });
                    };
                
                    const exportExcel = () => {
                        import('xlsx').then((xlsx) => {
                            const worksheet = xlsx.utils.json_to_sheet(products);
                            const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
                            const excelBuffer = xlsx.write(workbook, {
                                bookType: 'xlsx',
                                type: 'array'
                            });
                
                            saveAsExcelFile(excelBuffer, 'products');
                        });
                    };
                
                    const saveAsExcelFile = (buffer, fileName) => {
                        import('file-saver').then((module) => {
                            if (module && module.default) {
                                let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
                                let EXCEL_EXTENSION = '.xlsx';
                                const data = new Blob([buffer], {
                                    type: EXCEL_TYPE
                                });
                
                                module.default.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
                            }
                        });
                    };
                
                    const header = (
                        <div className="flex align-items-center justify-content-end gap-2">
                            <Button type="button" icon="pi pi-file" rounded onClick={() => exportCSV(false)} data-pr-tooltip="CSV" />
                            <Button type="button" icon="pi pi-file-excel" severity="success" rounded onClick={exportExcel} data-pr-tooltip="XLS" />
                            <Button type="button" icon="pi pi-file-pdf" severity="warning" rounded onClick={exportPdf} data-pr-tooltip="PDF" />
                        </div>
                    );                
  return (
    <section className="section dashboard">
      <div className="row">
          <div className="col-lg-12">
            <div className="card">
                  <div className="card-body"> 
                  <Tooltip target=".export-buttons>button" position="bottom" />

                  <DataTable ref={dt} value={products} header={header} tableStyle={{ minWidth: '50rem' }}>
                        {
                            cols.map((col, index) => (
                                <Column key={index} field={col.field} header={col.header} />
                            ))
                        }
                  </DataTable>
                  </div>
            </div>
          </div>
      </div>
    </section>
  )
}
