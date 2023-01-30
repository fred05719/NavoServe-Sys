$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
    $('#content').toggleClass('active');

    if($('#sidebar').hasClass('active')) {
      $('.parent-toggle').siblings('ul').removeClass('show');
      $('.parent-toggle').removeClass('open');
      $('.parent-toggle').siblings('ul').children('li').children('a').attr('style', 'padding: 5px !important');
      $('.parent-toggle').siblings('ul').children('li').attr('style', 'padding: 5px !important');
    } else {
      $('.parent-toggle').siblings('ul').children('li').children('a').attr('style', 'padding: 5px 45px !important');

    }
  });

  $('#sidebarCollapse,.body-overlay').on('click', function () {
    $('#sidebar,.body-overlay').toggleClass('show-nav');
  });



    $('.toggle-parent').on('click', function () {  
      $('.toggle-parent').siblings('ul').removeClass('show');
      $('.toggle-parent').removeClass('open');
    });
  


  $('.sidebar-header').click(() => {
    window.location.href = 'social-service'
  });


  //Logout Confirmation
  $("#logout_btn").confirm({
    title: 'Logout',
    content: 'Are you sure you want to logout?',
    animation: 'scale',
    closeAnimation: 'scale',
    animationSpeed: 200,
    boxWidth: '20rem',
    useBootstrap: false,
    buttons: {
      Confirm: {
        text: "Logout",
        btnClass: 'btn-danger',
        action: function () {
          firebase.auth().signOut().then(() => {
            window.location.reload();
          });
        }
      },
      cancel: function () {

      },
    }
  });


  //Page Title

  var pathName = window.location.pathname.split("/").pop();

  switch(pathName) {
    case 'reports':
      $(".navbar-brand").text("Reports");
      break;
    case 'transaction-history':
      $(".navbar-brand").text("Transaction History");
      break;
    case 'social-service':
      $(".navbar-brand").text("Social Service");
      break;
    case 'queue':
      $(".navbar-brand").text("Queue");
      break;
    case 'admin-users':
      $(".navbar-brand").text("Admins");
      break;
    case 'mobile-users':
      $(".navbar-brand").text("Mobile Users");
      break;
    default:
      $(".navbar-brand").text("");
  }

  $('#sidebar ul li').removeClass('active');
  $('a[href="' + pathName + '"]').parent().addClass('active');
  $('a[href="' + pathName + '"]').parents('.dropdown').addClass('active');


  // dropdown toggle
  $('.toggle-parent').on('click', function() {
    if($(this).hasClass('collapsed')) {
      $(this).removeClass('open');
    } else {
      $(this).addClass('open');
    }
  });


});