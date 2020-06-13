// alert("hello")
QTags.addButton('quick-tag-button-one', 'U', '<u>', '</u>');
QTags.addButton('quick-tag-button-two', 'JS', jsPropmpt);

function jsPropmpt () {
	var name = prompt("What's your name??");
	// var text = name;
	QTags.insertContent(name);
}