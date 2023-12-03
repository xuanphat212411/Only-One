//Restaurant
$('#nha-hang').owlCarousel({
	loop:true,	// cho lap lại
	items:1,	// xuất hiện 1 ảnh thôi
	smartSpeed:1000,   	// tốc độ thay đổi ảnh
	autoplay:true,		// cho phép tự động chạy
	dots:false,
	autoplayTimeout:3000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
nav:false,	// cho xuất hiện bộ nút tới lui 
})
// Make Up
$('#trang-diem').owlCarousel({
    loop:true,
    margin:10,
    autoplayTimeout:2000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
	autoplay:true,
	dots:false,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})
//Photography
$('#chup-anh').owlCarousel({
	loop:true,	// cho lap lại
	items:1,	// xuất hiện 1 ảnh thôi
	smartSpeed:1000,   	// tốc độ thay đổi ảnh
	autoplay:true,		// cho phép tự động chạy
	dots:false,
	autoplayTimeout:3000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
nav:false,	// cho xuất hiện bộ nút tới lui 
})
// Invitations
$('#thiep').owlCarousel({
    loop:true,
    margin:10,
    autoplayTimeout:2000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
	autoplay:true,
	dots:false,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
// Dress
$('#trang-phuc').owlCarousel({
    loop:true,
    margin:10,
	autoplay:true,
	dots:false,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})