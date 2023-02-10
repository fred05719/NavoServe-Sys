$(document).ready(function () {
  
  const db = firebase.firestore();
  const auth = firebase.auth();

  let dataSet = [];

  let dataTable;

  //DATATABLES>>>>>>>>>>>>>>>>
  dataTable = $("#admin_user_tbl").DataTable({
    data: dataSet,
    scrollX: true,
    columns: [
      { data: 'name' },
      { data: 'email' },
      { data: 'action' },
    ],
    lengthMenu: [
      [5, 10, 25, 50, -1],
      ['5 rows', '10 rows', '25 rows', '50 rows', 'Show all']
    ],
    columnDefs: [
      {
        targets: 2,
        orderable: false,
        searchable: false,
      },
      { "width": "30%", "targets": 1 },
      { "width": "30%", "targets": 0 }
    ],
  });

  // Real time listener
  db.collection('customers').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
      if(change.type === 'removed') {
        removeObjectWithId(dataSet, change.doc.id);
      }
      if(change.type === 'added') {
      
        var admin = change.doc.data();
        var id = change.doc.id;
        var fullname = admin.last_name +', '+ admin.first_name;
        let datas = {
          // "id": change.doc.id,
          "name": fullname,
          "email": admin.email,
          "action": '<div data-id=' + change.doc.id + '><button type="button" class="btn btn-danger btn-floating btn_del" onclick="delAdmin(\'' + id + '\')"><i class="bx bxs-trash"></i></button></div>'
        }
        dataSet.push(datas);
      }
    })
    console.log(dataSet);
    dataTable.clear();
    dataTable.rows.add(dataSet);
    dataTable.draw();
  });

});