console.log('js is a go');

$('.delete').on('click', function() {
	let id = $(this).parent().attr('data-id')
	console.log(id, 'is being deleted');
	//use axios to initiate delete function 
	axios.delete('http://localhost:4000/'+ id)
	$(this).parent().remove();
})