console.log('js is a go');

$('.delete').on('click', function() {
	let id = $(this).parent().attr('data-id')
	console.log(id, 'is being deleted');
	//use axios to initiate delete function 
	axios.delete('http://localhost:4000/'+ id)
	$(this).parent().remove();
})

//Add event to the thumbs up/down to add approval rating
$('.upVote').on('click', function(e){
	//This needs to be shortened....
	let x = $(this).siblings('.likes');
	let y = x.html();
	let voteCount = parseInt(y);
	let newNum = voteCount += 1;
	let now = $(x).html(newNum)
	console.log('newNum is -->', newNum);

	// let id = parseInt($(this).parent().attr('data-id'))

	let id = $(this).parent().attr('data-id')
	console.log('id is a -->', typeof id);
console.log('parsing int', id);
	axios.patch('http://localhost:4000/' + id, {
		likes: newNum,
		id: id
	})
});