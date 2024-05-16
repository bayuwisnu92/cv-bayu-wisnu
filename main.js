// function toggledetail(e){
//     console.log(e)
//     // const detail=$(item).children('.about-item-detail')

//     // $(item).slideToggle()
// const target=$(e.target)
// const item=$(target).parents('.about-item')
// console.log($(itam).children())
    
// }

// $(document).ready(function(){
//     $('.btn.button').click(function(){
//       $('.about-item-detail').toggle();
      
//     });
//     $('.btn.button-2').click(function(){
//       $('.about-item-detail-2').toggle();

//     });
//     $('.btn.button-3').click(function(){
//       $('.about-item-detail-3').toggle();

//     });
    
//   });

$(document).ready(function(){
  $('.btn.button').click(function(){
    $('.about-item-detail').toggle();
    $(this).text(function(i, text){
      return text === "last Info" ? "more Info." : "last Info";
    });
   
  });
  

  $('.btn.button-2').click(function(){
    $('.about-item-detail-2').toggle();
    $(this).text(function(i, text){
      return text === "last Info" ? "more Info" : "last Info";
    });
  });

  $('.btn.button-3').click(function(){
    $('.about-item-detail-3').toggle();
    $(this).text(function(i, text){
      return text === "last Info" ? "more Info" : "last Info";
    });
  });
});

function onFromSubmit(e){
  e.preventDefault()
  const email = $('#inp_email')
  const subject = $('#inp_subject')
  const message = $('#inp_message')
  if (!$(email).val()){
    alert('email wajib diiisi')
  } else if(!$(subject).val()){
    alert('subject wajib diisi')
  }else if (!$(message).val()){
    alert("message wajib diisi")
  }else{
    alert('form submite')
    console.log('berhasil')
  }

}

