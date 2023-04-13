$(function(){
    var current = location.pathname;
    $('#menu div.navbar-nav a').each(function(){
        var $this = $(this);
        console.log($this);
        // if the current path is like this link, make it active
        if($this.attr('href').indexOf(current) !== -1){
            $this.addClass('active');
        }
    })
})