import { Component, Input , ViewChild} from '@angular/core';

import { Table } from 'primeng/table';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import  {jsPDF }from 'jspdf';
import html2canvas from 'html2canvas';


import 'jspdf-autotable';


@Component({
  selector: 'export-data',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss'],
})
export class ExportDataComponent {
  @Input() data: any[] = [];
  @Input() headers: any[] = [];
  @Input() type:
    | 'EXCEL'
    | 'Excel'
    | 'excel'
    | 'CSV'
    | 'Csv'
    | 'csv'
    | 'PDF'
    | 'Pdf'
    | 'pdf' = 'excel';
  @ViewChild('dt') table!: Table;

  constructor() {
    // Initialize data and headers
  }

  exportCSV() {
    this.table.exportCSV();
  }

  ngOnInit() {}
  exportExcel() {
    const worksheet = XLSX.utils.json_to_sheet(this.data);
    const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });
    const fileName = 'data.xlsx';
    const fileType =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const file = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(file, fileName);
  }
  saveAsExcelFile(buffer: any, fileName: string): void {
    import('file-saver').then((FileSaver) => {
      let EXCEL_TYPE =
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      let EXCEL_EXTENSION = '.xlsx';
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE,
      });
      FileSaver.saveAs(
        data,
        fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
      );
    });
  }

  exportPdf() {
    const doc = new jsPDF();

    // Add the table headers and data
    const headers = this.headers.map((header) => header.field);
    const data = this.data.map((item) => headers.map((header) => item[header]));
 
  // @ts-ignore
    doc.autoTable({
      head: [headers],
      body: data,
    });

    // Save the PDF file
    const fileName = 'data.pdf';
    doc.save(fileName);
  }
}
