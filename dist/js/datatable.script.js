(function ($) {
    "use strict";
	var editor;
	
	$('#without-export').DataTable({
		responsive: true
	});
	
	$('#example').DataTable({
		// dom: 'lBfrtip',
		dom: '<"dTbl-top"<"dTbl-center-col"l><"dTbl-left-col"B><"dTbl-right-col"f>>rtip',
		buttons: [
			'copy', 'csv', 'excel', 'pdf', 'print'
		],
		 responsive: true
	});

	$('.show-filter-pnation').DataTable({
		dom: 'Bfrtip',
		buttons: [
			'copy', 'csv', 'excel', 'pdf', 'print'
		],
		 responsive: true
	});

	$('.user-table').DataTable({
		dom: 'Bfrtip',
		buttons: [
			'copy', 'csv', 'excel', 'pdf', 'print'
		],
		 responsive: true
	});

	$('.common-datatable').DataTable({
		dom: 'Bfrtip',
		buttons: [
			'copy', 'csv', 'excel', 'pdf', 'print'
		],
     responsive: true
});

})(jQuery);
