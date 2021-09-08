var bi = $('.cate_btn').width();
        $('.cate_btn').css({
          'height': bi + 10 + 'px', 'line-height': bi + 'px'
        });
//alert(localStorage.im);
        if(localStorage.ims == 1)
        {
        		$("#imbtn").addClass("show_tick");
        		
        }
        else
        {
        		$("#imbtn").removeClass("show_tick");
        }
        

        if(localStorage.setloc==1)
        {
        		$("#locbtn").addClass("show_tick");
        }
        
        else
        {
        	$("#locbtn").removeClass("show_tick");
        }