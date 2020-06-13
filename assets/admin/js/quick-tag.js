
QTags.addButton('quick-tag-button-one', 'U', '<u>', '</u>');
QTags.addButton('quick-tag-button-two', 'JS', quick_tag_prompt);
QTags.addButton('quick-tag-button-three', 'FA', quick_tag_fa_preview);

function quick_tag_prompt () {
	var name = prompt("What's your name??");
	QTags.insertContent(name);
}


function quick_tag_fa_preview () {
	tb_show('Fontawesome', quick_tag.preview);
}


function insertFAicon (icon) {
	tb_remove();
	QTags.insertContent('<i class="'+icon+'"></i>')	;
}