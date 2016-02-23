// LDX FROG.TIPS
var $FROG = function() {
   var FROG_CTL = '#TIP_FROG',
       LD_TIPS = function(DATA) {
          var HDL_DATA = function(DATA) {
             var TIPS = DATA.tips,
                 TIP_FROG = function() {
                     var TIP = TIPS.pop();
                     (TIP !== undefined) ? $("#TIP").html(TIP.tip) : LD_TIPS();
                 };

             TIP_FROG();
             $(FROG_CTL).on('click', TIP_FROG);
          },
          HDL_ERROR = function(XHR, HUH) {
            $('#TIP').html('FROG not found. Meditate on FROG. <a href="https://stallman.org/">Ribbit</a>');
            $(FROG_CTL).on('click', TIP_FROG);
          };

          $(FROG_CTL).off('click');

          if (DATA !== undefined) {
            HDL_DATA(DATA);
          } else {
            $.ajax({
              type: 'GET',
              url: '/api/1/tips',
              success: function(DATA) {
                if (DATA === undefined || (DATA.tips !== undefined && DATA.tips.length === 0)) {
                  // Prevent FROG overflow
                  HDL_ERROR();
                } else {
                  HDL_DATA(DATA);
                }
              },
              error: HDL_ERROR
            });
         }
       };
  return LD_TIPS;
}();