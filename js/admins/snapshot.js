$('.admins-page').ready(function () {

  const db = firebase.firestore();
  const auth = firebase.auth();

  let dataSet = [];
  let dataTable;

  //DATATABLES>>>>>>>>>>>>>>>>
  dataTable = $("#admin_user_tbl").DataTable({
    data: dataSet,
    scrollX: true,
    columns: [
      { data: 'id' },
      { data: 'name' },
      { data: 'email' },
      { data: 'verified' },
      { data: 'action' },
    ],
    lengthMenu: [
      [5, 10, 25, 50, -1],
      ['5 rows', '10 rows', '25 rows', '50 rows', 'Show all']
    ],
    columnDefs: [
      {
        targets: 3,
        orderable: false,
        searchable: false,
      },
      { "width": "30%", "targets": [1, 2] },
      { "width": "10%", "targets": 0 }
    ],
  });

  //DELETE FROM DATASET
  function removeObjectWithId(arr, id) {
    const objWithIdIndex = arr.findIndex((obj) => obj.doc_id === id);

    if (objWithIdIndex > -1) {
      arr.splice(objWithIdIndex, 1);
    }

    return arr;
  }

  // Real time listener
  db.collection('admins').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
      if (change.type === 'removed') {
        removeObjectWithId(dataSet, change.doc.id);
        console.log(change.doc.id)
      }
      if (change.type === 'added') {

        var admin = change.doc.data();
        var id = change.doc.id;
        let datas = {
          "doc_id": id,
          "id": admin.id,
          "name": admin.firstname + " " + admin.lastname,
          "email": admin.email,
          "verified": admin.verified ? 'Verified' : 'Not Verified',
          "action": '<div><button type="button" class="btn btn-danger btn-floating btn_del" onclick="delAdmin(\'' + id + '\', \'' + admin.id + '\')"><i class="bx bxs-trash"></i></button></div>'
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