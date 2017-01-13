(function(){

   const checkboxes = document.querySelectorAll('[type="checkbox"]');

   let lastChecked;

   function selectBox(event){

      let inBetween = false;
      if (event.shiftKey && this.checked) {

         checkboxes.forEach(box => {
            if (box === this || box === lastChecked) {
               inBetween = !inBetween;
            };

            if (inBetween){
               box.checked = true;
            }
         });
      }

      lastChecked = this;
   };

   checkboxes.forEach(box => {
      box.addEventListener('click', selectBox);
   });






})();
