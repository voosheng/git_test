// btnclose按鈕開閉 
    $(document).ready(function() {
        $(".btn-close").click(function() {
            $(".wrap").toggle();
        });

    });
      
// 警告視窗 Get the modal open or close
var modal = document.getElementById('uiModalBg');

// Get the element that closes the modal
var uiclose = document.getElementsByClassName("uiClose")[0];

// When the user clicks on delete or cancel, close the modal
uiclose.onclick = function() {
  modal.style.display = "none";}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
