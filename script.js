$(document).ready(function() {
    $(document).on('click','[data-purpose="modal"]',function(){
        $_ = $($(this).data('target'));
        $_.toggle(0,function(){
            $_.css('opacity','1');
            $_.css('top','calc(50vh - '+$_.height()/2+'px)');
            $_.css('left','calc(50% - '+$_.width()/2+'px)');
        });
        $('body').append('<div class="backgroundModal" data-link="#'+$_[0].id+'"></div>');
        $('body').css('overflow','hidden');
    });
    $(document).on('click','.backgroundModal', function(){
        $_ = $($(this).data('link'));
        if($_.data('close') != false){
            $('body').css('overflow','');
            $_.css('opacity','0');
            $_.toggle();
            $(this).remove();
        }
    });
});
