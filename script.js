//TODO Fade in (use animate)
//TODO Prevoir how to close
$(document).ready(function() {
    $(document).on('click','[data-purpose="modal"]',function(){
        $_ = $($(this).data('target'));
        $_.toggle();
        $('body').append('<div class="backgroundModal"></div>');
        $('body').css('overflow','');
        $_.css('top','calc(50vh - '+$_.height()/2+'px)');
        $_.css('left','calc(50% - '+$_.width()/2+'px)');
    });
    $(document).on('click','.backgroundModal', function(){
        $('body').css('overflow','none');
        $_.toggle();
        $(this).remove();
    });
});
