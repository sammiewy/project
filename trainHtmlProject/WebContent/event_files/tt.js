var FundCollectionPrice = {
	toggleExtraInputs : function(eleA) {
		var parentContainer = $(eleA).parent("td").parent("tr");
		var extraContainer = parentContainer.next("tr");
		if (extraContainer.css("display") == "none") {
			extraContainer.show();
			$(eleA).html(Lang.get('COLLECT_EDIT_ACTION_收起'));
		} else {
			extraContainer.hide();
			$(eleA).html(Lang.get('COLLECT_EDIT_ACTION_展开'));
		}
	},
	delOption : function(eleA) {
		if (confirm('GLOBAL_确定删除')) {
			var parentContainer = $(eleA).parent("td").parent("tr");
			var extraContainer = parentContainer.next("tr");
			//Check whether or not the option is database status
			if (parentContainer.find("input[name$='.id']").length > 0) {
				//the option exist in the database
				parentContainer.find("input[name$='.deleted']").val("true");
				parentContainer.hide();
				extraContainer.hide();
			} else {
				parentContainer.remove();
				extraContainer.remove();
			}
			//Del price option which discount related 
			var priceOrderJEle = parentContainer.find("input[name$='.order']");
			var priceOrder = priceOrderJEle.val();
			FundCollectionDiscount.delRelatedPrice(priceOrder);
		}
	},
}